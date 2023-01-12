const express = require("express");
const router = express.Router();
const filmListController = require("../controllers/listController");

router.get("/", filmListController.getCreatedListNames, (req, res) => {
  res.status(200).json(res.locals.createdLists);
});

router.get("/shared", filmListController.getSharedListNames, (req, res) => {
  res.status(200).json(res.locals.sharedLists);
});

router.get("/details", filmListController.getListDetails, (req, res) => {
  res.status(200).json(res.locals.filmListDetails);
});

router.post("/", filmListController.createList, (req, res) => {
  res.status(200).json(res.locals.filmListName);
});

// router.delete("/", filmListController.deleteList, (req, res) => {
//   res.status(200).json(res.locals.filmListId);
// });

router.patch("/", filmListController.updateList, (req, res) => {});

router.post("/share", filmListController.shareList, (req, res) => {
  res.status(200).send("List successfully shared");
});

module.exports = router;
