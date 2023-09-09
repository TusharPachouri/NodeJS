const express = require('express')
const eventEmitter = require('events')
const Series = require('../models/Series');
const { Mongoose } = require('mongoose');
require('../db/connection')

const seriesRouter = express.Router();

const event = new eventEmitter();

let count = 0;
event.on('countAPI',()=>{
    count++;
    console.log('API called:',count)
})

//get request:
seriesRouter.get('/',async (req,res)=>{
    const series = await Series.find();
    event.emit('countAPI');
    res.send(series)
})

//search series:
seriesRouter.get('/search/series/:id',async (req,res)=>{
    // const series = await Series.find({
    //     "$or":[
    //         {name:{$regex:req.params.name}}
    //     ]
    // })
    // res.send(series); we can use this method to find but its case-sensitive
    //     $text:
    
    // {
        
//      $search: <string>,

//      $language: <string>,

//      $caseSensitive: <boolean>,

//      $diacriticSensitive: <boolean>

// }
    Series.createIndex({ name: 'text' });      
    const series = await Series.find({
        $text: {
            $search: req.params.id,
            $caseSensitive:false
        }
    })
    event.emit('countAPI');
    res.send(series)
})

//adding a series to the database:
seriesRouter.post('/add/series', async (req,res)=>{
    const series = new Series(req.body)
    const result = await series.save();
    res.send(series)
})

//deleting series by its id
seriesRouter.delete('/delete/series/:_id', async (req,res)=>{
    const result = await Series.deleteOne(req.params) // res.params is already an object thats why we didnt use {}
    res.send(result)
})

//updating a series by its id
seriesRouter.put('update/:_id', async (req,res)=>{
    const result = await Series.updateOne(
        req.params,
        {
            $set:res.body
        }
    )
    res.send(result.ackownledge)
})

module.exports = seriesRouter;