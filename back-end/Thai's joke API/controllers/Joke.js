const Joke = require("../models/Joke");

exports.getAllJokes = async (req, res, next) => {
  try {
    const jokes = await Joke.find();

    res.status(200).json({
      status: "success",
      jokes,
    });
  } catch (error) {
    res.status(200).json({
      status: "fail",
      error,
    });
  }
};

exports.addNewJoke = async (req, res, next) => {
  try {
    const newJoke = await Joke.create(req.body);

    res.status(201).json({
      status: "success",
      newJoke,
    });
  } catch (error) {
    res.status(200).json({
      status: "fail",
      error,
    });
  }
};

exports.getJokeById = async (req, res, next) => {
  try {
    const joke = await Joke.findById(req.params.id);

    res.status(200).json({
      status: "success",
      joke,
    });
  } catch (error) {
    res.status(200).json({
      status: "fail",
      error,
    });
  }
};

exports.deleteJoke = async (req, res, next) => {
  try {
    await Joke.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
      message: "Delete successfully!!",
    });
  } catch (error) {
    res.status(200).json({
      status: "fail",
      error,
    });
  }
};

exports.likeAJoke = async (req, res, next) => {
  try {
    await Joke.findByIdAndUpdate(
      req.params.id,
      { $inc: { like: 1 } },
      {
        new: true,
      }
    );

    res.status(201).json({
      status: "success",
      message: "You like this",
    });
  } catch (error) {
    res.status(200).json({
      status: "fail",
      error,
    });
  }
};

exports.dislikeAJoke = async (req, res, next) => {
  try {
    await Joke.findByIdAndUpdate(
      req.params.id,
      { $inc: { dislike: 1 } },
      {
        new: true,
      }
    );

    res.status(201).json({
      status: "success",
      message: "You don't like this",
    });
  } catch (error) {
    res.status(200).json({
      status: "fail",
      error,
    });
  }
};
