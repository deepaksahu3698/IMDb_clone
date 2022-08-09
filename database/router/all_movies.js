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

async function searchSingleMovie ( req,res ){
    let { q } = req.query
    console.log(q)
    let id=q
    q=q.toLowerCase()
    try {
        let data = await allmoviesModel.findOne({id})
        
        return res.status(200).send({
            data,
        })
    } catch (error) {
        return res.status(404).send({
            error:"error in fetching data"
        })
    }
}

async function searchmovie ( req,res ){
    let { q } = req.query
  
    q=q.toLowerCase()
    if(q.length==0){
        return res.send({
            data:[]
        })
    }
    try {
        let data = await allmoviesModel.find()
        data = data.filter((ele)=>{
            let check = ele.fullTitle.toLowerCase()
            return check.includes(q)
        })
        return res.status(200).send({
            data,
        })
    } catch (error) {
        return res.status(404).send({
            error:"error in fetching data"
        })
    }
}
route.get('/searchSingleMovie',searchSingleMovie)
route.get('/allmovies',getAllMovies)
route.get('/searchmovie',searchmovie)

module.exports = route;