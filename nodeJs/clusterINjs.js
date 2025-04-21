//cluster
/*
In node js a cluster refers to a way of creating multiple instances of your application
(worker processes) that can run simultaneously to take advantage of multi-core system. This is 
important because nodejs is only a single threaded by default
*/
const cluster = require('cluster')
const os = require("os")

const totalCpus = os.cpus().length;
console.log(totalCpus)