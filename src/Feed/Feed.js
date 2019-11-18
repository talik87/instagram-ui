import React, { Component } from 'react';
import Post from './Post/Post';
import './Feed.scss';

class Feed extends Component {
    constructor(props){
        super(props)
        this.state={
            posts:[]
        }
    }
    componentDidMount(){
        fetch('https://my-json-server.typicode.com/evyros/fake-api/posts')
        .then(res => res.json())
        .then(posts => this.setState({posts}))
    }
    render() {
        return (
            <div className="container">
                {this.state.posts.map(post =>
                    <Post image={post.image} 
                    title={post.title} 
                    tags={post.tags}
                     likes={post.likes}/>
                    )}
                
            </div>
        );
    }
}

export default Feed;