const express = require('express');
const passport = require('passport');
const router = express.Router();

const UserController = require('../controller/user_controller');

router.get('/sign-up',UserController.SignUp);
router.post('/create',UserController.create);

router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect : '/'}
),
UserController.CreateSession);

module.exports = router;