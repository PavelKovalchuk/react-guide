import {put} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';

//this is saga-generator or ES Generator
export function* logoutSaga (action) {

    yield localStorage.removeItem('token');
    yield localStorage.removeItem('expirationDate');
    yield localStorage.removeItem('userId');

    //put - dispatch a new action
    yield put({
        type: actionTypes.AUTH_LOGOUT,
    });

}