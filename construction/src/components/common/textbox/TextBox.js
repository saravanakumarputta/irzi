import React from 'react';
import './TextBox.css';

export default function TextBox(props) {
	let { label, value, changeHandler, errMsg, disabled, type } = props;
	return (
		<div className="input-control">
			<label className="label">{label}</label>
			<input
				type={type ? type : 'text'}
				className="text-input"
				value={value}
				onChange={(e) => {
					changeHandler(e.target.value);
				}}
				disabled={disabled}
			/>
			{errMsg ? <div className="errColor">{errMsg}</div> : null}
		</div>
	);
}
