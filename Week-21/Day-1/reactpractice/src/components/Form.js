import React, { Component } from "react";

class Form extends Component {
	// Setting the initial values of this.state.username and this.state.password
	state = {
		username: "",
		password: ""
	};

	handleInputChange = event => {
		const value = event.target.value;
		const name = event.target.name;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();

		alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
	};

	render() {
		return (
			<form>
				<p>Username: {this.state.username}</p>
				<p>Password: {this.state.password}</p>
				<input
					type="text"
					name="username"
					placeholder="Username"
					onChange={this.handleInputChange}
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					onChange={this.handleInputChange}
				/>
				<button onClick={this.handleFormSubmit}>Submit</button>
			</form>
		);
	}
}

export default Form;
