const express = require('express');

const router = express.Router();
const passport = require('passport');

const UserController = require('../controller/user_controller');

router.get('/sign-up',UserController.SignUp);
router.post('/create',UserController.create);
router.get('/preview', passport.checkAuthentication, UserController.Preview);

router.post('/create-session'
    ,passport.authenticate(
    'local',
    {failureRedirect : '/'}
    )
,UserController.CreateSession);

module.exports = router;