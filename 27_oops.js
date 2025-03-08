function User(username, loginCount, isloggedIn)
{
    this.username = username
    this.loginCount = loginCount
    this.isloggedIn = isloggedIn
    this.greating = function(){
        console.log(`hello ${this.username} how are you`)
    }
    return this
}


const userOne = User("Sangam Silwal",6,true)
console.log(userOne)
console.log(userOne.greating())