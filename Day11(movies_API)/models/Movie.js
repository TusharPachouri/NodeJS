const { default: mongoose } = require("mongoose");

const movieDetailSchema = mongoose.Schema({
    name:String,
    rating:Number,
    box_office:[Number],
    moreParts:Boolean,
    howManyMovies:Number
})
const movie = mongoose.model('movies',movieDetailSchema)

module.exports = movie;