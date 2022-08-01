const express = require("express")

const route = express.Router()
const TopMoviesModel = require("../Database/Top_pics")

async function getTopPics ( req,res ){
    try {
        let data = await TopMoviesModel.find()
        return res.status(200).send({
            data,
        })
    } catch (error) {
        return res.status(404).send({
            error:"error in Fetching Data"
        })
    }
}

route.get('/toppics',getTopPics)

module.exports = route;