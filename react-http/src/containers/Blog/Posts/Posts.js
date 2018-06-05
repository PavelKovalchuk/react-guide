import React, { Component } from 'react';
import Post from '../../../components/Post/Post';
import {Link} from 'react-router-dom';

import axios from '../../../axios';
import './Posts.css';

class Posts extends Component{

    state = {
        posts: [],
    }

    componentDidMount(){

        console.log('this.props', this.props);
        axios.get('/posts')
            .then( response => {

                const posts = response.data.slice(0, 6);
                const updatedPosts = posts.map(
                    post => {
                        return {
                            ...post,
                            author: 'Pasha',
                        }
                    }
                );
                this.setState({
                    posts: updatedPosts,
                });
                //console.log('response: ', response);
            } )
            .catch( error => {
                console.error(error);

                /*this.setState({
                    error: true,
                });*/

            } )
        ;

    }

    postSelectedHandler = (id) => {

        this.setState({
            selectedPostId: id,
        });

    }

    render(){

        let posts = <p style={{textAlign: 'center', color: 'red', }} >Error occured!!!</p>;

        if(!this.state.error){
            posts = this.state.posts.map(
                post => {
                    return(
                        <Link
                            to={'/' + post.id}
                            key={post.id}
                            className = ''
                        >
                            <Post
                            title={post.title}
                            author = {post.author}
                            clicked = { () => this.postSelectedHandler(post.id) }
                        />
                        </Link>
                    );
                }
            );
        }

        return(
            <section className="Posts">
                {posts}
            </section>

        );
    }

}
export default Posts;