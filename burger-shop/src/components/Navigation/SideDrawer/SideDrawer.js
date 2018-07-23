import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

import classes from './SideDrawer.css';

const SideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return(

        <Aux>
            <BackDrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')} >

                <div className={classes.Logo}>
                    <Logo />
                </div>

                <nav>
                    <NavigationItems isAuthenticated = {props.isAuth} />
                </nav>

            </div>
        </Aux>

    );

};

export default SideDrawer;