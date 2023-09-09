const express = require('express')

const app = express();

app.get('/',(req,res)=>{
    res.send('Its working')
})

app.listen(8080)