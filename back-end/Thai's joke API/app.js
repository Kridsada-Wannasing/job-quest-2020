const express = require("express");
const jokeRoutes = require("./routes/Joke");
const userRoutes = require("./routes/User");

require("./config/User");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extends: false }));

app.use("/api/joke", jokeRoutes);
app.use("/api/user", userRoutes);

module.exports = app;
