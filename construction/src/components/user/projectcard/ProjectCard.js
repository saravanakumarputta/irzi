import React from 'react';
import './ProjectCard.css';

export default function ProjectCard(props) {
	let { title, image } = props;
	return (
		<div className="upCard">
			<div className="upContent">
				<div>
					<h2 className="upTitle">{title}</h2>
				</div>
			</div>
			<img src={`${image}`} alt="projimg" />
		</div>
	);
}
