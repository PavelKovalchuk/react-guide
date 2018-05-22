import React from 'react';

const person = (props) => {

    console.log('props: ', props);
    return (
        <div>

            <p>I am {props.name}. I am { props.age } years old.</p>
            <p>{props.children}</p>
        </div>

    );

}

export default person;