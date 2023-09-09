const fs = require('fs') // it will import the whole module and its functions and take more memory.

// const fsWrite = require('fs').writeFileSync // it will only import the writeFilesync function from the module.

console.log("directory in which this file is present is: ",__dirname) 
console.log("directory in which this file is present with the name of the file : ",__filename)

fs.writeFileSync("file.txt","Barry alan is the fastest man alive.")