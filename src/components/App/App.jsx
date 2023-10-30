import React from "react";
import "./App.css";
import AnimalCard from "../AnimalCard/Animalcard";
import data from "./data"
function App() {
	return(

		<div className="wrapper">
			<h1>Animals</h1>
			{
				data.map(animal=>(
					<AnimalCard key = {animal.name}/>
				))
			}
			</div>
	)
	}

export default App;
