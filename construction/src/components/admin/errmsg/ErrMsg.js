import React from 'react';
import './ErrMsg.css';

export default function ErrMsg(props) {
	return <div className="errMsg">{props.msg}</div>;
}
