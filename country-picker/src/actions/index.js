import * as types from './types';

export const searchCountries = (lookupValue) => {

    return {
        type: types.SEARCH_COUNTRIES_INIT,
        lookupValue: lookupValue,
    }

};

export const fetchSearchCountriesStart = () => {

    return {
        type: types.SEARCH_COUNTRIES_FETCH_START,
    };

};

export const fetchSearchCountriesSuccess = (countriesData) => {

    return {
        type: types.SEARCH_COUNTRIES_FETCH_SUCCEEDED,
        countriesData: countriesData,
    };

};

export const fetchSearchCountriesFail = (error) => {

    return {
        type: types.SEARCH_COUNTRIES_FETCH_FAILED,
        error: error,
    };

};

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