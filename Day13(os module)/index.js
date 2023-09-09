const os = require('os')
console.log("free memory:",os.freemem()/(1024**3))
console.log("os arch: ", os.arch())
console.log("free memory:",os.totalmem()/(1024**3))
console.log(os.hostname())
console.log(os.platform())
console.log(os.userInfo())
console.log(`System uptime is ${os.uptime() / 3600} hours`)