import { observable, action, computed } from 'mobx';

import MealStore from './MealStore';
import * as MealsUtil from '../api/mealsUtil';

/**
 * A MobX store is just a class that holds the state of your application in observables.
 * It makes updates to those observables through actions
 * and derives data from your observables through computed values.
 * Mutations in the data will cause reactions, like updating the dom.
 *
 * Observables are the state of our application.
 * Actions are functions that modify your state.
 *
 * State in MobX is mutable, so no need create a copy of your state for every update like Redux
 *
 * Computed is used to generate values that can be derived from your state’s observables.
 * They will run only when a @observable they track is updated and
 * notify those observing the computed when its value has changed.
 * */

class MealsStore {
    @observable
    addMealName = '';

    @observable
    addMealCalories = 0;

    @observable
    calorieGoal = 2000;

    @observable
    mealDate = new Date(new Date().setHours(0,0,0,0));

    @observable
    meals = [];

    isLoaded = false;

    @action
    setAddMealName = name => {
        this.addMealName = name;
    };
    
    @action
    setAddMealCalories = calories => {
        this.addMealCalories = calories;
    };

    @action
    setCalorieGoal = calorieGoal => {
        this.calorieGoal = calorieGoal;
    };

    @action
    addMeal = () => {
        this.meals.push(
            new MealStore({
                name: this.addMealName,
                calories: this.addMealCalories,
                date: this.mealDate.toDateString()
            })
        );
        this.addMealCalories = 0;
        this.addMealName = '';
    };

    @action 
    changeDay = increment => {
        var previousDate = new Date(this.mealDate);
        previousDate.setDate(previousDate.getDate() + increment);
        this.mealDate = previousDate;
    };
    
    @action
    deleteSelected = () => {
        this.meals = this.meals.filter(meal => {
            return !meal.isSelected;
        });
    };

    @action
    loadMeals = () => {
        if (this.isLoaded) {
            return;
        }
        MealsUtil.GetMeals().then(this.loadMealJson);
    };

    @action
    loadMealJson = mealJson => {
        var mealStores = [];

        mealJson.forEach(meal => {
            mealStores.push(new MealStore(meal));
        });

        this.meals = mealStores;
        this.isLoaded = true;
    };
    
    @computed
    get isToday() {
        var today = new Date(new Date().setHours(0,0,0,0));
        return isSameDay(today, this.mealDate)
    };

    @computed
    get isYesterday() {
        var today = new Date(new Date().setHours(0,0,0,0));
        return isSameDay(this.mealDate, new Date(today.setDate(today.getDate() - 1)))
    }

    @computed
    get dateDisplay() {
        if (this.isToday) {
            return 'Today';
        } else if (this.isYesterday) {
            return 'Yesterday';
        }

        return toMD(this.mealDate);
    };

    @computed
    get mealsForDay() {
        return this.meals.filter(meal => {
            return isSameDay(this.mealDate, meal.date);
        });
    };

    @computed
    get caloriesForDay() {
        return this.mealsForDay.reduce(
            (total, meal) => { return meal.calories + total; }, 
            0
        );
    };

    @computed
    get someMealsSelected() {
        return this.meals.filter(meal => {
            return meal.isSelected
        }).length > 0;
    };

};

const isSameDay = (dayA, dayB) => {
    return dayA.getDate() === dayB.getDate() &&
        dayA.getMonth() === dayB.getMonth() &&
        dayA.getFullYear() === dayB.getFullYear();
}

const toMD = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;

    return `${month}/${day}`;
}

export default MealsStore;