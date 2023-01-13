const express = require("express");
const router = express.Router();
const filmController = require("../controllers/filmController");

// add film to list
router.post("/", filmController.addFilmToList, (req, res) => {
  res.status(200).json(res.locals.newFilm);
});

// add/update comments
router.put("/comments", filmController.updateComment, (req, res) => {
  res.status(200).json(res.locals.updatedComment);
});

// delete comments
router.delete("/comments", filmController.deleteComment, (req, res) => {
  res.status(200).send("Comment successfully deleted");
});

module.exports = router;
