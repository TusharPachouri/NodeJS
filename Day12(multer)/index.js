const express = require('express')
const multer = require('multer')
const app = express();

const upload = multer({
    storage: multer.diskStorage({
        destination:function(req,file,cb){//cb - call back
            cb(null,'uploads')
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname+"-"+Date.now() + ".jpg")
        }
    })
}).single('user-data')

app.post('/upload',upload,async (req,res)=>{
   res.send('file sended')
})

app.listen(8080)