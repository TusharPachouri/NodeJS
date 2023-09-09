const fs = require('fs');

const path = require('path');

const dirPath = path.join(__dirname,'files');
console.log(dirPath);

for(var i=0; i < 5; i++){
    fs.writeFileSync(`${dirPath}/file ${i+5}.txt`,`Hello this files index is ${i}`);
}

fs.readdir(dirPath,(err,files)=>{
    // console.log(item) ==> it will show in the form of an anrray
    files.forEach(item => {
        console.log(item);
    });
})