const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const target = await User.findOne({
      email,
    }).select("+password");

    if (!target || !(password == target.password)) {
      throw new Error("Invalid password or email");
    }

    const payload = {
      id: target._id,
      email: target.email,
      username: target.username,
    };

    const token = jwt.sign(payload, "this-is-secret", {
      expiresIn: "7d",
    });

    res.status(200).json({
      message: "Login successfully!!",
      token,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.signup = async (req, res, next) => {
  try {
    await User.create(req.body);

    res.status(201).json({
      status: "success",
      message: "account has been created!!",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
