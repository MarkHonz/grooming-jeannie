import React from 'react';
import homeIcon from '../assets/images/home-icon.svg';
import SideBar from '../components/SideBar/SideBar';

export const Home = () => {
	return (
		<section className="home">
			<div className="main">
				<img src={homeIcon} alt="It is a house" />
				<h2>Homie</h2>
			</div>
			<div className="sidebar">
				<SideBar />
			</div>
		</section>
	);
};
