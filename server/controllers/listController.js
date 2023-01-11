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
        "SELECT id, film_list_name FROM film_lists WHERE id IN (SELECT film_list_id FROM shared_film_lists WHERE user_id = $1) ORDER BY film_list_name";
      const sharedLists = await db.query(querySharedLists, values).rows;
      res.locals.listNames = {
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
      const values = [req.query.listId];
      // query created film list details
      const queryFilmList =
        "SELECT id, title, image FROM films WHERE id IN (SELECT film_id FROM films_in_lists WHERE film_list_id = $1) ORDER BY title";
      res.locals.filmListDetails = await db.query(queryFilmList, values).rows;
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
      // const values = [1];
      // query created film list details
      const values = [req.user.id, req.body.listName];
      const queryCreateList =
        "INSERT INTO film_lists (creator_id, film_list_name) VALUES ($1, $2) RETURNING id, film_list_name";

      const filmListName = await db.query(queryCreateList);
      res.locals.filmListName = filmListName.rows;
      console.log(res.locals.filmListName);
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

  async updateList(req, res, next) {
    console.log("inside update list controller");
    // const queryCreateList =
    //   "INSERT INTO films (api_id, title, image, genre, year, language, country, director, actors) VALUES %L ON CONFLICT (api_id) DO NOTHING";
  },

  async shareList(req, res, next) {
    console.log("inside share list controller");
  },
};

module.exports = listController;
