import React, { Component } from 'react';
import Post from '../../../components/Post/Post';

import axios from '../../../axios';
import './Posts.css';

class Posts extends Component{

    state = {
        posts: [],
    }

    componentDidMount(){

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
                    return <Post
                        title={post.title}
                        key={post.id}
                        author = {post.author}
                        clicked = { () => this.postSelectedHandler(post.id) }
                    />;
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