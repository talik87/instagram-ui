import React, { Component } from 'react';
import TagList from './TagList/TagList';
// import Moment from 'react-moment';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart as heartFull} from "@fortawesome/free-solid-svg-icons";
import './Post.scss';
import config from '../../config';

class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            like: false
        }
    }
    likePost() {
        this.setState({
            like: !this.state.like
        });
    }
    formatDate(dateStr) {
        const date = new Date(dateStr);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return months[date.getMonth()] + ' ' + date.getDate();
    }

    render() {
        return (
            <div className="col-sm-12 col-md-4">
                <article className="Post">
                    <header className="Post-header">
                        <div className="Post-date">
                            {/* <Moment format=" MMM DD - HH:MM " unix>{this.props.created}</Moment> */}
                            {this.formatDate(this.props.created)}
                        </div>
                        <div className="Post-user">
                            <FontAwesomeIcon icon={faUser} size="lg" />
                        </div>
                    </header>
                    <div className="Post-image">
                        <img src={config.apiUrl + '/' + this.props.image} title={this.props.title} alt="#" onDoubleClick={this.likePost.bind(this)} />
                    </div>
                    <div className="Post-actions">
                        <span className="number-likes">{this.props.likes} likes</span>
                        <div className="actions-icons">
                            <div className="like" onClick={this.likePost.bind(this)}>
                                {this.state.like ? <FontAwesomeIcon icon={heartFull} className="red-icon" /> :
                                    <FontAwesomeIcon icon={faHeart} />}
                            </div>
                        </div>
                    </div>
                    <div className="Post-content">
                        <h3 className="Post-title">{this.props.title}</h3>
                        <TagList tags={this.props.tags} />
                    </div>
                    {/* <img className="post-img" src={config.apiUrl + '/' + this.props.image} alt="#" title={this.props.title}/>
                <span className="post-likes">{this.props.likes}<FontAwesomeIcon icon={faHeart} size="lg" /></span>
                <p className="post-title">{this.props.title}</p>
                <TagList tags={this.props.tags} />
                <span>{this.props.userId}</span> */}

                </article >
            </div>
        );
    }
}

export default Post;