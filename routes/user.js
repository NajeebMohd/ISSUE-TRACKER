const express = require('express');
const router = express.Router();

const UserController = require('../controller/user_controller');

router.get('/sign-up',UserController.SignUp);
router.post('/create',UserController.create);

module.exports = router;