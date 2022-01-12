const db = require('../models/dbModel.js');

const questionController = {};

questionController.getQuestions = async (req, res, next) => {
    const { company, category, difficulty } = req.body;
    const { questionid } = req.query;
    let queryString = null;
    
    // do we want to implement the option to search by each field and all fields?
    // ^^ need a search button then as well as different endpoints
    // the most verbose way to do this is below

    if (company && category && difficulty) {
        queryString = `SELECT * FROM questions 
        WHERE company=${company} 
        AND category=${category} 
        AND difficulty=${difficulty}`;
    } 
    else if (company && category) { //!difficulty
        queryString = `SELECT * FROM questions 
        WHERE category=${category} 
        AND company=${company}`;
    }
    else if(company && difficulty){
        queryString = `SELECT * FROM questions 
        WHERE ompany=${company} 
        AND difficulty=${difficulty}`;
    } 
    else if (category && difficulty) {
        queryString = `SELECT * FROM questions 
        WHERE difficulty=${difficulty} AND category=${category}`;
    } 
    else if (company) {
        queryString = `SELECT * FROM questions 
        WHERE company=${company}`;
    } 
    else if (category) {
        queryString = `SELECT * FROM questions 
        WHERE category=${category}`;
    }
    else if (difficulty) {
        queryString = `SELECT * FROM questions 
        WHERE difficulty=${difficulty}`;
    }
    else {
        queryString = `SELECT * FROM questions`;
    }

    try {
        const response = await db.query(queryString)
        res.locals.questionsList = response.rows;
        return next();
    } catch (error) {
        next({
            log: `Database query to retrieve messages ended in ${error}`,
            status: 500,
            message: { error: error },
        });
    };
}

questionController.postQuestion = async (req, res, next) => {
    // what do we do with occurrences if we just want it to be initially assigned by 1 for a post?
    // do we have to initialize in the database to 1?
    const { content, category, difficulty } = req.body;
    const { userid, companyid, occurrences } = req.query;

    

    try {
        
    } catch (error) {
        next({
            log: `Database query to retrieve messages ended in ${error}`,
            status: 500,
            message: { error: error },
        });
    }

    const queryString = `
    INSERT INTO questions (content, category, difficulty, userid, companyid)
    VALUES ($1, $2, $3, $4, $5)`
}

questionController.deleteQuestion = async (req, res, next) => {
    // do we need to have the client send the server some information (on the req.body) to identify what question is to be deleted?
    // also do we need to authenticate the user to delete a question?
    const { questionid } = req.body;

    const { userid, questionid } = req.query;
    const queryString = `
    DELETE question WHERE questionid =${questionid} AND userid = ${userid}`;

    try {
        const deleted = await db.query(queryString);
    } catch (error) {
        return next({
        status: 500,
        message: `questionController.deleteQuestion error: ${error}`,
        });
    }

    return next();
};

module.exports = questionController;