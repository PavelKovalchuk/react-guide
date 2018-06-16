import {contacts} from '../static-data';

/**
 * Using ES6 default parameters, we have set the state parameter to an initial value of {contacts}
 * @param state
 * @param action
 * @returns {{contacts}}
 */


// will return this value, {contacts: contacts} as the initial state of the application
//the initial state of the application is now managed by the Reducer

export default (state = contacts, action) => {
    return state;
}