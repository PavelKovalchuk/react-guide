import * as types from './types';

/*export const selectCountry = name => ({
    type: types.SET_SELECTED_COUNTRY,
    name
});*/

export const selectCountry = (name) => {

    return {
        type: types.SET_SELECTED_COUNTRY,
        countryName: name,
    }

};

export const fetchSingleCountrySuccess = (countryData) => {

    return {
        type: types.SINGLE_COUNTRY_FETCH_SUCCEEDED,
        countryData: countryData,
    };

};

export const fetchSingleCountryStart = () => {

    return {
        type: types.SINGLE_COUNTRY_FETCH_START,
    };

};

export const fetchSingleCountryFail = (error) => {

    return {
        type: types.SINGLE_COUNTRY_FETCH_FAILED,
        error: error,
    };

};