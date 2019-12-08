import React, { Component } from 'react';
import './Login.scss'
import loginModel from '../models/login.model';
import config from '../config'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { Button } from 'react-bootstrap';
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            incorrectLoginMessage: false
        };
    }
    submit(values) {
        this.setState({ incorrectLoginMessage: false });
        fetch(config.apiUrl + '/api/users/login', {
            method: 'POST',
            body: JSON.stringify(values),
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.status === 200) {
                this.props.history.push('/');
            } else if (res.status === 403) {
                this.setState({ incorrectLoginMessage: true });
            } else {
                console.log('Unexpected error');
            }
        });
    }

    render() {
        return (
            <div className="Register">
                <h2>Login</h2>
                <Formik initialValues={{ username: "", password: "" }}
                    validationSchema={loginModel}
                    onSubmit={this.submit.bind(this)}>
                    <Form className="col-xs-12 col-sm-6">
                        {this.state.incorrectLoginMessage ? <div className="row alert alert-danger mt-2">Incorrect username or password</div> : null}
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
                        <div className="row form-group d-flex justify-content-end">
                            <Button type="submit">
                                Login <FontAwesomeIcon icon={faSignInAlt} size="sm"/>
                            </Button>
                        </div>
                    </Form>
                </Formik>
            </div>
        );
    }
}

export default Login;