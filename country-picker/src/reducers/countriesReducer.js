import * as types from '../actions/types';

const initialState = {
    countries: [
        {
            name: 'Bulgaria',
            region: 'Europe',

        },
        {
            name: 'Ukrainee',
            region: 'Europe',

        },
        {
            name: 'Germany',
            region: 'Europe',

        },
        {
            name: 'France',
            region: 'Europe',

        }
    ],
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
            console.log('countriesReducer SINGLE_COUNTRY_FETCH_START action: ', action);
            return {
                ...state,
                isSingleCountryLoading: true,
                singleCountryLoadingError: {}
            };

        case types.SINGLE_COUNTRY_FETCH_FAILED:
            console.log('countriesReducer SINGLE_COUNTRY_FETCH_FAILED action: ', action);
            return {
                ...state,
                isSingleCountryLoading: false,
                singleCountryLoadingError: action.error
            };

        case types.SINGLE_COUNTRY_FETCH_SUCCEEDED:
            console.log('countriesReducer SINGLE_COUNTRY_FETCH_SUCCEEDED action: ', action);
            return {
                ...state,
                isSingleCountryLoading: false,
                selectedCountry: action.countryData
            };

        default:
            return state;
    }
}