import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {

        persons:[
            {
                name: 'Max',
                age: 28,
            },
            {
                name: 'Manu',
                age: 23,
            },
            {
                name: 'Stef',
                age: 48,
            },
        ]

    };

    switchNameHandler = () => {
       this.setState({
           persons: {},
       });
    }

    render() {
        return (
            <div className="App">
                <h1 className="App-title">Hi I am React.</h1>
                <button onClick={ this.switchNameHandler } >Switch name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My hobbies: Racing</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
            </div>
        );
    }

}

export default App;
