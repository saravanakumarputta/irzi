import React from 'react';
import './Testimonials.css';

import person_3_sq from '../../../images/person_3_sq.jpg';

export default class About extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="utestimonialContainer">
				<div className="testimonialFeedback">
					<blockquote>
						<img src={person_3_sq} alt="userImage" />
						<p>
							Grateful email messages… Thank you so much for a job well done. Social media love… You guys
							are the best! Keep up the great work! Happy handwritten thank you notes… I just wanted to
							let you know that it's been great working with you. Gushing in-person gratitude… You've been
							so helpful.
						</p>
					</blockquote>
				</div>
				<div className="testimonialUserContainer">
					<div className="testimonialUserName">Saravana Kumar Putta Selvaraj</div>
					<div className="testimonialUserDetails">
						<span>CEO</span>
						<span>Digital Ocean</span>
					</div>
				</div>
			</div>
		);
	}
}
