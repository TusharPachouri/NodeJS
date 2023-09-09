// we can create schema in mongoose and can pre define the type of data what is reqired for the project
const mongoose = require('mongoose')

mongoose.connect("mongodb://0.0.0.0:27017/MoviesApi")
    const movieDetailSchema = mongoose.Schema({
        name:String,
        rating:Number,
        box_office:[Number],
        moreParts:Boolean,
        howManyMovies:Number
    })
const addingOneMovie = async ()=>{
    
    const movieDetailModel = mongoose.model('Movies',movieDetailSchema)
    const avengersEndgame = movieDetailModel({
        name: "Avengers: Endgame",
        rating: 8.4,
        box_office: [2798, 5424, 8584, 11482, 14412], // Example box office data for different days
        moreParts: true,
        howManyMovies: 4
      });
      const result = await avengersEndgame.save();
      console.log(result)    
}
const update = async () => {
    let movie = mongoose.model('Movies',movieDetailSchema);
    let result = await movie.updateOne(
        {name:"Avengers: Endgame"},
        {$set:{howManyMovies:3}}
    )
    console.log(result)
}
// update();

//find data:
const findMovie = async () => {
    let movie = mongoose.model('Movies',movieDetailSchema)
    let data = await movie.find();
    console.log(data)
}
findMovie();

