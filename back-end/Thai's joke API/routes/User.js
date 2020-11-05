const router = require("express").Router();
const userController = require("../controllers/User");

router.post("/login", userController.login);
router.post("/signup", userController.signup);

module.exports = router;
