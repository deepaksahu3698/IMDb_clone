const mongoose = require("mongoose")

async function connectToDatabase ( ){
    let uri = `mongodb://127.0.0.1:27017/IMDB`
    try {
        await mongoose.connect(uri)
        console.log("Connected Successfully")
    } catch (error) {
        console.log("error in connecting to Database")
    }
}

module.exports = connectToDatabase;