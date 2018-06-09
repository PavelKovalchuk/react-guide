import React, {Component} from 'react';
import classes from './Order.css';

const Order = (props) => {

    return(
      <div className={classes.Order} >

          <p>Ingredients:</p>
          <p>Price: USD 5</p>

      </div>
    );

}

export default Order;