import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

import classes from './ContactData.css';

class ContactData extends Component{

    state={
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        },
        loading: false,
    }

    orderHandler = (event) => {

        event.preventDefault();

        console.log('ContactData this.props.ingredients', this.props.ingredients);
        console.log('ContactData this.props.price', this.props.price);

        this.setState({loading: true});

        const order = {

            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Pavel',
                address: {
                    street: 'Test street',
                    zipcode: '2342',
                    country: 'Ukraine',
                },
                email: 'test@test.com'
            },
            deliveyMethod: 'fastest',

        };

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false, purchasing: false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({loading: false, purchasing: false});
            })
        ;

    }

    render(){

        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your name" />
                <input className={classes.Input} type="email" name="email" placeholder="Your email" />
                <input className={classes.Input} type="text" name="street" placeholder="Street" />
                <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />
                <Button btnType="Success" clicked={this.orderHandler} >ORDER</Button>
            </form>
        );

        if(this.state.loading){
            form = <Spinner/>;
        }

        return (
            <div className={classes.ContactData} >
                <h4>Enter your Contact Data</h4>

                {form}

            </div>
        );

    }

}

export default ContactData;
