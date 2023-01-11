const express = require("express");
const router = express.Router();
const filmListController = require("../controllers/listController");

// router.get("/", filmListController.getListNames, (req, res) => {
//   res.status(200).json(res.locals.listNames);
// });

// router.get("/details", filmListController.getListDetails, (req, res) => {
//   res.status(200).json(res.locals.filmListDetails);
// });

router.post("/", filmListController.createList, (req, res) => {
  res.status(200).json(res.locals.filmListDetails);
});

// router.delete("/", filmListController.deleteList, (req, res) => {
//   res.status(200).json(res.locals.filmListId);
// });

router.patch("/", filmListController.updateList, (req, res) => {});

router.post("/share", filmListController.shareList, (req, res) => {});

module.exports = router;
