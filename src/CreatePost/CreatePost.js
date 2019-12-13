import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import postModel from '../models/post.model';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import './CreatePost.scss';
import config from '../config';
import { withRouter } from 'react-router-dom';

class CreatePost extends React.Component {
    constructor() {
        super()
        this.state = {
            tags: [],
            // tag: ''
        }
    }
    handleTagsChange(tags) {
        this.setState({
            tags: tags
        });
    }
    convertToFormData(values) {
        const data = new FormData();
        for (let key in values) {
            Array.isArray(values[key])
                ? values[key].forEach(value => data.append(key + '[]', value))
                : data.append(key, values[key]);
        }
        return data;
    }

    submit(values) {
        const formData = this.convertToFormData(values);
        fetch(config.apiUrl + '/api/posts', {
            method: 'POST',
            credentials: 'include',
            body: formData
        }).then(res => res.json())
            .then(post => console.log(post))
            .then(() => this.props.history.push('/'))
            .catch(err => console.log(err));
    }
    // submit(values) {
    //     const data = new FormData();
    //     for (let key in values) {
    //         data.append(key, values[key]);
    //     }
    //     fetch(config.apiUrl + '/api/posts', {
    //         method: 'POST',
    //         credentials: 'include',
    //         body: data
    //     })
    //         .then(res => res.json())
    //         .then(post => console.log(post))
    //         .then(() => this.props.history.push('/'))
    //         .catch(err => console.log(err));
    // }

    // handleChangeInput(tag) {
    //     this.setState({ tag })
    // }

    render() {
        return (
            <div className="CreatePost">
                <h2>Create Post</h2>
                <hr />
                <Formik initialValues={{ image: "", title: "", tags: [] }}
                    validationSchema={postModel}
                    onSubmit={this.submit.bind(this)}
                    render={({ setFieldValue }) => {
                        return <Form className="col-xs-12 col-sm-6">
                            <div className="form-group">
                                <div className="upload-btn-wrapper">
                                    <input className="file" type="file" name="image" id="image" onChange={(event) => {
                                        setFieldValue('image', event.currentTarget.files[0]);
                                    }} />
                                    <label>Image: </label>
                                    <button className="upload-btn">Upload Image</button>
                                    {/* <labal htmlFor="image" className="imageUpload">
                                <span>
                                    Choose File:
                                </span>
                            </labal> */}
                                    <ErrorMessage name="image" component="div" className="alert alert-danger" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Title:</label>
                                <Field name="title" className="form-control" />
                                <ErrorMessage name="title" component="div" className="alert alert-danger" />
                            </div>
                            <div className="form-group">
                                <label>Tags:</label>
                                <TagsInput value={this.state.tags}
                                    onChange={(tags) => {
                                        this.handleTagsChange(tags);
                                        setFieldValue('tags', tags);
                                    }}
                                    className="tags-wrapper" />
                                <ErrorMessage className="alert alert-danger mt-2" name="tags" component="div" />
                                <div><sub>Press Enter after inserting a tag</sub></div>
                            </div>
                            <div className="row form-group d-flex justify-content-end">
                                <Button type="submit">
                                    Share
                                    <FontAwesomeIcon icon={faArrowCircleDown} size="sm" />
                                </Button>
                            </div>
                        </Form>
                    }}>
                </Formik>
            </div>
        );
    }
}
export default withRouter(CreatePost);;