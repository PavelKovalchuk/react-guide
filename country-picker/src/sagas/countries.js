import {put} from 'redux-saga/effects';
import * as actions from '../actions/index';
import axios from '../axios-instances/axios-countries';
import {createCountryObject, createPreviewCountryObject} from '../utils/helperFunctions';

export function* fetchCountrySaga (action) {

    yield put(actions.fetchSingleCountryStart());

    const queryParams ='/name/' + action.countryName;
    try {
        const response = yield axios.get(queryParams);
        yield put(actions.fetchSingleCountrySuccess(createCountryObject(response.data)));

    }catch (error){
        yield put(actions.fetchSingleCountryFail(error));
    }

}

export function* fetchSearchCountriesSaga(action) {

    yield put(actions.fetchSearchCountriesStart());
    const queryParams ='/name/' + action.lookupValue + '?fields=name;region';
    try {
        const response = yield axios.get(queryParams);
        const fetchedCountry = [];

        for( let key in response.data ){
            fetchedCountry.push(createPreviewCountryObject(response.data[key]));
        }

        yield put(actions.fetchSearchCountriesSuccess(fetchedCountry));

    }catch (error){
        yield put(actions.fetchSearchCountriesFail(error));
    }

}