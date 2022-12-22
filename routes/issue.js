const express = require('express');
const router = express.Router();
const passport = require('passport');

const IssueController = require('../controller/issue_controller');

router.post('/create-issue',passport.checkAuthentication,IssueController.CreateIssue);

module.exports = router;