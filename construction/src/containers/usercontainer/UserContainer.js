import React from 'react';
import './UserContainer.css';

import { Switch, Route } from 'react-router-dom';

import Menu from '../../components/user/menu/Menu';
import Header from '../../components/user/header/Header';
import Footer from '../../components/user/footer/Footer';

import Hero from '../../components/user/hero/Hero';
import WhyUs from '../../components/user/whyus/WhyUs';
import NewsLetter from '../../components/user/newsletter/NewsLetter';
import FeaturedTestimonials from '../../components/user/featuredtestimonial/FeaturedTestimonials';
import WhatWeDo from '../../components/user/whatwedo/WhatWeDo';
import ContactUs from '../../components/user/contactus/ContactUs';

import UProjectContainer from './uprojectscontainer/UProjectContainer';
import UServiceContainer from './uservicecontainers/UServiceContainer';
import UTestimonialContainer from './utestimonialcontainer/TestimonialContainer';
import UProjectDetailContainer from './uprojectdetailcontainer/UProjectDetailContainer';

export default class UserContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div style={{ backgroundColor: '#FFF', maxWidth: '1280px', margin: 'auto' }}>
				<div>
					<Header />
					<Menu />
				</div>
				<div className="">
					<Switch>
						<Route exact path="/">
							<div>
								<Hero height="500">
									<h1>
										We are <strong>Leading</strong> Insdustry of engineers
									</h1>
								</Hero>
								<WhatWeDo />
								<WhyUs />
								<FeaturedTestimonials />
								<NewsLetter />
							</div>
						</Route>
						<Route exact path="/projects" component={UProjectContainer} />
						<Route exact path="/projects/:id" component={UProjectDetailContainer} />
						<Route exact path="/testimonials" component={UTestimonialContainer} />
						<Route exact path="/services" component={UServiceContainer} />
						<Route exact path="/contact" component={ContactUs} />
					</Switch>
				</div>
				<Footer />
			</div>
		);
	}
}
