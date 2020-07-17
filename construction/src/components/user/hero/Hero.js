import React from 'react';
import './Hero.css';

export default function Hero(props) {
	let { height, children } = props;
	return (
		<div className="hero flex-center" style={{ height: height + 'px' }}>
			<div className="hero-message">{children}</div>
		</div>
	);
}
