import React, { useState, useEffect } from 'react';

const DarKMode = () => {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		if (darkMode) {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
	}, [darkMode]);

	const onButtonClick = () => {
		setDarkMode(!darkMode);
	};

	return (
		<div className='mode text-center fs-1'>
			<p>This is a test</p>
			<h4>{darkMode ? 'This is Dark mode' : 'This is Light Mode'} </h4>
			<button
				className='dark-mode-toggle'
				onClick={onButtonClick}>
				<div className='dark-mode-slider' />
			</button>
		</div>
	);
};

export default DarKMode;
