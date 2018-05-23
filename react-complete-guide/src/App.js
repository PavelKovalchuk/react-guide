import React, { Component } from 'react';
import classes from  './App.css';
import Person from './Person/Person';
//import Radium, {StyleRoot} from 'radium';

class App extends Component {

    state = {

        persons:[
            {
                id: 1,
                name: 'Max',
                age: 28,
            },
            {
                id: 2,
                name: 'Manu',
                age: 23,
            },
            {
                id: 3,
                name: 'Stef',
                age: 48,
            },
        ],

        showPersons: false,

    };

    nameChangeHandler = (event, id) => {

        const personIndex = this.state.persons.findIndex( p => {
            return p.id === id;
        } );

        //Get a person by index with Spread operator
        const person = {...this.state.persons[personIndex]};

        //Alternative
        /**
         * Метод Object.assign() копирует из исходных объектов в целевой объект
         * только перечисляемые и собственные свойства.
         * ECMAScript6
         */
        //const person = Object.assign({}, this.state.persons[personIndex]);

        person.name = event.target.value;

        //Copy of this.state.persons
        const persons = [...this.state.persons];

        //Paste new person data
        persons[personIndex] = person;

        //Change state
        this.setState({ persons: persons});

    }

    ageChangeHandler = (event, index) => {

        const persons = [...this.state.persons];
        persons[index]['age'] = ( event.target.value > 0 ) ? event.target.value : persons[index]['age'];

        this.setState({
            persons: persons
        });


    }

    togglePersonsHandler = () => {

        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow,
        });

    }

    deletePersonsHandler = (personIndex) => {

        //const persons = this.state.persons.splice();
        const persons = [...this.state.persons];
        //Remove

        persons.splice(personIndex, 1);
        this.setState({persons: persons});

    }

    render() {

        let persons = null;
        let btnClass = '';

        if(this.state.showPersons){

            persons = (
                <div >

                    {
                        this.state.persons.map( (person, index) => {
                            return <Person
                                name = {person.name}
                                age = {person.age}
                                click = { () => this.deletePersonsHandler(index) }
                                key = {person.id}
                                changed = { (event) => this.nameChangeHandler(event, person.id) }
                                ageChanged = { (event) => this.ageChangeHandler(event, index) }
                            />
                        } )
                    }


                </div>
            );

            btnClass = classes.Red;

        }

        let assignedClasses = [];
        if(this.state.persons.length <= 2){
            assignedClasses.push(classes.red);
        }
        if(this.state.persons.length <= 1){
            assignedClasses.push(classes.bold);
        }

        return (

                <div className={classes.App}>
                    <h1 className="App-title">Hi I am React.</h1>
                    <p className={assignedClasses.join(' ')}>This is working</p>
                    <button
                        onClick={ this.togglePersonsHandler }
                        className={btnClass}
                    >
                        Switch name
                    </button>

                    {persons}

                </div>
        );
    }

}

export default App;
