import React, { Component } from 'react';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
//import FullPost from './FullPost/FullPost';

//We can use Link or NavLink
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import './Blog.css';

class Blog extends Component {

    state = {
        auth: true,
    }

    render () {

        return (
            <div className="Blog">

                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                    to="/posts/"
                                    exact
                                    activeClassName="custom-active"
                                    activeStyle={{
                                        textDecoration: 'underline'
                                    }}
                                >Posts
                                </NavLink>
                            </li>
                            <li><NavLink to={{
                                pathname : '/new-post',
                               /* hash : '#submit',
                                search: '?quick-submit=true',*/
                            }} >New post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={ () => <h1>Home page</h1> } />
                <Route path="/www" exact render={ () => <h1>Home page 222</h1> } />*/}

                <Switch>

                    { (this.state.auth) ? <Route path="/new-post" component={NewPost} /> : null }
                    <Route path="/posts" component={Posts} />
                    <Route render={ () => { return <h1>Not found page</h1> } } />
                    <Redirect from="/" to="/posts" />

                </Switch>

            </div>
        );
    }
}

export default Blog;