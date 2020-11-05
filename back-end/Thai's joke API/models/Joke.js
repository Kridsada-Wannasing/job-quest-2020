const mongoose = require("mongoose");

const jokeSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: String,
  like: {
    type: Number,
    default: 0,
  },
  dislike: {
    type: Number,
    default: 0,
  },
});

jokeSchema.set("timestamps", true);

const Joke = mongoose.model("Joke", jokeSchema);

module.exports = Joke;
