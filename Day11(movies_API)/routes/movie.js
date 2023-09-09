const express = require('express');
const Movie = require('../models/Movie')
require('../db/connection');

const movieRouter = express.Router();

//get all movies
movieRouter.get('/movies', async (req, res) => {
    let movies = await Movie.find();
    res.send(movies);
})

//movies according to the ratings
movieRouter.get('/rating/:id', async (req, res) => {
    const filteredMovies = await Movie.find({ rating: { $gte: req.params.id } }); // greater than or equal
    const movies = { name: String, rating: Number };
    res.send(filteredMovies)
})
//SEARCH by name
movieRouter.get('/search/:key', async (req, res)=>{
    const movies = await Movie.find({
        "$or":[
            {name:{$regex:req.params.key}
        }
            // { here :{$regex:req.params.key}} we can write any parameter in place of here..
        ]
    })
    res.send(movies)
})

movieRouter.post('/add/movie', async (req, res) => {
    let movie = new Movie(req.body)
    let result = await movie.save();
    console.log(result);
    res.send(req.body)
})

movieRouter.delete('/delete/:_id', async (req, res) => {
    let result = await Movie.deleteOne(req.params)
    res.send(result)
})

movieRouter.put('/update/:_id', async (req, res) => {
    let movie = await Movie.updateOne(
        req.params,
        {
            $set: req.body
        }
    );
    res.send(movie)
})


module.exports = movieRouter;