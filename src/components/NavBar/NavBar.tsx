import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.navbar}>
				<li className={styles.navitem}>
					<NavLink to="/">home</NavLink>
				</li>
				<li className={styles.navitem}>
					<NavLink to="/pricing">pricing</NavLink>
				</li>
				<li className={styles.navitem}>
					<NavLink to="/contact">contact</NavLink>
				</li>
				<li className={styles.navitem}>
					<NavLink to="/testimonials">reviews</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
