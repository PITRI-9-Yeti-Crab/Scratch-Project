//import film model
const getDatabaseService = require("../service-injection");

const filmController = (db = getDatabaseService()) => {
  return {
    //add a film to list
    async addToList(req, res, next) {},
    // comment on a film (that is already on one's list)
    async commentOnFilm(req, res, next) {},
  };
};

module.exports = filmController;
