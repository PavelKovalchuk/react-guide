
import React, {Component} from 'react';
import Aux from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import classes from './Layout.css';


class Layout extends Component {

    state ={
        showSideBar: false,
    }

    sideDrawerClosedHandler = () => {

        this.setState({
           showSideBar: false,
        });

    }

    sideDrawerToggleHandler = () => {

        this.setState( (prevState) => {
            return {
                showSideBar: !prevState.showSideBar,
            }
        } );

    }

    render(){

        return(
            <Aux>
                <div>
                    <Toolbar drawerToggleClicked = { this.sideDrawerToggleHandler } />
                    <SideDrawer
                        open = {this.state.showSideBar}
                        closed={this.sideDrawerClosedHandler}
                    />
                </div>

                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );

    }

}
export default Layout;