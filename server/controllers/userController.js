//import user model

// signup a user
const userController = {
  //signup a user
  async signup(req, res) {
    const { email, password } = req.body;
  },

  //login a user
  async login(req, res) {
    const { email, password } = req.body;
  },
};

module.exports = userController;
