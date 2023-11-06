import React from "react";
import "./Animalcard.css";
import PropTypes from "prop-types";

export default function Animalcard({
	additional,
	diet,
	name,
	scientificName,
	showAdditional,
	size,
}) {
	return (
		<div className="animal-wrapper">
			<h2>{name}</h2>
			<h3>{scientificName}</h3>
			<h4>{size} kg</h4>
			<div>{diet.join(", ")}.</div>
			<button onClick={() => showAdditional(additional)}>More </button>
		</div>
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
	showAdditional: PropTypes.func.isRequired,
	size: PropTypes.number.isRequired,
};
Animalcard.defaultProps = {
	additional:{
		notes:"No additional Information"
	}
}
