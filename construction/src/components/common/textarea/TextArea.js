import React from 'react';
import './TextArea.css';

export default function TextArea(props) {
	let { label, value, changeHandler, errMsg, disabled, rows } = props;
	return (
		<div className="input-control">
			<label className="label">{label}</label>
			<textarea
				style={{ resize: 'none' }}
				className="text-area"
				value={value}
				onChange={(e) => {
					changeHandler(e.target.value);
				}}
				disabled={disabled}
				rows={rows}
			/>
			{errMsg ? <div className="errColor">{errMsg}</div> : null}
		</div>
	);
}
