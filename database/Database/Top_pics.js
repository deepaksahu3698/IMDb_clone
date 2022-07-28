const mongoose = require("mongoose")

const top_pics_Schema = new mongoose.Schema({
    id:String,
    image:String,
    plot:String,
    imDbId:String,
    title:String,
    fullTitle:String,
    type:String,
    year:String,
    videoId:String,
    videoUrl:String,
    errorMessage:String
})

const TopMoviesModel = mongoose.model("top_pics",top_pics_Schema)

module.exports = TopMoviesModel;