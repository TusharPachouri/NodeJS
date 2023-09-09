const express = require('express')

const reqFilter = require("./middleware")

const route = express.Router();

const app = express();

// const reqFilter = (req, res, next)=>{
//     if(!req.query.age){ // here we are taking the age as a request from the client and if the age is given and it should be above 18.
//             res.send("please provide age");
//     }else if(req.query.age < 18){
//         res.send("you are not eligible")
//     }
//     else{
//         next(); // it should be there at the last of the middleware for execute the code otherwise it will show an error.
//     }
// }

// app.use(reqFilter); // it will apply on all the routes in this file
route.use(reqFilter) //

app.get("/",reqFilter,(req,res)=>{ // now reqFilter middleware will only work for this route only!!
    res.send("<h1>Welcome to home page</h1>");
})

app.get("/user",(req,res)=>{
    res.send("Welcome to users page");
})

route.get("/contack",reqFilter,(req,res)=>{
    res.send("<h1>Welcome to contact page</h1>");
})

route.get("/about", reqFilter ,(req,res)=>{
    res.send("Welcome to about page");
})
app.use('/',route); // middleware will apply on the routes only

app.listen('8080');