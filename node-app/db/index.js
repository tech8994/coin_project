const mongoose = require("mongoose");

// let url='mongodb+srv://ttech2730:XrH2H8IqBqNBITKe@cluster0.wonf6cv.mongodb.net/';
// let url='mongodb+srv://ttech2730:i2YNvimq76Ovph8a@cluster0.s0dezvt.mongodb.net/'
let urls =
  "mongodb+srv://ttech2730:5JneU4BxSf60gwrN@cluster0.rlr3apa.mongodb.net/";
mongoose
  .connect(urls, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected Succesfully with MongoDb");
  })
  .catch(() => {
    console.log("Not Connected with MongoDB");
  });
