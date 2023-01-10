//import film list model
const db = require("../models/movieModel");

const listController = {
  async getListNames(req, res, next) {
    try {
      console.log("Inside get list controller");
      const values = [req.user.id];
      // query created lists
      const queryCreatedLists =
        "SELECT film_list_name, id FROM film_lists WHERE creator_id = $1 ORDER BY film_list_name";
      const createdLists = await db.query(queryCreatedLists, values).rows;
      // query shared lists (not owned)
      const querySharedLists =
        "SELECT film_list_name, id FROM film_lists WHERE id IN (SELECT film_list_id FROM shared_film_lists WHERE user_id = $1) ORDER BY film_list_name";
      const sharedLists = await db.query(querySharedLists, values).rows;
      res.locals = {
        createdLists,
        sharedLists,
      };
      return next();
    } catch (err) {
      return next({
        log: `listController.getListNames: ${err}`,
        message: { err: "Failed to get film lists" },
      });
    }
  },

  async getListDetails(req, res, next) {
    try {
      console.log("Inside get list details controller");
      const values = [req.user.id];
      // query created lists
      const queryCreatedLists =
        "SELECT film_list_name, id FROM film_lists WHERE creator_id = $1 ORDER BY film_list_name";
      const createdLists = await db.query(queryCreatedLists, values).rows;
      // query shared lists (not owned)
      const querySharedLists =
        "SELECT film_list_name, id FROM film_lists WHERE id IN (SELECT film_list_id FROM shared_film_lists WHERE user_id = $1) ORDER BY film_list_name";
      const sharedLists = await db.query(querySharedLists, values).rows;
      res.locals = {
        createdLists,
        sharedLists,
      };
      return next();
    } catch (err) {
      return next({
        log: `listController.getListNames: ${err}`,
        message: { err: "Failed to get film lists" },
      });
    }
  },

  async createList(req, res, next) {
    console.log("inside create list controller");
  },

  async deleteList(req, res, next) {
    console.log("inside delete list controller");
  },

  async updateList(req, res, next) {
    console.log("inside update list controller");
  },

  async shareList(req, res, next) {
    console.log("inside share list controller");
  },
};

module.exports = listController;
