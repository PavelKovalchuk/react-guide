import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
//import axios from 'axios';
import axios from '../../axios';

import './Blog.css';

class Blog extends Component {

    state = {

        posts: [],
        selectedPostId: null,
        error: false,

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
                //console.error(error);

                this.setState({
                    error: true,
                });

            } )
        ;

    }

    postSelectedHandler = (id) => {

        this.setState({
            selectedPostId: id,
        });

    }

    render () {

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

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/" >Home</a></li>
                            <li><a href="/new-post" >New post</a></li>
                        </ul>
                    </nav>
                </header>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;