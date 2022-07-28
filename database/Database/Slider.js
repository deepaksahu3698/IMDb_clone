const mongoose = require("mongoose")

const SlidingImageSchema = new mongoose.Schema({
    image:String
})

const SlidingImageModel = mongoose.model("Slider_pictures",SlidingImageSchema)

module.exports = SlidingImageModel