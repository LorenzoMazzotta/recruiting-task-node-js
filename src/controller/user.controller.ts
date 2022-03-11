import * as express from 'express';
import * as validator from 'express-validator';
import { getAllUsers, getUserByEmail, insertUser, deleteUserByEmail } from '../middleware/user.middleware';


const userController = express.Router({mergeParams: true});


/**
 * TODO: DEFINE ROUTES
 */


const validateUsers = [
    validator.body('email')
        .isEmail().withMessage('Invalid email'),
    
    validator.body("firstName")
        .notEmpty().withMessage("Please enter a value for firstName")
        .isLength({ min: 3 }).withMessage("firstName should be at least 3 characters"),

        validator.body("lastName")
        .notEmpty().withMessage("Please enter a value for lastName")
        .isLength({ min: 3 }).withMessage("lastName should be at least 3 characters")
    ];



// TODO: GET ALL USERS              (GET http:${host}:${port}/user)
// ...
userController.get('/user', getAllUsers);

// TODO: GET USER BY EMAIL          (GET http:${host}:${port}/user/${email})
// ...
userController.get('/user/:email',  getUserByEmail);


// TODO: INSERT USER                (POST http:${host}:${port}/user)
// ...
userController.post('/user',validateUsers, insertUser);


// TODO: DELETE USER BY EMAIL       (DELETE http:${host}:${port}/user/${email})
// ...
userController.delete('/user/:email', deleteUserByEmail)

/**
 * END TODO
 */


export {
    userController
};