const express = require('express');
const router = express.Router();
const passport = require('passport');

const projectController = require('../controller/project_controller');

router.post('/create-project',passport.checkAuthentication, projectController.CreateProject);
router.get('/project-details/:id', passport.checkAuthentication ,projectController.ProjectDetails);
router.post('/search-project',passport.checkAuthentication , projectController.SearchProject);

module.exports = router;