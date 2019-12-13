import React, { Component } from 'react';
import Post from './Post/Post';
import './Feed.scss';
import config from '../config';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

class Feed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            loading: false
        };
    }
    //https://my-json-server.typicode.com/evyros/fake-api/posts
    componentDidMount() {
        this.setState({
            loading: true
        })
        fetch(config.apiUrl + '/api/posts')
            .then(res => res.json())
            .then(posts => this.setState({ posts, loading: false }))
    }
    render() {
        return (
            <div className="container">
                {this.state.loading ?
                    <div className="loader">
                        <FontAwesomeIcon icon={faSpinner} size="lg" spin />
                        Loading...
					</div> :
                    null
                }
                {this.state.posts.map(post => {
                    return <Post
                        key={post._id}
                        userId={post.userId}
                        image={post.image}
                        title={post.title}
                        tags={post.tags}
                        likes={post.likes}
                        created={post.created} />
                })}

            </div>
        );
    }
}

export default Feed;