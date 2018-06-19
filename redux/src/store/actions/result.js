import * as actionTypes from './actionTypes';

export const saveResult = (res) => {

    //const updatedRes = res * 2;
    return {
        type: actionTypes.STORE_RESULT,
        result: res,
    }

};

export const storeResult = (res) => {

    //using redux-thunk

    return (dispatch, getState) => {

        setTimeout(() => {
            //const oldCounter = getState().ctr.counter;
            //console.log('%c oldCounter', 'background-color: gold; color: white', oldCounter);
            dispatch(saveResult(res));
        }, 2000);
    };

};

export const deleteResult = (resElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElid: resElId,
    }
};