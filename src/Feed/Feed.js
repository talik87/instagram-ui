import React, { Component } from 'react';
import Post from './Post/Post';
import './Feed.scss';
import config from '../config';

class Feed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }
    //https://my-json-server.typicode.com/evyros/fake-api/posts
    componentDidMount() {
        fetch(config.apiUrl + '/api/posts')
            .then(res => res.json())
            .then(posts => this.setState({ posts }))
    }
    render() {
        return (
            <div className="container">
                {this.state.posts.map(post =>
                    <Post
                        key={post._id}
                        userId={post.user}
                        image={post.image}
                        title={post.title}
                        tags={post.tags}
                        likes={post.likes}
                        created={post.created} />
                )}

            </div>
        );
    }
}

export default Feed;