const express = require("express");
const router = express.Router();
const filmListController = require("../controllers/listController")();

router.get("/", filmListController.getListNames, (req, res) => {
  res.status(200).json(res.locals);
});

router.get("/details", filmListController.getListDetails, (req, res) => {});

router.post("/", filmListController.createList, (req, res) => {});

router.delete("/", filmListController.deleteList, (req, res) => {});

router.patch("/", filmListController.updateList, (req, res) => {});

router.post("/share", filmListController.shareList, (req, res) => {});

module.exports = router;
