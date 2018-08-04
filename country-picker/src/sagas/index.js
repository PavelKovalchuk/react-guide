import {takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../actions/types';
import {
    fetchCountrySaga,
    fetchSearchCountriesSaga
} from "./countries";


export function* watchCountries() {

    yield takeEvery(actionTypes.SET_SELECTED_COUNTRY, fetchCountrySaga);
    yield takeEvery(actionTypes.SEARCH_COUNTRIES_INIT, fetchSearchCountriesSaga);

}