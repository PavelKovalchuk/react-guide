//Listener to actions
import {takeEvery, all} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import {
    logoutSaga,
    checkAuthTimeoutSaga,
    authUserSaga,
    authCheckStateSaga,
} from "./auth";

import  {
    initIngredientsSaga,
} from "./burgerBuilder";

import {
    purchaseBurgerSaga,
    fetchOrdersSaga
} from "./order";


export function* watchAuth() {

    //Одновременное выполнение
    yield all([
        takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
        takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
        takeEvery(actionTypes.AUTH_USER, authUserSaga),
        takeEvery(actionTypes.AUTH_CHECK_INITIAL_STATE, authCheckStateSaga),
    ]);
}

export function* watchBurgerBuilder() {

    yield takeEvery(actionTypes.SET_INGREDIENTS_INITIAL, initIngredientsSaga);

}

export function* watchOrder() {

    yield takeEvery(actionTypes.PURCHASE_BURGER_INITIAL, purchaseBurgerSaga);
    yield takeEvery(actionTypes.FETCH_ORDERS_INITIAL, fetchOrdersSaga);
}