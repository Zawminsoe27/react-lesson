import React from "react";
import "./App.css";
import AnimalCard from "../AnimalCard/Animalcard";
import data from "./data";
// function showAdditional(additional) {
// 	const alertInformation = Object.entries(additional)
// 		.map((information) => `${information[0]}: ${information[1]}`)
// 		.join("\n");
// 	alert(alertInformation)
// }
function App() {
	return (
		<div className="wrapper">
			<h1>Animals</h1>
			{data.map((animal) => (
				<AnimalCard
					// additional={animal.additional}
					diet={animal.diet}
					key={animal.name}
					name={animal.name}
					size={animal.size}
					scientificName={animal.scientificName}
					// showAdditional={showAdditional}
				/>
			))}
		</div>
	);
}

export default App;
