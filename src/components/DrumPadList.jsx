import React, { useEffect } from "react";

const DrumPadList = ({ audioList, setSoundText }) => {
	const handleBtnSound = e => {
		const sound = e.target.childNodes[1].src;
		const soundType = e.target.childNodes[1].id;
		const audio = new Audio(sound);
		audio.play();

		audioList.map(item => {
			if (soundType === item.type) {
				setSoundText(item.text);
			}
		});
	};

	const handleKeySound = e => {
		audioList.map(item => {
			if (e.keyCode === item.key) {
				const audio = new Audio(item.source);
				audio.play();
			}
		});
	};

	useEffect(() => {
		document.addEventListener("keydown", handleKeySound);

		return () => {
			document.removeEventListener("keydown");
		};
	}, []);

	return audioList.map(item => {
		return (
			<button
				className='drum-pad'
				onClick={handleBtnSound}
				id={item.text}
			>
				{item.type}
				<audio
					src={item.source}
					className='clip'
					id={item.type}
				></audio>
			</button>
		);
	});
};

export default DrumPadList;
