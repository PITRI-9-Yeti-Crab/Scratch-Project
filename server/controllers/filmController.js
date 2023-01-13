//import film model
const db = require("../models/movieModel");

const filmController = {
  //add a film to list (default list)
  //future todo: enable user to create multiple lists
  async addFilmToList(req, res, next) {
    console.log(req.body);
    try {
      const {
        api_id,
        title,
        image,
        genre,
        year,
        language,
        country,
        director,
        actors,
      } = req.body;
      //each user has a default list: list id is user.id + 100
      const listId = 1;
      // req.user.id + 100;
      const values = [
        api_id,
        title,
        image,
        genre,
        year,
        language,
        country,
        director,
        actors,
      ];
      const queryInsertToFilms =
        "INSERT INTO films (api_id, title, image, genre, year, language, country, director, actors) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)ON CONFLICT (api_id) DO NOTHING";

      await db.query(queryInsertToFilms, values);
      //query to grab the newly inserted film (or the film already in storage)
      const filmQuery = "SELECT id FROM films WHERE api_id = $1";
      const film = await db.query(filmQuery, [api_id]);

      //query to insert newly added film to films_in_lists table
      const queryInsertToFilmsinLists =
        "INSERT INTO films_in_lists (film_id, film_list_id) SELECT $1 AS film_id, $2 AS film_list_id WHERE NOT EXISTS (SELECT film_id FROM films_in_lists WHERE film_id = $1 AND film_list_id = $2)";
      await db.query(queryInsertToFilmsinLists, [film.rows[0].id, listId]);

      res.locals.newFilm = film.rows[0];

      return next();
    } catch (err) {
      return next({
        log: `filmController.addFilmToList: ${err}`,
        message: { err: "Failed to add film" },
      });
    }
  },

  // // update comment on film
  async updateComment(req, res, next) {
    try {
      const values = [req.body.comment, req.query.listId, req.query.filmId];
      const queryUpdateComment =
        "UPDATE films_in_lists SET comment = $1 WHERE film_id = $3 AND film_list_id = $2 RETURNING comment";

      const newComment = await db.query(queryUpdateComment, values);
      res.locals.updatedComment = newComment.rows[0];

      return next();
    } catch (err) {
      return next({
        log: `filmController.updateComment: ${err}`,
        message: { err: "Failed to update comment" },
      });
    }
  },

  // // delete film comment
  async deleteComment(req, res, next) {
    try {
      const values = [req.query.listId, req.query.filmId];
      const queryDeleteComment =
        "UPDATE films_in_lists SET comment = null WHERE film_id = $2 AND film_list_id = $1";
      await db.query(queryDeleteComment, values);

      return next();
    } catch (err) {
      return next({
        log: `filmController.deleteComment: ${err}`,
        message: { err: "Failed to delete comment" },
      });
    }
  },
};

module.exports = filmController;
