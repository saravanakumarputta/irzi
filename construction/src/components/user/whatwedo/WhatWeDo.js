import React from 'react';
import './WhatWeDo.css';

import ServiceCard from '../serviceCard/ServiceCard';

export default function WhatWeDo(props) {
	return (
		<div className="wwdContainer sectionContainer">
			<div className="dflex flexcolumn site-section">
				<div className="ftLeadTextContainer">
					<h3 className="ftTitle">What We Do</h3>
					<h2 className="ftDescription">
						We Are <strong>Leading Industry</strong> of Engineering. We Love What We Do
					</h2>
				</div>
				<div className=" flexgrow">
					<div className="dflex flexwrap">
						<div className="sc">
							<ServiceCard
								title="Great Team"
								iconClassName="myicon-engineer"
								description="Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie"
							/>
						</div>
						<div className="sc">
							<ServiceCard
								title="Great Ideas"
								iconClassName="myicon-compass"
								description="Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie"
							/>
						</div>
						<div className="sc">
							<ServiceCard
								title="Quality Building"
								iconClassName="myicon-oil-platform"
								description="Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie"
							/>
						</div>
						<div className="sc">
							<ServiceCard
								title="Quality Works"
								iconClassName="myicon-crane"
								description="Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
