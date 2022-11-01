import React from 'react';
import styles from './SideBar.module.scss';
import mascot from '../../assets/images/mascot_verticle.png';
import map from '../../assets/images/map.jpg';

const SideBar = () => {
	return (
		<aside className={styles.aside}>
			<section>
				<h3>Get Directions</h3>
				<a href="https://goo.gl/maps/86KggT97rTx">
					<img src={map} alt="Map to the Grooming Jeannie" />
					<p>1931 Belmont Ave.</p>
					<p>Youngstown, OH 44504</p>
					<p>(330)-978-1074</p>
					<p>grooming: by appointment</p>
				</a>
			</section>
			<section>
				<h3>services include</h3>
				<ul>
					<li>dog grooming</li>
					<li>dog baths</li>
					<li>cat grooming</li>
					<li>cat baths</li>
					<li>nail trimming</li>
					<li>ear cleaning</li>
					<li>glands expressed</li>
				</ul>
			</section>
			<section>
				<h3>The Grooming Jeannie</h3>
				<img src={mascot} alt="Portrait of the Grooming Jeannie" />
			</section>
		</aside>
	);
};

export default SideBar;
