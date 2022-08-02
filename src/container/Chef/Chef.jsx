import React from 'react';

import SubHeading, { subHeading } from '../../components/SubHeading/SubHeading';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
	<div className="app__bg app__wrapper section__padding">
		<div className="app__wrapper_img app__wrapper_img-reverse">
			<img src={images.chef} alt="chef" />
		</div>

		<div className="app__wrapper_info">
			<SubHeading title="Chef's Word" />
			<h2 className="headtext__cormorant">What we believe in</h2>

			<div className="app__chef-content">
				<div className="app__chef-content_quote">
					<img src={images.quote} alt="quote" />
					<p className="p__opensans">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
						itaque accusamus.
					</p>
				</div>
				<p className="p__opensans">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
					incidunt porro error sit, maxime recusandae distinctio impedit ducimus
					suscipit nobis deleniti ex repellat sint culpa facere optio deserunt
					veniam corrupti!
				</p>
			</div>

			<div className="app__chef-sign">
				<p>Kevin Luo</p>
				<p className="p__opensans">Chef & Founder</p>
				<img src={images.sign} alt="sign" />
			</div>
		</div>
	</div>
);

export default Chef;
