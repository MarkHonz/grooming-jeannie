import React from 'react';
import SideBar from '../components/SideBar/SideBar';

export const Home = () => {
	return (
		<main className="home">
			<section className="primary">
				<div className="container">
					<div className="left"></div>
					<div className="right">
						<div className="poster">
							<h2>Quality grooming With Style:</h2>
							<p>
								Offering top of the line dog and cat grooming services to pets
								across the Mahoning Valley. I have been proudly, professionally,
								and compassionately grooming Mahoning, Trumbull and Columbiana
								county's four legged family members, helping to make them happy
								and beautiful since 1991. Striving to make your pet's experience
								something that they look forward to instead of fearing it. I
								love what I do and enjoy going the extra steps to help my
								clients and their pets become part of our family. Helping you
								and your four legged friend find out what pet grooming should be
								like.
							</p>
						</div>
					</div>
				</div>
			</section>
			<div className="sidebar">
				<SideBar />
			</div>
		</main>
	);
};
