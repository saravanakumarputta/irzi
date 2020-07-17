import React from 'react';
import './ProjectCard.css';

import logo from '../../../images/works_1.jpg';

export default function ProjectCard(props) {
	let { title, location, image } = props;
	return (
		// <div className="card">
		// 	<div className="cardThumbnail">
		// 		<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" />
		// 	</div>
		// 	<div className="cardContent">
		// 		<h1 className="cardTitle">{title}</h1>
		// 		<h2 className="cardSubTitle">{location}</h2>
		// 		{/* <div className="cardDescription flexgrow">{section1}</div> */}
		// 	</div>
		// </div>
		<div className="upCard">
			<div className="upContent">
				<div>
					<h2 class="upTitle">{title}</h2>
				</div>
			</div>
			<img src={image} alt="projimg" />
		</div>
	);
}
