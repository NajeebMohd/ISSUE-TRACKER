const express = require('express');
const router = express.Router();
console.log('router is started...'); 


const HomeController = require('../controller/home_controller');


router.use('/users',require('./user.js'));
router.use('/project',require('./project.js'));
router.use('/issues',require('./issue.js'));

router.get('/',HomeController.home);


module.exports = router;
