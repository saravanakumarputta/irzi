import React from 'react';
import Hero from '../../../components/user/hero/Hero';

import ServiceCard from '../../../components/user/serviceCard/ServiceCard';

export default class UServiceContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			services: [
				{
					title: 'Great Team',
					icon: 'myicon-engineer',
					description: 'Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie',
				},
				{
					title: 'Quality Building',
					icon: 'myicon-oil-platform',
					description: 'Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie',
				},
				{
					title: 'Quality Works',
					icon: 'myicon-crane',
					description: 'Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie',
				},
				{
					title: 'Great Ideas',
					icon: 'myicon-idea',
					description: 'Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie',
				},
			],
		};
	}

	render() {
		return (
			<React.Fragment>
				<Hero
					title="Services"
					description="Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie"
				/>
				<div className="dflex flexwrap site-section sectionContainer">
					{this.state.services.map((service) => {
						let { title, icon, description } = service;
						return (
							<div className="pcardContainer">
								<ServiceCard title={title} iconClassName={icon} description={description} />
							</div>
						);
					})}
				</div>
			</React.Fragment>
		);
	}
}
