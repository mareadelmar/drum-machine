import React, { useState } from "react";
import DrumPadList from "./components/DrumPadList";
import "./App.css";

const AUDIOS_DATA = [
	{
		type: "Q",
		text: "Heater-1",
		key: 81,
		source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
	},
	{
		type: "W",
		text: "Heater-2",
		key: 87,
		source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
	},
	{
		type: "E",
		text: "Heater-3",
		key: 69,
		source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
	},
	{
		type: "A",
		text: "Heater-4",
		key: 65,
		source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
	},
	{
		type: "S",
		text: "Heater-6",
		key: 83,
		source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
	},
	{
		type: "D",
		text: "Dsc_Oh",
		key: 68,
		source: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
	},
	{
		type: "Z",
		text: "Kick_n_Hat",
		key: 90,
		source: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
	},
	{
		type: "X",
		text: "Kick_n_Hat-2",
		key: 88,
		source: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
	},
	{
		type: "C",
		text: "Kick_n_Hat-3",
		key: 67,
		source: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
	},
];

const App = () => {
	const [soundText, setSoundText] = useState("");

	return (
		<div class='container'>
			<h1 className='title'>Drum Machine</h1>
			<div id='drum-machine'>
				<div class='pads'>
					<DrumPadList
						audioList={AUDIOS_DATA}
						setSoundText={setSoundText}
					/>
				</div>
				<div id='display'>
					<p>Drum type:</p>
					<p class='drum-type'>{soundText}</p>
				</div>
			</div>
		</div>
	);
};

export default App;
