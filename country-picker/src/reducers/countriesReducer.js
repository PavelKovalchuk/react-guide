import * as types from '../actions/types';

const initialState = {
    countries: [],
    isSearchingCountriesLoading: false,
    searchingCountriesLoadingError: {},
    selectedCountry: {},
    searchFieldInput: '',
    // this is for the UI part of marking the selected list item and is seperated from data concerns
    activeCountryLI: '',
    isSingleCountryLoading: false,
    singleCountryLoadingError: {},
};

export default function countriesReducer(state = initialState, action) {

    switch (action.type) {

        case types.SINGLE_COUNTRY_FETCH_START:

            return {
                ...state,
                isSingleCountryLoading: true,
                singleCountryLoadingError: {}
            };

        case types.SINGLE_COUNTRY_FETCH_FAILED:

            return {
                ...state,
                isSingleCountryLoading: false,
                singleCountryLoadingError: action.error
            };

        case types.SINGLE_COUNTRY_FETCH_SUCCEEDED:

            return {
                ...state,
                isSingleCountryLoading: false,
                selectedCountry: action.countryData
            };


        case types.SEARCH_COUNTRIES_FETCH_START:

            return {
                ...state,
                isSearchingCountriesLoading: true,
                searchingCountriesLoadingError: {}
            };

        case types.SEARCH_COUNTRIES_FETCH_FAILED:

            return {
                ...state,
                isSearchingCountriesLoading: false,
                searchingCountriesLoadingError: action.error
            };

        case types.SEARCH_COUNTRIES_FETCH_SUCCEEDED:
            
            return {
                ...state,
                isSearchingCountriesLoading: false,
                countries: action.countriesData
            };

        default:
            return state;
    }
}