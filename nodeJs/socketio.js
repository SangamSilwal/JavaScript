const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const path = require('path');

const app = express();
const server = http.createServer(app);

// Improved CORS configuration
app.use(cors({
  origin: process.env.CORS_ORIGIN || "http://localhost:3000", // Adjust for production
  credentials: true
}));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'socket.html'));
});

// Socket.IO configuration with enhanced settings
const io = new Server(server, {
  cors: {
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
  },
  connectionStateRecovery: {
    maxDisconnectionDuration: 2 * 60 * 1000, // 2 minutes
    skipMiddlewares: true,
  }
});

// Store users with additional metadata
const users = new Map(); // { socketId: { nickname, isTyping, joinedAt } }

io.on("connection", (socket) => {
  console.log(`⚡ New connection: ${socket.id}`);

  // Validate nickname before registration
  socket.on("register", (nickname, callback) => {
    try {
      if (!nickname || typeof nickname !== 'string' || nickname.trim().length === 0) {
        throw new Error('Nickname is required');
      }

      if (Array.from(users.values()).some(user => user.nickname === nickname)) {
        throw new Error('Nickname is already taken');
      }

      users.set(socket.id, { 
        nickname: nickname.trim(), 
        isTyping: false,
        joinedAt: new Date()
      });

      // Notify all users
      io.emit("user_list", getOnlineUsers());
      socket.broadcast.emit("message", {
        sender: "System",
        text: `${nickname} joined the chat`,
        timestamp: new Date()
      });

      // Acknowledge successful registration
      if (callback) callback({ status: 'success' });
    } catch (error) {
      if (callback) callback({ status: 'error', message: error.message });
    }
  });

  // Handle messages with validation
  socket.on("message", (text, callback) => {
    try {
      const user = users.get(socket.id);
      if (!user) throw new Error('Not registered');
      if (!text || typeof text !== 'string' || text.trim().length === 0) {
        throw new Error('Message cannot be empty');
      }

      const messageData = { 
        sender: user.nickname, 
        text: text.trim(),
        timestamp: new Date()
      };

      socket.broadcast.emit("message", messageData);
      users.set(socket.id, { ...user, isTyping: false });
      io.emit("typing", { nickname: null });

      // Acknowledge message receipt
      if (callback) callback({ status: 'success' });
    } catch (error) {
      if (callback) callback({ status: 'error', message: error.message });
    }
  });

  // Typing indicator with throttling
  let typingTimer;
  socket.on("typing", () => {
    const user = users.get(socket.id);
    if (user) {
      clearTimeout(typingTimer);
      users.set(socket.id, { ...user, isTyping: true });
      socket.broadcast.emit("typing", { nickname: user.nickname });
      
      typingTimer = setTimeout(() => {
        users.set(socket.id, { ...user, isTyping: false });
        socket.broadcast.emit("typing", { nickname: null });
      }, 3000);
    }
  });

  // Private messages with validation
  socket.on("private_message", ({ toNickname, text }, callback) => {
    try {
      const sender = users.get(socket.id);
      if (!sender) throw new Error('Not registered');
      
      const receiverEntry = [...users.entries()].find(
        ([_, user]) => user.nickname === toNickname
      );

      if (!receiverEntry) throw new Error('User not found');

      const [receiverSocketId, receiver] = receiverEntry;
      const messageData = {
        from: sender.nickname,
        text,
        timestamp: new Date()
      };

      io.to(receiverSocketId).emit("private_message", messageData);
      
      // Acknowledge private message
      if (callback) callback({ 
        status: 'success',
        to: receiver.nickname
      });
      socket.emit('acknowledge','Your message was received')
    } catch (error) {
      if (callback) callback({ status: 'error', message: error.message });
    }
  });

  // Handle disconnection
  socket.on("disconnect", (reason) => {
    const user = users.get(socket.id);
    if (user) {
      users.delete(socket.id);
      io.emit("user_list", getOnlineUsers());
      socket.broadcast.emit("message", {
        sender: "System",
        text: `${user.nickname} left the chat`,
        timestamp: new Date()
      });
      console.log(`⚠️ Disconnected: ${user.nickname} (${reason})`);
    }
  });

  // Handle connection errors
  socket.on("error", (error) => {
    console.error(`Socket error (${socket.id}):`, error);
  });
});

// Helper function to get online users
function getOnlineUsers() {
  return Array.from(users.values()).map(user => ({
    nickname: user.nickname,
    onlineSince: user.joinedAt
  }));
}

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`Allowed CORS origin: ${process.env.CORS_ORIGIN || "http://localhost:3000"}`);
});

// Handle server errors
server.on('error', (error) => {
  console.error('Server error:', error);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});