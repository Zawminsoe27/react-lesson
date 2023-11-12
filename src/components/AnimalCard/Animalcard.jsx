import React from "react";
import "./Animalcard.css";
import PropTypes from "prop-types";
import AnimalDetails from "../AnimalDetails/AnimalDetails";
import Card from "../Card/Card";

export default function Animalcard({ name, size, ...props }) {
	return (
		<Card title="Animal" details={<AnimalDetails {...props}/>}>
			<h2>{name}</h2>

			<div>{size} kg</div>
		</Card>
	);
}
Animalcard.propTypes = {
	additional: PropTypes.shape({
		link: PropTypes.string,
		notes: PropTypes.string,
	}),
	diet: PropTypes.arrayOf(PropTypes.string).isRequired,
	name: PropTypes.string.isRequired,
	scientificName: PropTypes.string.isRequired,
	// showAdditional: PropTypes.func.isRequired,
	size: PropTypes.number.isRequired,
};
Animalcard.defaultProps = {
	additional: {
		notes: "No additional Information",
	},
};
