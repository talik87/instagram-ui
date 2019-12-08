import React, { Component } from 'react';
import "./TagList.scss"
class TagList extends Component {
    render() {
        return (
            <div className="Tags">
                {this.props.tags.map((tag,index)=>{
                    return <span className="tag" key={index}>#{tag}</span>
                })}
            </div>
        );
    }
}

export default TagList;