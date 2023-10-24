import React from "react";
import "./App.css";

const displayEmojiNmae = (event) => console.log(event.target.id);
const emoji = [
	{
		emoji: "😀",
		name: "test grinning face",
	},
	{
		emoji: "🎉",
		name: "party popper",
	},
	{
		emoji: "💃",
		name: "Women dancing",
	},
];
function App() {
	const displayAction = false;
	const greeting = "greeting";
	return (
		<div className="container">
			<h1 id={greeting}>Hello React</h1>
			{displayAction && <p>I am start writing jsx</p>}
			<ul>
				{emoji.map((emoji) => (
					<li key={emoji.name}>
						<button
							onClick={displayEmojiNmae}
							aria-label={emoji.name}
							id={emoji.name}>
							{emoji.emoji}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
