console.log(process.argv[2]); //whatever is written on the right side of the file it will print on the trminal.

const fs = require('fs');

const input = process.argv;

// fs.writeFileSync(input[2],input[3]); // first input will be the name of the file you want to create and other one will be the data you wanna store in the file u just created.

if(input[2] == 'add'){
    fs.writeFileSync(input[3],input[4]);
}else if(input[2] == 'remove'){
    fs.unlinkSync(input[3]);
}else{
    console.warn("Wrong input is given");
}
