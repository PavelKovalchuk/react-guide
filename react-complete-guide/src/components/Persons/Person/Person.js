import React, {Component} from 'react';
import classes from './Person.css';
//import Radium from 'radium';
import Auxw from '../../../hoc/Auxw';
import withClass from '../../../hoc/withClass';


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
        if(this.props.position === 0){
            this.inputElement.focus(); console.log('this.inputElement ', this.inputElement);
        }

    }
    render(){

        console.log('[Person.js] Inside render()');
        return (
            <Auxw classes={classes.Person}>

                <p onClick={this.props.click}  >I am {this.props.name}. I am { this.props.age } years old.</p>
                <p>{this.props.children}</p>
                <input
                    ref={ (inp) => { this.inputElement = inp } }
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
                <input type="number" onChange={this.props.ageChanged} value={this.props.age} />
            </Auxw>

        );

        /*return [
            <p key="1" onClick={this.props.click}  >I am {this.props.name}. I am { this.props.age } years old.</p>,
            <p key="2">{this.props.children}</p>,
            <input key="3" type="text" onChange={this.props.changed} value={this.props.name} />,
            <input key="4" type="number" onChange={this.props.ageChanged} value={this.props.age} />,
        ]*/

    }

}

export default withClass(Person, classes.Person);