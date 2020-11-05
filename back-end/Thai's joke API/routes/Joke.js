const router = require("express").Router();
const passport = require("passport");
const jokeController = require("../controllers/Joke");

const authenticate = passport.authenticate("jwt", { session: false });

router.get("/", jokeController.getAllJokes);
router.get("/:id", jokeController.getJokeById);
router.post("/:id/like", jokeController.likeAJoke);
router.post("/:id/dislike", jokeController.dislikeAJoke);

router.use(authenticate);
router.post("/", jokeController.addNewJoke);
router.delete("/:id", jokeController.deleteJoke);

module.exports = router;
