const express = require('express')
const router = express.Router(); 

const filmListController = require('../controllers/listController');

router.get('/', filmListController.getList)

route.post('/', filmListController.createList)

route.delete('/', filmListController.deleteList)

route.patch('/', filmListController.updateList)

route.post('/share', filmListController.shareList)

module.exports = router