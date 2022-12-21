const express = require('express');
const router = express.Router();
const passport = require('passport');

const projectController = require('../controller/project_controller');

router.post('/create-project',projectController.CreateProject);

module.exports = router;