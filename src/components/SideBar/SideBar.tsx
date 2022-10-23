import React from 'react';
import styles from './SideBar.module.scss';
import mascot from '../../assets/images/mascot_verticle.png';

const SideBar = () => {
	return (
		<aside className={styles.aside}>
			<section className={styles.services}>
				<h3 className={styles.services__title}>services include</h3>
				<ul className={styles.services__list}>
					<li className={styles.services__listItem}>dog grooming</li>
					<li className={styles.services__listItem}>dog baths</li>
					<li className={styles.services__listItem}>cat grooming</li>
					<li className={styles.services__listItem}>cat baths</li>
					<li className={styles.services__listItem}>nail trimming</li>
					<li className={styles.services__listItem}>ear cleaning</li>
					<li className={styles.services__listItem}>glands expressed</li>
				</ul>
			</section>
			<section className={styles.mascot}>
				<h3>The Grooming Jeannie</h3>
				<img
					className={styles.mascot__img}
					src={mascot}
					alt="Portrait of the Grooming Jeannie"
				/>
			</section>
		</aside>
	);
};

export default SideBar;
