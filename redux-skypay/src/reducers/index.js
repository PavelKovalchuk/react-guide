import user from "./user";
import contacts from "./contacts";
import activeUserId from './activeUserId';
import messages from "./messages";
import typing from "./typing";

import { combineReducers } from "redux";

/**
 * takes in an object. An object whose shape is exactly like the state object of the application.
 */


export default combineReducers({
    user,
    messages,
    typing,
    contacts,
    activeUserId,
});