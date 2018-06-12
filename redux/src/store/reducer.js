import * as actionTypes from './actions';

const initialState = {

    counter: 0,
    results: [],

};

const reducer = (state = initialState, action) => {

    switch (action.type){

        case actionTypes.INCREMENT:

            //Copy of the state
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;

            //return a new object
            return newState;

        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }

        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.val
            }

        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.val
            }

        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({
                    id: new Date(),
                    value: state.counter,
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