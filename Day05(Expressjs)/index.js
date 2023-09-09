const express = require('express');
const app = express();

app.get('',(req,res)=>{
    res.send(`"hello this is home page"
    <a href = "/about">About page</a>
    `)
})

app.get('/about',(req,res)=>{
    res.send(`
    <input type = "text" placeholder= "user name" value = "${req.query.name} "/>
    <button>click me</button>
    `)
})
app.get('/help',(req,res)=>{
    [
        {
            name:"tushar pachouri",
            email:"tusharpachouri001@gmail.com"
        },
        {
            name:"anmol",
            email:"anmol@gmail.com"
        }
    ]
})

app.listen(8080);