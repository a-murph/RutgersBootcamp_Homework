import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import MovieDetail from "./MovieDetail";
import API from "../utils/API";

class OmdbContainer extends Component {
	state = {
		result: {},
		search: "",
		found: true
	};

	searchMovies = query => {
		API.search(query)
			.then(res => {
				if (!res.data.Error) {
					this.setState({ result: res.data });
				} else {
					this.setState({ result: res.data });
					this.setState({ found: false });
				}
			})
			.catch(err => console.log(err));
	};

	componentDidMount = () => {
		this.searchMovies("The Matrix");
	};

	handleInputChange = event => {
		this.setState({
			search: event.target.value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();

		this.searchMovies(this.state.search);
	}

	render() {
		return (
			<Container>
				<Row>
					<Col size="md-8">
						<Card
							heading={this.state.result.Title || "Search for a Movie to Begin"}
						>
							<MovieDetail
								resultFound={this.state.found}
								title={this.state.result.Title}
								src={this.state.result.Poster}
								director={this.state.result.Director}
								genre={this.state.result.Genre}
								released={this.state.result.Released}
							/>
						</Card>
					</Col>
					<Col size="md-4">
						<Card heading="Search">
							<SearchForm
								value={this.state.search}
								handleInputChange={this.handleInputChange}
								handleFormSubmit={this.handleFormSubmit}
							/>
						</Card>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default OmdbContainer;
