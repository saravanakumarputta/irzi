import React from 'react';
import './List.css';

export default function List(props) {
	let { title, isAddIconNeeded, children, addHandler } = props;
	return (
		<div className="dflex flexcolumn listContainer h100">
			<div className="listHeader">
				<div className="dflex">
					<div className="listHeaderTitle flexgrow">{title}</div>
					{isAddIconNeeded ? (
						<div
							className="listAction"
							onClick={() => {
								addHandler();
							}}>
							<span className="icon-plus pointer"></span>
						</div>
					) : null}
				</div>
			</div>
			<div className="flexgrow overflow-y-auto h100">{children}</div>
		</div>
	);
}
