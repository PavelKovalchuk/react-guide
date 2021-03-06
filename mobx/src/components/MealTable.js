import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

import MealTableRow from './MealTableRow';

/**
 * for any component, we can use the @inject decorator to have the store passed-in as a prop
 *
 * Any component that needs to update with state changes
 * (like when a @observable mutates or a @computed updates),
 * will need to be decorated with @observer.
 * This tells MobX to track the render methods property access
 * to computed and observables in our store and re-render when mutations occur.
 */
@inject('mealsStore')
@observer
class MealTable extends Component {
    componentWillMount() {
        this.props.mealsStore.loadMeals();
    }

    handleDelete = () => {
        this.props.mealsStore.deleteSelected();
    }

    render() {
        console.log('MealTable props', this.props);
        const meals = this.props.mealsStore.mealsForDay;
        const deleteButtonDisabled = !this.props.mealsStore.someMealsSelected;

        return (
            <React.Fragment>
                <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell padding="none" style={{maxWidth: '1em'}}>
                            <IconButton variant="fab" 
                                    aria-label="Delete Selected"
                                    onClick={this.handleDelete}
                                    disabled={deleteButtonDisabled}>
                                <Icon>delete</Icon>    
                            </IconButton>
                        </TableCell>
                        <TableCell>Meal</TableCell>
                        <TableCell numeric>Calories</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {meals.map(meal => {
                        return (
                            <MealTableRow meal={meal} key={meal.id}/>
                        );
                    })}
                    </TableBody>
                </Table>
                {meals.length > 0 ? undefined: <div>No meals added for this day!</div>}
            </React.Fragment>
        )
    };
};


export default MealTable;