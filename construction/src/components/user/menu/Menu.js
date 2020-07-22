import React from 'react';
import './Menu.css';

import { NavLink } from 'react-router-dom';

export default function Menu() {
	return (
		<div className="menuContainer">
			<div className="dflex sectionContainer mauto">
				<NavLink exact to="/" activeClassName="activeClass">
					Home
				</NavLink>
				<NavLink to="/services" activeClassName="activeClass">
					Our Services
				</NavLink>
				<NavLink to="/projects" activeClassName="activeClass">
					Projects
				</NavLink>
				<NavLink to="/testimonials" activeClassName="activeClass">
					Testimonials
				</NavLink>
				<NavLink to="/contact" activeClassName="activeClass">
					Contact Us
				</NavLink>
			</div>
		</div>
	);
}
