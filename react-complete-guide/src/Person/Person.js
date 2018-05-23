import React from 'react';
import './Person.css';

const person = (props) => {

    console.log('props: ', props);
    return (
        <div className="Person">

            <p onClick={props.click}  >I am {props.name}. I am { props.age } years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
            <input type="number" onChange={props.ageChanged} value={props.age} />
        </div>

    );

}

export default person;