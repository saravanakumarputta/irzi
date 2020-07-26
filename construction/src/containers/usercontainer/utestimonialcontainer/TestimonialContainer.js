import React from 'react';
import './UTesimonialContainer.css';

import { connect } from 'react-redux';

import Hero from '../../../components/user/hero/Hero';

import Testimonial from '../../../components/user/testimonials/Testimonials';

import { getTestimonials } from '../../../apicallers/TestimonailsAPI';
import { getTestimonialsSuccess } from '../../../actions/testimonialActions';

class UTesimonialContainer extends React.Component {
	componentDidMount() {
		let { getTestimonialsSuccess } = this.props;
		getTestimonials().then((res) => {
			let { status, data } = res;
			if (status === 200) {
				getTestimonialsSuccess(data.data);
			}
		});
	}
	render() {
		let { testimonials } = this.props;
		return (
			<div>
				<Hero height="300">
					<h1>Testimonials</h1>
				</Hero>
				<div className="dflex flexwrap site-section sectionContainer">
					<div className="dflex flexwrap">
						{Object.keys(testimonials).map((testimonialId) => {
							let { name, company, designation, feedback } = testimonials[testimonialId];
							return (
								<div className="utestimonailHolder" key={testimonialId}>
									<Testimonial
										name={name}
										company={company}
										designation={designation}
										feedback={feedback}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state, props) {
	return {
		testimonials: state.testimonials,
	};
}

export default connect(mapStateToProps, { getTestimonialsSuccess })(UTesimonialContainer);
