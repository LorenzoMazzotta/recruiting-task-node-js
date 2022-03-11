import dotenv from 'dotenv';
import ExpressApp, * as express from 'express';
import {userController} from './controller/user.controller';


// load environment variables from config
dotenv.config();
const host = process.env.SERVER_HOST;
const port = Number.parseInt(process.env.SERVER_PORT);

if (host == null || isNaN(port) || port < 0) {
    console.log(`Invalid host config: ${host}:${port}`);
    process.exit(1);
}

// create server
const app: express.Application = ExpressApp();

// set up usage of JSON request bodies
app.use(express.json());


/**
 * TODO: INTEGRATE CONTROLLER
 */


// TODO: INTEGRATE USER CONTROLLER              (http:${host}:${port}/user)
app.use('/', userController);


/**
 * END TODO
 */


// listen for incoming connections
app.listen(port, host, () => {
    console.log(`Server listening on ${host}:${port}`);
});