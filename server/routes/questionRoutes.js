const express = require('express');
const questionController = require('../controllers/questionController.js');

const router = express.Router();

//GET request to /questions?&user=1
router.get('/', questionController.getQuestions, (req, res) => {
  res
    .set('Content-Type', 'application/json')
    .status(200)
    .json({ questionsList: res.locals.questionsList });
});

//POST request to /questions?user=1
//responds with question that was created
router.post('/', questionController.postQuestion, (req, res) => {
  // return res.json({ question: res.locals.question });
});

router.patch('/', questionController.updateQuestion, (req, res) => {
  res.json({ question: res.locals.question });
});

router.delete('/:questionid/:userid', questionController.deleteQuestion, (req, res) => {
  res.status(200).send({ message: 'question deleted' });
});

module.exports = router;