import React from 'react';
import './Appdrawer.css';

export default class Appdrawer extends React.Component {
	render() {
		let { show, closeHandler, title } = this.props;
		return (
			<div className="dflex flexcolumn appdrawerContainer" style={{ right: show ? '0' : '-420px' }}>
				<div>
					<div className="dflex appdrawerHeader">
						<div className="flexgrow title">{title}</div>
						<div
							className="closeAction"
							onClick={() => {
								closeHandler();
							}}>
							<div className="appdrawerClose">
								<span className="closeIcon pointer">X</span>
							</div>
						</div>
					</div>
				</div>
				<div className="flexgrow h100">{this.props.children}</div>
			</div>
		);
	}
}
