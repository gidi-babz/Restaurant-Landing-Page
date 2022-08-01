import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
	<div
		className="app__aboutus app__bg flex__center section__padding"
		id="about"
	>
		<div className="app__aboutus-overlay flex__center">
			<img src={images.G} alt="letter G" />
		</div>

		<div className="app__aboutus-content flex__center">
			<div className="app__aboutus-content_about">
				<h1 className="headtext__cormorant">About Us</h1>
				<img src={images.spoon} alt="about_spoon" />
				<p className="p__opensans">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
					itaque ipsa nemo inventore, architecto aut veniam earum vel eligendi
					natus porro omnis fugit ullam, autem nulla doloribus vero voluptatem!
					Non.
				</p>
				<button type="button" className="custom__button">
					Know More
				</button>
			</div>

			<div className="app__aboutus-content_knife flex__center">
				<img src={images.knife} alt="about_knife" />
			</div>

			<div className="app__aboutus-content_history">
				<h1 className="headtext__cormorant">Our History</h1>
				<img src={images.spoon} alt="about_spoon" />
				<p className="p__opensans">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
					optio inventore a odio officiis consequuntur laborum! Unde ipsam
					explicabo autem expedita ducimus atque sit quos culpa aliquid facere,
					excepturi.
				</p>
				<button type="button" className="custom__button">
					Know More
				</button>
			</div>
		</div>
	</div>
);

export default AboutUs;
