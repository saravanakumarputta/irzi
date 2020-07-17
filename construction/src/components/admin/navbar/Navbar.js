import React from 'react';
import './Navbar.css';
import { Switch, Route, useRouteMatch, NavLink } from 'react-router-dom';

import TestimonialContainer from '../../../containers/admincontainers/testimonialscontainer/TestimonialsContainer';
import ProjectsContainer from '../../../containers/admincontainers/projectsContainer/ProjectsContainer';
import SubscriptionsContainer from '../../../containers/admincontainers/subscribersContainer/SubscribersContainer';

export default function Navbar() {
	let { path, url } = useRouteMatch();
	return (
		<div className="dflex h100">
			<div>
				<div className="dflex navContainer flexcolumn h100">
					<NavLink activeClassName="navItemActive" className="navItem" to={`${url}/projects`}>
						Projects
					</NavLink>

					<NavLink activeClassName="navItemActive" className="navItem" to={`${url}/testimonials`}>
						Testimonials
					</NavLink>
					<NavLink activeClassName="navItemActive" className="navItem" to={`${url}/subscription`}>
						Emails
					</NavLink>
				</div>
			</div>
			<div className="flexgrow h100 p2">
				<div className="dflex flexcolumn h100">
					<div>
						<div className="dflex alignHorizontal navItemres">
							<NavLink activeClassName="navItemActiveres" className="navItem" to={`${url}/projects`}>
								Projects
							</NavLink>
							<NavLink activeClassName="navItemActiveres" className="navItem" to={`${url}/testimonials`}>
								Testimonials
							</NavLink>
							<NavLink activeClassName="navItemActiveres" className="navItem" to={`${url}/subscription`}>
								Emails
							</NavLink>
						</div>
					</div>
					<div className="flexgrow h100">
						<Switch>
							<Route exact path={`${path}/projects`}>
								<ProjectsContainer />
							</Route>
							<Route exact path={`${path}/testimonials`}>
								<TestimonialContainer />
							</Route>
							<Route exact path={`${path}/subscription`}>
								<SubscriptionsContainer />
							</Route>
						</Switch>
					</div>
				</div>
			</div>
		</div>
	);
}
