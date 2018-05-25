import React from 'react';
import classes from './Person.css';
//import Radium from 'radium';

const person = (props) => {

    const style = {
     /* '@media(min-width: 500px)': {
          width: '450px',
      }*/
    };

    //const rnd = Math.random();
    /*if(rnd > 0.7){
        throw new Error('Test error occured');
    }*/

    return (
        <div className={classes.Person} style={style}>

            <p onClick={props.click}  >I am {props.name}. I am { props.age } years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
            <input type="number" onChange={props.ageChanged} value={props.age} />
        </div>

    );

}

export default person;