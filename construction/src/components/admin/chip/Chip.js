import React from 'react';
import './Chip.css';

export default function Chip(props) {
	let { name, color, isLoading } = props;
	return (
		<div className={`dflex chip ${color || 'green'}`}>
			<div>{name}</div>
			{isLoading ? <div className="loader">{name}</div> : null}
		</div>
	);
}
