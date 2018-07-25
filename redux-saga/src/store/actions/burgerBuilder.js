import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

//Action creators

export const addIngredient = (name) => {

    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name,
    }

};

export const removeIngredient = (name) => {

    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name,
    }

};

export const fetchIngredientsFailed = () => {

    return{
        type: actionTypes.FETCH_INGREDIENTS_FAILED,
    }

};

//DUE TO redux thunk middleware
export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients,
    };
};

export const initIngredients = () => {

    return dispatch => {
        axios.get('/ingredients.json')
            .then(
                response => {
                    dispatch( setIngredients(response.data) );
                }
            )
            .catch(
                error => {
                    dispatch( fetchIngredientsFailed() );
                }
            );
    }

};