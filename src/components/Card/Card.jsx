import React from "react";
import { PropTypes } from "prop-types";
import "./Card.css";

export default function Card({ children, details, title }) {
	return (
		<div className="card">
			<div className="card-details">
				<h2>{title}</h2>
				{details}
			</div>
			{children}
		</div>
	);
}
Card.propTypes = {
	dedtail: PropTypes.element,
	title: PropTypes.string.isRequired,
};
Card.defaultProps = {
	details: null,
};
