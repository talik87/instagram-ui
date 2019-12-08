import React, { Component } from 'react';
import TagList from './TagList/TagList';
import Moment from 'react-moment';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faHeart} from "@fortawesome/free-solid-svg-icons";
import './Post.scss';

class Post extends Component {
    render() {
        
        return (
            <div className="Post">
                <div className="post-header">
                <Moment format=" MMM DD - HH:MM " unix>{this.props.created}</Moment>
                <FontAwesomeIcon icon={faUser} size="lg"/>
                </div>
                <img className="post-img" src={this.props.image} alt="#"></img>
                <span className="post-likes">{this.props.likes.length}<FontAwesomeIcon icon={faHeart} size="lg"/></span>
                <p className="post-title">{this.props.title}</p>
                <TagList tags={this.props.tags}/>
                <span>{this.props.id}</span>
                
            </div>
        );
    }
}

export default Post;