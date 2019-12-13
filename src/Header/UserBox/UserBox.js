import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../../config';

class UserBox extends Component {

	constructor(props) {
		super(props);
		this.state = {
			user: null
		};
	}

	componentDidMount() {
		fetch(config.apiUrl + '/api/users/me', {
			credentials: "include"
		})
			.then(res => res.json())
			.then(user => {
				this.setState({user});
			})
			.catch(e => console.log(e));
	}

	render() {
		return (
			<div>
				{
					this.state.user
						? <span>{this.state.user.username}</span>
						: <div>
							<Link to="/register">Register</Link>
							<Link to="/login">Login</Link>
						</div>
				}
			</div>
		);
	}
}

export default UserBox;