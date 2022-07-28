const express = require("express")
const allmoviesModel = require("../Database/all_movies")
const TopMoviesModel = require("../Database/Top_pics")

const route = express.Router()

async function getAllMovies ( req,res ){
    try {
        let data = await allmoviesModel.find()
        return res.status(200).send({
            data,
        })
    } catch (error) {
        return res.status(404).send({
            error:"error in fetching data"
        })
    }
}



// async function get_Top_pics ( req,res ){
//     try {
// let data = await TopMoviesModel.find()
//         console.log(data)
//         return res.status(200).send({
//             data,
//         })
//     } catch (error) {
//         return res.status(404).send({
//             error:"error in fetching data"
//         })
//     }
// }
// route.get('/movies/Top_pics',get_Top_pics)
route.get('/allmovies',getAllMovies)

module.exports = route;