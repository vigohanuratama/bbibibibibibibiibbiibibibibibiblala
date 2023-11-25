const express = require('express')
const router = express.Router();
const controller = require('../../controller/index')


router.get('/hello', controller.sayHello.sayHello);
router.get('/testing', controller.sayHello.testingQuery);


module.exports = router