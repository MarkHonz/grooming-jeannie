import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/images/full_logo.png';
import NavBar from '../NavBar/NavBar';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logobox}>
				<img className={styles.logo} src={logo} alt="" />
			</div>
			<div className={styles.navbox}>
				<NavBar />
			</div>
		</header>
	);
};

export default Header;
