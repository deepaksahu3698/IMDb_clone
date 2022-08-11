const mongoose = require("mongoose")
require("dotenv").config()


async function connectToDatabase ( ){
    try {
        const dbUri = process.env.MONGOURI
        await mongoose.connect(dbUri)
        console.log("Connected Successfully")
    } catch (error) {
        console.log("error in connecting to Database")
    }
}

module.exports = connectToDatabase;