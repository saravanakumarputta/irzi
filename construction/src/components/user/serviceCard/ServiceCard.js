import React from 'react';
import './ServiceCard.css';

export default function ServiceCard(props) {
	let { title, iconClassName, description } = props;
	return (
		<div className="serviceCard">
			<div className="serviceIcon">
				<span className={iconClassName}></span>
			</div>
			<div className="serviceContent">
				<h3 className="serviceTitle">{title}</h3>
				{/* <p className="serviceDescription">{description}</p> */}
			</div>
		</div>
	);
}
