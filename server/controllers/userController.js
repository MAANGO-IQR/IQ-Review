const db = require('../models/dbModel.js');
const bcrypt = require('bcrypt');

const userController = {};

userController.loginUser = (req, res, next) => {
    const { username, password } = req.body;

    console.log(username, password)
    // If username or password not found
    if (!username || !password) {
        return next({
            log: 'userController.loginUser error: Username or password was not provided.',
            status: 401,
            message: { err: 'Failed to log in. Username or password not provided.' },
         });
    }
     // Else, query db to see if user exists
    const queryString = `SELECT * FROM users WHERE username = '${username}'`;
     db.query(queryString)
        .then((foundUser) => {
        // If user with that username does not exist
        if (!foundUser.rows.length) {
            res.locals.errorMessage = "The username and/or password you entered are invalid.";
            return res.status(200).json({ message: res.locals.errorMessage })
        }

        const compare = bcrypt.compareSync(password, foundUser.rows[0].password);
        
        // If user does exist in username, verify password
        if (compare) {
            res.locals.userid = foundUser.rows[0].id;
            return next();
        }

        // If user exists, but password does NOT match
        else {
            res.locals.errorMessage = "The username and/or password does not match our records";
            return res.status(200).json({ message: res.locals.errorMessage })
        }
        })

        .catch((err) => {
        return next({
            log: 'userController.loginUser: Error in querying the database.',
            status: 500,
            message: {
                err: 'userController.loginUser: Error in querying the database.',
            },
        });
    });
}

userController.signupUser = (req, res, next) => {
    const { email, username, password, firstname, lastname } = req.body;

    const hashPassword = bcrypt.hashSync(password, 16);

    if (!email || !username || !password || !firstname || !lastname) {
        
    }
}

module.exports = userController;
