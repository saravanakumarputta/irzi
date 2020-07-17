import React from 'react';

import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import Testimonials from '../testimonials/Testimonials';
import Projects from '../projects/Projects';

export default function Home() {
	let { path, url } = useRouteMatch();

	return (
		<div>
			<h2>Topics</h2>
			<ul>
				<li>
					<Link to={`${url}/testimonials`}>Rendering with React</Link>
				</li>
				<li>
					<Link to={`${url}/projects`}>Components</Link>
				</li>
			</ul>

			<Switch>
				<Route exact path={path}>
					<h3>Please select a topic.</h3>
				</Route>
				<Route exact path={`${path}/testimonials`}>
					<Testimonials />
				</Route>
				<Route exact path={`${path}/projects`}>
					<Projects />
				</Route>
			</Switch>
		</div>
	);
}
