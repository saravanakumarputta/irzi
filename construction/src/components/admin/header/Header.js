import React from 'react';
import './Header.css';

import logo from '../../../images/logo.png';

export default function Header(props) {
	let { changePasswordHandler, logoutHandler } = props;
	return (
		<div className="dflex headerContainer alignVertical">
			<div className="flexgrow headerTitle">
				<img src={logo} alt="logo" height="30px" />
			</div>
			<div
				onClick={() => {
					changePasswordHandler();
				}}
				className="pointer headerIcon">
				<span className="icon-key"></span>
			</div>
			<div
				onClick={() => {
					logoutHandler();
				}}
				className="pointer headerIcon">
				<span className="icon-exit"></span>
			</div>
		</div>
	);
}
