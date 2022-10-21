import React from 'react';
import homeIcon from '../assets/images/home-icon.svg';

export const Home = () => {
	return (
		<section className="home">
			<div className="main">
				<h2>Home</h2>
			</div>
			<div className="sidebar">
				<img src={homeIcon} alt="It is a house" />
			</div>
		</section>
	);
};
