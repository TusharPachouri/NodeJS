const mongoose = require('mongoose')

const seriesSchema = mongoose.Schema({
    name: String,
    rating: Number,
    seasons:Number,
    box_Office:String
}) 

const Series = mongoose.model('series',seriesSchema)

module.exports = Series;