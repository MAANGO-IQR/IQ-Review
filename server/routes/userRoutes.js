const express = require('express');
const userController = require('../controllers/userController');
const questionController = require('../controllers/questionController');
const router = express.Router();

// POST request to /users/login
router.post('/login', userController.loginUser, questionController.getQuestions, (req, res) => {
  res.status(200).json({ 
    // something something
  });
});

// POST request to /users/signup
router.post('/signup', userController.signupUser, questionController.getQuestions, (req, res) => {
  res.status(200).send({ 
  //   something something
  });
});

module.exports = router;