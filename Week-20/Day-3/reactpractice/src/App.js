import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {
	state = {
		friends: friends
	};

	removeFriend = (id) => {

	}

	render() {
		return (
			<Wrapper>
				{this.state.friends.map(function(friend) {
				return (
					<FriendCard
						removeFriend = {this.removeFriend()}
						id={friend.id}
						name={friend.name}
						image={friend.image}
						occupation={friend.occupation}
						location={friend.location}
					/>
				);
				})}
			</Wrapper>
		);
	}
}

export default App;
