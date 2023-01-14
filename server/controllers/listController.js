//import film list model
const db = require("../models/movieModel");

const listController = {
  async getCreatedListNames(req, res, next) {
    try {
      console.log("Inside get list controller");
      const values = [req.user.id];
      // query created lists
      const queryCreatedLists =
        "SELECT film_list_name, id FROM film_lists WHERE creator_id = $1 ORDER BY film_list_name";
      const createdLists = await db.query(queryCreatedLists, values);
      res.locals.createdLists = createdLists.rows;

      return next();
    } catch (err) {
      return next({
        log: `listController.getListNames: ${err}`,
        message: { err: "Failed to get film lists" },
      });
    }
  },

  async getSharedListNames(req, res, next) {
    try {
      console.log("Inside get list controller");
      const values = [req.user.id];
      // query shared lists (not owned)
      const querySharedLists =
        "SELECT id, film_list_name FROM film_lists WHERE id IN (SELECT film_list_id FROM shared_film_lists WHERE user_id = $1) ORDER BY film_list_name";
      const sharedLists = await db.query(querySharedLists, [values]);
      res.locals.sharedLists = sharedLists.rows;

      return next();
    } catch (err) {
      return next({
        log: `listController.getSharedLists: ${err}`,
        message: { err: "Failed to get shared film lists" },
      });
    }
  },

  async getListDetails(req, res, next) {
    try {
      console.log("Inside get list details controller");
      const values = [req.query.listId];
      // query created film list details
      const queryFilmList =
        "SELECT id, title, image, year, api_id FROM films WHERE id IN (SELECT film_id FROM films_in_lists WHERE film_list_id = $1) ORDER BY title";
      const filmListDetails = await db.query(queryFilmList, values);
      res.locals.filmListDetails = filmListDetails.rows;
      return next();
    } catch (err) {
      return next({
        log: `listController.getListDetails: ${err}`,
        message: { err: "Failed to get film list details" },
      });
    }
  },

  async createList(req, res, next) {
    try {
      console.log("inside create list controller");
      // query created film list details
      const values = [req.user.id, req.body.listName];
      const queryCreateList =
        "INSERT INTO film_lists (creator_id, film_list_name) VALUES ($1, $2) RETURNING id, film_list_name";
      const filmListName = await db.query(queryCreateList, values);
      res.locals.filmListName = filmListName.rows[0];
      return next();
    } catch (err) {
      return next({
        log: `listController.createList: ${err}`,
        message: { err: "Failed to get film list details" },
      });
    }
  },

  async deleteList(req, res, next) {
    try {
      console.log("Inside delete list controller");
      const values = [req.query.listId];
      // query created film list details
      const deleteFilmList =
        "DELETE FROM film_lists WHERE id = $1 RETURNING id";
      res.locals.filmListId = await db.query(deleteFilmList, values).rows;
      return next();
    } catch (err) {
      return next({
        log: `listController.deleteList: ${err}`,
        message: { err: "Failed to delete list" },
      });
    }
  },

  async shareList(req, res, next) {
    try {
      console.log("inside share list controller");
      const values = [req.query.friendId, req.query.listId];
      // query created film list details
      const querySharedList =
        "INSERT INTO shared_film_lists (user_id, film_list_id) VALUES ($1, $2)";
      await db.query(querySharedList, values);

      return next();
    } catch (err) {
      return next({
        log: `listController.shareList: ${err}`,
        message: { err: "Failed to share list" },
      });
    }
  },
};

module.exports = listController;
