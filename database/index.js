const express = require("express");
const connectToDatabase = require("./Database/index");
const cores = require("cors");
const all_movies_route = require("./router/all_movies");
const topPics = require("./router/TopMovies");
const slidingImage = require("./router/Slider");
const userRoute = require("./router/user");
require("dotenv").config()

const port  = process.env.PORT;
const app = express();
app.use(cores());
app.use(express());

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Connected",
  });
});
// app.get('/allmovies')
app.use(userRoute);
app.use(topPics);
app.use(all_movies_route);

app.use(slidingImage);
connectToDatabase().then(() => {
  app.listen(port, () => {
    console.log("port is 8080");
  });
});
