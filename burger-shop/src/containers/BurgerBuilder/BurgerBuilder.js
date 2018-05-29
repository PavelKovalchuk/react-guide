import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.6,
    cheese: 0.2,
    meat: 1.3,
};

class BurgerBuilder extends Component{

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,

        },
        totalPrice: 4,
    }

    addIngredientHandler = (type) => {

        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState(
            {
                totalPrice: newPrice,
                ingredients: updatedIngredients,
            }
        );

    }

    removeIngredientHandler = (type) => {

    }

    render(){

        return (
            <Aux>

                <div>
                   <Burger ingredients={this.state.ingredients} />
                </div>

                <div>
                    <BuildControls
                        ingredientAdded = {this.addIngredientHandler}
                    />
                </div>

            </Aux>
        );

    }

}

export default BurgerBuilder;