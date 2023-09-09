const express = require('express')
const dbConnect = require('./db.js');
const mongodb = require('mongodb')
const { parse } = require('dotenv');

const app = express();
app.use(express.json()); // we are using this instead of body parser... this method comes after 4.6 version of express before that we were using body parser
// app.use(express.urlencoded());

app.get('/', async (req,res)=>{
    let data = await dbConnect();
    data = await data.find({}).toArray();
    console.log('Get Page');
    res.send(data)
})
app.post('/insert', async (req,res)=>{
    let data = await dbConnect();
    let result = await data.insertOne(req.body);
    res.send(req.body);
    // console.log(data)
    
})

app.put('/update/:movie', async (req,res)=>{
    let data = await dbConnect();
    let result = await data.updateOne(
        {movie:req.params.movie}, // its query param and we are using url to take data
        {$set:req.body}
    )
    res.send(req.body)
    
})
// delete by movie name: 
app.delete('/deleteByName/:movie', async (req, res) => {
    let data = await dbConnect();
    let result = await data.deleteOne({movie: req.params.movie})
    res.send(result)
})

// delete by id :
app.delete('/deleteMovieById/:id',async (req, res)=>{
    let data = await dbConnect();
    let result = await data.deleteOne({_id : new mongodb.ObjectId(req.params.id)})
    res.send(result)
    
})
app.listen(8080)
