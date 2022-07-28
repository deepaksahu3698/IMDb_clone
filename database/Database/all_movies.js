const mongoose = require ("mongoose")

const allMoviesSchema = new mongoose.Schema({
 id:{
    type:String,
    required:true
 },
 rank:{
    type:String,
   required:true
 },
 rankUpDown:{
    type:String,
    required:true
 },
 title:{
    type:String,
    required:true
 },
 fullTitle:{
    type:String,
    required:true
 },
 year:{
    type:String,
    required:true
 },
 image:{
    type:String,
    required:true
 },
 crew:{
    type:String,
    required:true
 },
 imDbRating:{
    type:String,
    required:true
 },
 imDbRatingCount:{
    type:String,
    reuired:true
 }
})

const allmoviesModel = mongoose.model("all_movies",allMoviesSchema)

module.exports = allmoviesModel;

// {
//     "id": "tt9055008",
//     "rank": "100",
//     "rankUpDown": "-6",
//     "title": "Evil",
//     "fullTitle": "Evil (2019)",
//     "year": "2019",
//     "image": "https://imdb-api.com/images/original/MV5BY2RiM2FkNjEtNzZhMS00MmY4LWIyMjUtNWExMzIyNDQ2YjY4XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_Ratio0.6716_AL_.jpg",
//     "crew": "Katja Herbers, Mike Colter",
//     "imDbRating": "7.7",
//     "imDbRatingCount": "24000"
//     }