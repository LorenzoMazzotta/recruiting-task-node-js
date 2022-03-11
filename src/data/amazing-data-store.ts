import { User } from '../types/user.types';


let USER_DATA: User[] = [];


function removeUser(email: string) {
    USER_DATA = USER_DATA.filter(user => user.email !== email);
}

function findUserByEmail(email: string){
    return USER_DATA.filter(user => user.email === email);
}


export {
    USER_DATA,
    removeUser, 
    findUserByEmail
};