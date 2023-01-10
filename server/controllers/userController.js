//import user model
const getDatabaseService = require("../service-injection");
// signup a user
const userController = (db = getDatabaseService()) => {
  return {
    //signup a user
    async signup(req, res, next) {
      try {
        const { email, password } = req.body;
        const userId = await db.createUser(email, password);
        res.locals.userId = userId;
        return next();
      } catch (err) {
        return next(err);
      }
    },

    //login a user
    async login(req, res, next) {
      const { email, password } = req.body;
    },
  };
};

module.exports = userController;
