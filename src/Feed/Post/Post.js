import React, { Component } from 'react';
import './Post.scss';

class Post extends Component {
    render() {
        return (
            <div className="Post">
                <img className="post-img" src={this.props.image} alt="#"></img>
                <span>♥{this.props.likes}</span>
                <p>{this.props.title}</p>
                <span>{this.props.tags}</span>
                <span>{this.props.id}</span>
                <span>{this.props.created}</span>

            </div>
        );
    }
}

export default Post;