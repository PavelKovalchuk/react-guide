import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import AddMeal from './AddMeal';
import DateSelection from './DateSelection';
import MealTable from './MealTable';
import Progress from './Progress';

/**
 * Performance
 * Break down large components into smaller ones.
 *
 The fewer observables a component needs to access,
 the less it will need to render pieces of your application unnecessarily.

 Access the data as late as possible.

 Instead of passing an observable string to a child as a prop,
 pass the object and have the child access the string.

 Only the child will need to re-render on mutations instead of the parent.
 */


class App extends Component {
    render() {
        return (
            <div className="app">
                <AppBar position="static" color="primary">
                    <Toolbar style={{maxWidth:"80em", margin:"auto", width:"100%"}}>
                        <Typography variant="title" color="inherit" >
                            Calorie Counter
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div className="main">
                    <Paper className="content">
                        <AddMeal />
                        <DateSelection />
                        <Progress />
                        <MealTable />
                    </Paper>
                </div>    
            </div>
        );
    }
}

export default App;
