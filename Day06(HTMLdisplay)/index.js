const express = require('express')
const path = require('path');
const { pathToFileURL } = require('url');

const app = express();
const PathOfPublic = path.join(__dirname, 'public')

app.set('view engine', 'ejs' )

// app.use(express.static(PathOfPublic))
app.get("",(_,res)=>{
    res.sendFile(`${PathOfPublic}/home.html`)
})

app.get("/profile",(_,res)=>{
    user={
        name:"Tushar Pachouri",
        email:"tushar@gmail.com",
        city:"mathura",
        skills:['node','python','golang','react']
    }

    res.render('profile',{user})
})

app.get("/home",(_,res)=>{
    res.render('home')
})

app.get('/about',(_,res)=>{
    res.sendFile(`${PathOfPublic}/about.html`)
}
);

app.get('*',(_,res)=>{ // url is not giving or wrong... it will show the help.html file on the web page
    res.sendFile(`${PathOfPublic}/help.html`)
})

app.listen(8080);
