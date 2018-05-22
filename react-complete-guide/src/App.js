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

    switchNameHandler = (newName) => {
       this.setState({
           persons: [
               {
                   name: newName,
                   age: 28,
               },
               {
                   name: 'Manu',
                   age: 23,
               },
               {
                   name: 'Stef',
                   age: 18,
               },
           ],
       });
    }

    nameChangeHandler = (event) => {

        this.setState({
            persons: [
                {
                    name: event.target.value,
                    age: 28,
                },
                {
                    name: event.target.value,
                    age: 23,
                },
                {
                    name: 'Stef',
                    age: 18,
                },
            ],
        });

    }

    render() {

        const style = {
          backgroundColor: 'green',
          border: '1px solid brown',
          padding: '8px',
          color: 'white',
          cursor: 'pointer',
        };

        return (
            <div className="App">
                <h1 className="App-title">Hi I am React.</h1>
                <button
                    onClick={ () => this.switchNameHandler('Coming soon!') }
                    style={style}
                >
                    Switch name
                </button>

                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age} />

                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click = {this.switchNameHandler.bind(this, 'Pavel')}
                    changed = {this.nameChangeHandler}
                >
                    My hobbies: Racing
                </Person>

                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age} />

            </div>
        );
    }

}

export default App;
