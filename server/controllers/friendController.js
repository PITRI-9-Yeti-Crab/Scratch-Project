//import film model
const db = require("../models/movieModel");

const friendController = {
  // get friends
  async getFriends(req, res, next) {
    try {
      console.log("Inside get friends controller");
      const values = [req.user.id];
      // query created lists
      const queryFriendList =
        "SELECT email FROM users WHERE id IN (SELECT friend_id FROM friends WHERE user_id = $1)";
      const friendList = await db.query(queryFriendList, values);
      res.locals.friendList = friendList.rows;

      return next();
    } catch (err) {
      return next({
        log: `listController.getListNames: ${err}`,
        message: { err: "Failed to get film lists" },
      });
    }
  },
  // add friend
  async addFriend(req, res, next) {
    try {
      console.log("inside add friend controller");
      // query for friend id
      const queryFriendId = "SELECT email, id FROM users WHERE email = $1";
      const friendIdAndEmail = await db.query(queryFriendId, [req.query.email]);
      console.log(friendIdAndEmail.rows);
      const values = [req.user.id, friendIdAndEmail.rows[0].id];
      const queryAddFriend =
        "INSERT INTO friends (user_id, friend_id) VALUES ($1, $2)";
      await db.query(queryAddFriend, values);
      res.locals.friendIdAndEmail = friendIdAndEmail.rows[0];

      return next();
    } catch (err) {
      return next({
        log: `listController.addFriend: ${err}`,
        message: { err: "Failed to add friend" },
      });
    }
  },

  // delete friend
  async deleteFriend(req, res, next) {
    try {
      console.log("inside delete friend controller");
      // query for friend id
      const values = [req.user.id, req.query.friendId];
      const queryDeleteFriend =
        "DELETE FROM friends WHERE user_id = $1 AND friend_id = $2 RETURNING friend_id";
      const friendId = await db.query(queryDeleteFriend, values);
      res.locals.friendId = friendId.rows[0];
      return next();
    } catch (err) {
      return next({
        log: `listController.deleteFriend: ${err}`,
        message: { err: "Failed to add friend" },
      });
    }
  },
};

module.exports = friendController;
