import React from 'react';
import './UTesimonialContainer.css';

import Hero from '../../../components/user/hero/Hero';

import Testimonial from '../../../components/user/testimonials/Testimonials';

export default function UTesimonialContainer() {
	return (
		<div>
			<Hero height="300">
				<h1>Testimonials</h1>
			</Hero>
			<div className="dflex flexwrap site-section sectionContainer">
				<div className="dflex flexwrap">
					<div className="utestimonailHolder">
						<Testimonial />
					</div>
					<div className="utestimonailHolder">
						<Testimonial />
					</div>
					<div className="utestimonailHolder">
						<Testimonial />
					</div>
					<div className="utestimonailHolder">
						<Testimonial />
					</div>
					<div className="utestimonailHolder">
						<Testimonial />
					</div>
					<div className="utestimonailHolder">
						<Testimonial />
					</div>
					<div className="utestimonailHolder">
						<Testimonial />
					</div>
					<div className="utestimonailHolder">
						<Testimonial />
					</div>
				</div>
			</div>
		</div>
	);
}
