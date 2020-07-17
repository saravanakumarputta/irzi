import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

import logo from '../../../images/logo.png';

export default function Header() {
	let [isNavbarVisible, setNavBarVisible] = React.useState(false);
	return (
		<div className="uHeaderContainer bg-light">
			<div className="sectionContainer mauto">
				<div className="dflex alignBetween alignVertical uHeaderWrapper">
					<div className="logo">
						<img src={logo} alt="IrZi" />
					</div>
					<div
						className="menu-icon"
						onClick={() => {
							setNavBarVisible(!isNavbarVisible);
						}}>
						<div className="menu-bar bar1"></div>
						<div className="menu-bar bar2"></div>
						<div className="menu-bar bar3"></div>
					</div>
					<div className="reMenuContainer" style={{ display: isNavbarVisible ? 'block' : 'none' }}>
						<div className="dflex flexcolumn">
							<NavLink
								exact
								to="/"
								activeClassName="reMenuActive"
								className="reMenuItems"
								onClick={() => {
									setNavBarVisible(false);
								}}>
								Home
							</NavLink>
							<NavLink
								to="/projects"
								activeClassName="reMenuActive"
								className="reMenuItems"
								onClick={() => {
									setNavBarVisible(false);
								}}>
								Projects
							</NavLink>
							<NavLink
								to="/testimonials"
								activeClassName="reMenuActive"
								className="reMenuItems"
								onClick={() => {
									setNavBarVisible(false);
								}}>
								Testimonials
							</NavLink>
							<NavLink
								to="/contact"
								activeClassName="reMenuActive"
								className="reMenuItems"
								onClick={() => {
									setNavBarVisible(false);
								}}>
								Contact Us
							</NavLink>
						</div>
					</div>
					<div className="dflex wid_70 alignBetween headerDetail">
						<div className="headerItems">
							<div className="quick-contact-icons dflex fwrap alignVertical">
								<div className="icon align-self-start">
									<span className="myicon-placeholder"></span>
								</div>
								<div className="text">
									<span className="h4 d-block">Selangor</span>
									<span className="caption-text">11-2 Jalan Impian Perdana</span>
								</div>
							</div>
						</div>
						<div className="headerItems">
							<div className="quick-contact-icons dflex fwrap alignVertical">
								<div className="icon align-self-start">
									<span className="myicon-call"></span>
								</div>
								<div className="text">
									<span className="h4 d-block">03 8740 9774</span>
									<span className="caption-text">Fax: 03 8740 9784</span>
								</div>
							</div>
						</div>
						<div className="headerItems">
							<div className="quick-contact-icons dflex fwrap alignVertical">
								<div className="icon align-self-start">
									<span className="myicon-email"></span>
								</div>
								<div className="text">
									<span className="h4 d-block">mail@irzi.com</span>
									<span className="caption-text">43000, Kajang</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
