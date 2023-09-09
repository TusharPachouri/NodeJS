const http = require('http');
// const path = require('path');
require('dotenv').config()
const colors = require('colors')

function AboutMe(req,res) {
    res.write("<h1>Hello, My name is Tushar PAchouri And I am a Full stack Web developer.</h1>")
    res.end();
}

// const ContactMe = (req,res) =>{ //its an arrow function its easy to use and a better/new way to represent functions
//     res,write("<h1> My Phone number is 8218504473 </h1>");
//     res.end();
// }
console.log(process.env.PORT.bgBlue)
http.createServer(AboutMe).listen(process.env.PORT || 3000)

// http.createServer((req,res)=>{
//     res.write("<h1>Hello this is Tushar Pachouri</h1>");
//     res.end();
// }).listen(8080)