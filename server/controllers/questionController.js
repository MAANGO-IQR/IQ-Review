const db = require('../models/dbModel.js');

const questionController = {};

questionController.getQuestions = async (req, res, next) => {
    const { companyname, category, difficulty } = req.body;
    // const { questionid } = req.query;
    let queryString = null;
    
    // do we want to implement the option to search by each field and all fields?
    // ^^ need a search button then as well as different endpoints
    // the most verbose way to do this is below

    if (companyname && category && difficulty) {
        queryString = `SELECT * FROM questions 
        WHERE companyname=${companyname} 
        AND category=${category} 
        AND difficulty=${difficulty}`;
    } 
    else if (companyname && category) { //!difficulty
        queryString = `SELECT * FROM questions 
        WHERE category=${category} 
        AND companyname=${companyname}`;
    }
    else if(companyname && difficulty){
        queryString = `SELECT * FROM questions 
        WHERE companyname=${companyname} 
        AND difficulty=${difficulty}`;
    } 
    else if (category && difficulty) {
        queryString = `SELECT * FROM questions 
        WHERE difficulty=${difficulty} AND category=${category}`;
    } 
    else if (companyname) {
        queryString = `SELECT * FROM questions 
        WHERE companyname=${companyname}`;
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
            log: `Error in get questions controller ended in ${error}`,
            status: 500,
            message: { error: error },
        });
    };
}

questionController.postQuestion = async (req, res, next) => {
    // what do we do with occurrences if we just want it to be initially assigned by 1 for a post?
    // do we have to initialize in the database to 1?
    const { content, category, difficulty, userid, companyname } = req.body;
    
    const initialPostCount = 1;

    
    // const queryString = `
    // INSERT INTO questions (content, category, difficulty, userid, companyname, occurrences) 
    // VALUES (${content}, ${category}, ${difficulty}, ${userid}, ${companyname}, ${initialPostCount})`;

    const queryString = `INSERT INTO questions (content, category, difficulty, userid, companyname, occurrences)
    VALUES ($1, $2, $3, $4, $5, $6) 
    RETURNING *`;

    // needed to send info into the db.query inside the try
    const values = [content, category, difficulty, userid, companyname, initialPostCount]

    console.log(queryString);

    try {
        const createQuestionPost = await db.query(queryString, values);
        // console.log(createQuestionPost.rows)
        res.locals.postQuestion = createQuestionPost.rows[0];
        // console.log(res.locals.postQuestion)
        next();
    } 
    catch (error) {
        next({
            log: `Error in post question controller ended in ${error}`,
            status: 500,
            message: { error: error },
        });
    }
}

questionController.updateQuestion = async(req, res, next) => {
    // occurrences will have to be on req within this controller
}

questionController.deleteQuestion = async (req, res, next) => {
    // do we need to have the client send the server some information (on the req.body) to identify what question is to be deleted? 
        // --> using the params to get information on the URL instead
    // also do we need to authenticate the user to delete a question?
    const { questionid, userid } = req.params;

    const queryString = `DELETE FROM questions WHERE questionid=${questionid} AND userid=${userid}`;

    // console.log('Is delete working yet')
    // console.log(queryString);
    
    try {
        const deleted = await db.query(queryString);
    } catch (error) {
        return next({
            log: `Error in delete question controller ended in ${error}`,
            status: 500,
            message: { error: error },
        });
    }
    return next();
};

module.exports = questionController;