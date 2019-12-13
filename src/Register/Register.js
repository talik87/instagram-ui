import React, { Component } from 'react';
import './Register.scss'
import registerModel from '../models/register.model';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
class Register extends Component {

    submit(values) {
        fetch('http://localhost:4000/api/users', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(() => this.props.history.push('/'));
    }

    render() {
        return (
            <div className="Register">
                <h2>Registration</h2>
                <hr />
                <Formik initialValues={{ name: "", username: "", password: "", birthDate: new Date(), gender: "", about: "" }}
                    validationSchema={registerModel}
                    onSubmit={this.submit.bind(this)}>
                    <Form className="col-xs-12 col-sm-6">
                        <div className="row form-group">
                            <label htmlFor="name">name:</label>
                            <Field name="name" id="name" className="form-control" />
                            <ErrorMessage name="name" component="div" className="alert alert-danger mt-2" />
                        </div>
                        <div className="row form-group">
                            <label htmlFor="username">Username:</label>
                            <Field name="username" id="username" className="form-control" />
                            <ErrorMessage name="username" component="div" className="alert alert-danger mt-2" />
                        </div>
                        <div className="row form-group">
                            <label htmlFor="password">Password:</label>
                            <Field type="password" name="password" id="password" className="form-control" />
                            <ErrorMessage name="password" component="div" className="alert alert-danger mt-2" />
                        </div>
                        <div className="row form-group">
                            <label htmlFor="birthDate">Birth Date:</label>
                            <Field type="date" name="birthDate" id="birthDate" className="form-control" />
                            <ErrorMessage name="birthDate" component="div" className="alert alert-danger mt-2" />
                        </div>
                        <div className="row form-group">
                            <label htmlFor="gender">Gender:</label>
                            <Field component="select" name="gender" id="gender" className="form-control">
                                <option value="m">Male</option>
                                <option value="f">Female</option>
                            </Field>
                            <ErrorMessage name="gender" component="div" className="alert alert-danger mt-2" />
                        </div>
                        <div className="row form-group">
                            <label htmlFor="name">About:</label>
                            <Field as="textarea" name="about" id="about" className="form-control" />
                            <ErrorMessage name="about" component="div" className="alert alert-danger mt-2" />
                        </div>

                        <div className="row form-group d-flex justify-content-end">
                            <Button type="submit">
                                Sign Up <FontAwesomeIcon icon={faForward} size="sm" />
                            </Button>
                        </div>
                    </Form>
                </Formik>
            </div>
        );
    }
}

export default withRouter(Register);