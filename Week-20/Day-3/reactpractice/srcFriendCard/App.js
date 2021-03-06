import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";

const App = () => (
  <Wrapper>
    <Title>Friends List</Title>
	<FriendCard
		name={friends[0].name}
		image={friends[0].image}
		job={friends[0].occupation}
		location={friends[0].location}
	/>
	<FriendCard
		name={friends[1].name}
		image={friends[1].image}
		job={friends[1].occupation}
		location={friends[1].location}
	/>
	<FriendCard
		name={friends[2].name}
		image={friends[2].image}
		job={friends[2].occupation}
		location={friends[2].location}
	/>
  </Wrapper>
);

export default App;
