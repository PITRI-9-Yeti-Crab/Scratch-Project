const express = require("express");
const router = express.Router();
const filmListController = require("../controllers/listController")();

router.get("/", filmListController.getList);

router.post("/", filmListController.createList);

router.delete("/", filmListController.deleteList);

router.patch("/", filmListController.updateList);

router.post("/share", filmListController.shareList);

module.exports = router;
