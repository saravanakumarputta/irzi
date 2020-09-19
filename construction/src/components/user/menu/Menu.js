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
				<NavLink to="/about-us" activeClassName="activeClass">
					About Us
				</NavLink>
				<NavLink to="/services" activeClassName="activeClass">
					Services
				</NavLink>
				<NavLink to="/projects" activeClassName="activeClass">
					Projects
				</NavLink>
				{/* <NavLink to="/team" activeClassName="activeClass">
					Team
				</NavLink> */}
				{/* <NavLink to="/testimonials" activeClassName="activeClass">
					Testimonials
				</NavLink> */}
				<NavLink to="/contact" activeClassName="activeClass">
					Contact Us
				</NavLink>
			</div>
		</div>
	);
}
