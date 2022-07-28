const express = require("express")
const SlidingImageModel = require("../Database/Slider")

const route = express.Router()

async function getSlidingImages ( req,res ){
    try {
        let data = await SlidingImageModel.find()
        return res.send({
            data,
        })
    } catch (error) {
        return res.send({
            error:"Failed to fetch"
        })
    }
}

route.get('/slidingimage',getSlidingImages)

module.exports = getSlidingImages;