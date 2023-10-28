import React, { Component } from "react";
import emoji from "../emoji.jpeg";
import "./Instructions.css";

// Import the image correctly

const Instructions = () => {
	return (
		<div className="instructions">
			<img src={emoji} alt="" /> {/* Use curly braces without quotes */}
			<p>Click on an emoji to view the emoji short name</p>
		</div>
	);
};
export default Instructions;
