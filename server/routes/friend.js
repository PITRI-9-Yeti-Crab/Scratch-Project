const express = require("express");
const router = express.Router();
const friendController = require("../controllers/friendController");

// get list of friends
router.get("/", friendController.getFriends, (req, res) => {
  res.status(200).json(res.locals.friendList);
});

// add friend
router.post("/", friendController.addFriend, (req, res) => {
  res.status(200).json(res.locals.friendIdAndEmail);
});

router.delete("/", friendController.deleteFriend, (req, res) => {
  res.status(200).json(res.locals.friendId);
});

module.exports = router;
