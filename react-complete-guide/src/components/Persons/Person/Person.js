import React, {Component} from 'react';
import classes from './Person.css';
//import Radium from 'radium';

class Person extends Component{

    constructor(props){
        super(props);
        console.log('[Person.js] Inside constructor', props);

    }

    componentWillMount(){
        console.log('[Person.js] Inside componentWillMount');
    }

    componentDidMount(){
        console.log('[Person.js] Inside componentDidMount');
    }
    render(){

        console.log('[Person.js] Inside render()');

        return (
            <div className={classes.Person}>

                <p onClick={this.props.click}  >I am {this.props.name}. I am { this.props.age } years old.</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
                <input type="number" onChange={this.props.ageChanged} value={this.props.age} />
            </div>

        );

    }

}

export default Person;