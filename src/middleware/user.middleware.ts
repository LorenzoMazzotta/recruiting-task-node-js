import express from 'express';
import { USER_DATA, removeUser, findUserByEmail } from '../data/amazing-data-store';
import { User } from '../types/user.types';
import {validationResult} from 'express-validator';


function getAllUsers(req: express.Request, res: express.Response, next: express.NextFunction) {
    // TODO: IMPLEMENT ROUTE
    res.status(200).json(USER_DATA);
}

function getUserByEmail(req: express.Request, res: express.Response, next: express.NextFunction) {
    // TODO: IMPLEMENT ROUTE
    const {email} = req.params;
    const result = findUserByEmail(email);
    if(result.length){
        res.status(200).json(result)
    }else{
        res.status(400).send('400 Not Found')
    }

}

function insertUser(req: express.Request, res: express.Response, next: express.NextFunction) {
    // TODO: IMPLEMENT ROUTE
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors});
    }

    const {email, firstName, lastName} = req.body;
    console.log(email, firstName, lastName);
    if(email && firstName && lastName){
        USER_DATA.push({email, firstName, lastName});

        res.status(200).json({user:{email, firstName, lastName}});
        return;
    }
    res.status(400).send("email, firstName and lastName are rquired")
}

function deleteUserByEmail(req: express.Request, res: express.Response, next: express.NextFunction) {
    // TODO: IMPLEMENT ROUTE
    const {email} = req.params;
        if(findUserByEmail(email).length !==0){
            removeUser(email);
            res.status(200).send("200 ok");
        }else{
            res.status(400).send('400 Not Found');
        }

    
}


export {
    getAllUsers,
    getUserByEmail,
    insertUser,
    deleteUserByEmail
};