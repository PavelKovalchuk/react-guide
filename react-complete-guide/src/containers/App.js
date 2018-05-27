import React, { PureComponent } from 'react';
import classes from './App.css';
//import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
//import Radium, {StyleRoot} from 'radium';
//import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

class App extends PureComponent {

    constructor(props){

        super(props);
        console.log('[App.js] Inside constructor', props);

        this.state = {

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

    }

    componentWillMount(){
        console.log('[App.js] Inside componentWillMount');
    }

    componentDidMount(){
        console.log('[App.js] Inside componentDidMount');
    }

    /*shouldComponentUpdate(nextProps, nextState){
        console.log('[Update App.js] Inside shouldComponentUpdate', nextProps, nextState);
        return nextState.persons !== this.state.persons ||
            nextState.showPersons !== this.state.showPersons;
    }*/

    componentWillUpdate(nextProps, nextState){
        console.log('[Update App.js] Inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate(){
        console.log('[Update App.js] Inside componentDidUpdate');
    }

    /*state = {

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

    };*/

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

        console.log('[App.js] Inside render()');
        let persons = null;

        if(this.state.showPersons){
            persons = <Persons
                        persons = {this.state.persons}
                        clicked = {this.deletePersonsHandler}
                        changed = {this.nameChangeHandler}
                        ageChanged = {this.ageChangeHandler}
                    />

        }

        return (
                <div className={classes.App}>

                    <button
                        onClick={() => { this.setState({showPersons : true}) }}
                    >
                        Show Persons
                    </button>
                    <Cockpit
                        appTitle = {this.props.title}
                        showPersons={this.state.showPersons}
                        persons={this.state.persons}
                        clicked={this.togglePersonsHandler}
                    />
                    {persons}

                </div>
        );
    }

}

export default App;
