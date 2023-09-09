const fs = require('fs')

const path = require('path')
const dirPath = path.join(__dirname,'files')
const filePath = `${dirPath}/data.txt`

fs.writeFileSync(`${dirPath}/data.txt`,"Data inside this file.")

fs.readFile(filePath,'utf-8',(err,data)=>{
    console.log(data)
})

fs.appendFile(filePath, ' and we can add data in it as well with the use of append function',(err)=>{
    if(!err) console.log('file is updated !!')
})
 
fs.rename(filePath, `${dirPath}/newDataFile.txt`,(err)=>{
    if(!err) console.log(" name is changed !!")
})

// fs.unlinkSync(`${dirPath}/newDataFile.txt`) // it will delete the file in the directory