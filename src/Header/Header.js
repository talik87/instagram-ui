import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import UserBox from './UserBox/UserBox';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <Navbar expand="lg" className="Header">
                <Navbar.Brand>
                    <Link className="navbar-brand" to="/">Insta-Drones</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/profile">My Profile</Link>
                        <Link className="nav-link" to="/post/create">New Post</Link>
                    </Nav>
                    <div inline="true">
						<div className="user">
							<div className="user-avatar">
								<FontAwesomeIcon icon={faUserSecret} />
							</div>
							<div className="user-text">
								<UserBox />
							</div>
						</div>
					</div>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;