import React, { Component } from 'react';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

//We can use Link or NavLink
import {Route, NavLink, Switch} from 'react-router-dom';
import './Blog.css';

class Blog extends Component {

    render () {

        return (
            <div className="Blog">

                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                    to="/"
                                    exact
                                    activeClassName="custom-active"
                                    activeStyle={{
                                        textDecoration: 'underline'
                                    }}
                                >Home
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
                    <Route path="/" exact component={Posts} />
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/:id" component={FullPost} />
                </Switch>

            </div>
        );
    }
}

export default Blog;