import {takeEvery, all} from 'redux-saga/effects';
import * as actionTypes from '../actions/types';
import {
    fetchCountrySaga
} from "./countries";


export function* watchCountries() {

    yield takeEvery(actionTypes.SET_SELECTED_COUNTRY, fetchCountrySaga);

}