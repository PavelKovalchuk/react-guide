import {put} from 'redux-saga/effects';
import * as actions from '../actions/index';
import axios from '../axios-instances/axios-countries';

export function* fetchCountrySaga (action) {

    yield put(actions.fetchSingleCountryStart());

    const queryParams ='/name/' + action.countryName;
    try {
        const response = yield axios.get(queryParams);
        console.log('fetchCountrySaga response', response);
        /*const fetchedCountry = [];
        for( let key in response.data ){

            fetchedOrders.push(

                {
                    ...response.data[key],
                    id: key,
                }
            );

        }*/

        yield put(actions.fetchSingleCountrySuccess(response.data[0]));

    }catch (error){
        yield put(actions.fetchSingleCountryFail(error));
    }

}