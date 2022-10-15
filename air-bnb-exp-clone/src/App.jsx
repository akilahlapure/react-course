import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
	const cards = data.map(experience => {
		return (
			<Card 
				key={experience.id}
				{...experience}
				// item={experience}
				// coverImg={experience.coverImg}
				// title={experience.title}
				// price={experience.price}
				// rating={experience.stats.rating}
				// reviewCount={experience.stats.reviewCount}
				// location={experience.location}
				// openSpots={experience.openSpots}
			/>
		)
	})

	return (
		<div>
		<Navbar />
		<Hero />

		<main>
			{cards}
		</main>
		</div>
	);
}

export default App;
