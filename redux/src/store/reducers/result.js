import * as actionTypes from '../actions';

const initialState = {

    results: [],

};

const reducer = (state = initialState, action) => {

    switch (action.type){

        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({
                    id: new Date(),
                    value: action.result,
                })
            }

        case actionTypes.DELETE_RESULT:

            const id = 2;
            // First
            /*
            const newArray = [...state.results];
            updatedArray.splice(id, 1);*/

            //OR

            //Second
            const updatedArray = state.results.filter( (result) => {
                return result.id !== action.resultElid;
            } );

            return {

                ...state,
                results: updatedArray,

            }

        default :
            return state;


    }

}

export default reducer;