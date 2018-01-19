var express = require('express');
var router = express.Router();

// Declaring the controllers
var ctrlMain = require('../controllers/ctrlMain'); // Controller for the Home page
var ctrlFootball = require('../controllers/ctrlFootball'); // ... for the list of World Cup winners (countries)
var ctrlGoldenBall = require('../controllers/ctrlGoldenBall'); // ... for the the list of Golden ball winners (players)

// Defining the routes and associating the routes to their corresponding controllers
router.get('/', ctrlMain.index);  // Home page
router.get('/football', ctrlFootball.winnerlist);  // List of World Cup winners (countries)
router.get('/goldenball', ctrlGoldenBall.winnerlist);  // List of Golden ball winners (players)

module.exports = router;
