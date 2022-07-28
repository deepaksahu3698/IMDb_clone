const mongoose = require("mongoose")

async function connectToDatabase ( ){
    let uri = `mongodb://localhost:27017/IMDB`
    try {
        await mongoose.connect(uri)
        console.log("Connected Successfully")
    } catch (error) {
        console.log("error in connecting to Database")
    }
}

module.exports = connectToDatabase;