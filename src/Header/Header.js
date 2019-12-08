import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome} from "@fortawesome/free-solid-svg-icons";
import {Navbar,Nav} from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
            <FontAwesomeIcon icon={faHome} size="sm" />
                Instagram
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/profile">Profile</Link>
                    <Link className="nav-link" to="/post/create">Create Post</Link>
                </Nav>
                <Nav className="mr-auto-b">
                    <Link className="nav-link" to="/register">Register</Link>
                    <Link className="nav-link" to="/login">Login</Link>
                </Nav>
            </Navbar.Collapse>
    </Navbar>
        );
    }
}

export default Header;