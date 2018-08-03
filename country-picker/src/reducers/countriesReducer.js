import * as types from '../actions/types';

const initialState = {
    countries: [
        {
            name: 'Bulgaria',
            region: 'Europe',
            languages: [
                {name: "Bulgarian"}
            ],
            currencies: [
                {
                    code: "BGN",
                    name: "Bulgarian lev",
                    symbol: "лв"
                }
            ],
            countryName: 'Bulgaria',
            flagImageLink: 'https://restcountries.eu/data/bgr.svg',
            regionName: 'Europe',
            capitalCity: 'Sofia',
            population: 333
        },
        {
            name: 'Germany',
            region: 'Europe',
            languages: [
                {name: "Germany"}
            ],
            currencies: [
                {
                    code: "BGN",
                    name: "Bulgarian lev",
                    symbol: "лв"
                }
            ],
            countryName: 'Germany',
            flagImageLink: 'https://restcountries.eu/data/geo.svg',
            regionName: 'Europe',
            capitalCity: 'Sofia',
            population: 333
        },
        {
            name: 'France',
            region: 'Europe',
            languages: [
                {name: "France"}
            ],
            currencies: [
                {
                    code: "BGN",
                    name: "Bulgarian lev",
                    symbol: "лв"
                }
            ],
            countryName: 'France',
            flagImageLink: 'https://restcountries.eu/data/fra.svg',
            regionName: 'Europe',
            capitalCity: 'Sofia',
            population: 333
        }
    ],
    selectedCountry: {
        name: 'Bulgaria',
        region: 'Europe',
        languages: [
            {name: "Bulgarian"}
        ],
        currencies: [
            {
                code: "BGN",
                name: "Bulgarian lev",
                symbol: "лв"
            }
        ],
        countryName: 'Bulgaria',
        flagImageLink: 'https://restcountries.eu/data/bgr.svg',
        regionName: 'Europe',
        capitalCity: 'Sofia',
        population: 333
    },
    searchFieldInput: '',
    // this is for the UI part of marking the selected list item and is seperated from data concerns
    activeCountryLI: ''
};

export default function countriesReducer(state = initialState, action) {

    switch (action.type) {
        case types.SET_SELECTED_COUNTRY:

            const selectedCountryDataArray = state.countries.filter(country => country.name === action.countryName);
            console.log('countriesReducer SET_SELECTED_COUNTRY selectedCountryData: ', selectedCountryDataArray[0]);
            return {
                ...state,
                selectedCountry: selectedCountryDataArray[0]
            };
        case types.ALL_COUNTRIES_FETCH_SUCCEEDED:
            return {
                ...state,
                countries: action.data
            };
        case types.REQUEST_FAILED:
            return {
                ...state
            };
        case types.SINGLE_COUNTRY_SUCCEEDED:
            return {
                ...state,
                selectedCountry: action.data
            };
        case types.CHANGE_SEARCH_FIELD_INPUT:
            return {
                ...state,
                searchFieldInput: action.inputValue
            };
        case types.SET_ACTIVE_COUNTRY_LI:
            return {
                ...state,
                activeCountryLI: action.name
            };
        default:
            return state;
    }
}