const express = require('express');
const router = express.Router();
console.log('router is started...'); 

const HomeController = require('../controller/home_controller');

router.get('/',HomeController.home);
router.get('/sign-up',HomeController.SignUp);

module.exports = router;
