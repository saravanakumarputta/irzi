import React from 'react';
import './Testimonials.css';

import person_3_sq from '../../../images/person_3_sq.jpg';

export default function Testimonials(props) {
	let { name, company, designation, feedback } = props;
	return (
		<div className="utestimonialContainer">
			<div className="testimonialFeedback">
				<blockquote>
					{/* <img src={person_3_sq} alt="userImage" /> */}
					<p>{feedback}</p>
				</blockquote>
			</div>
			<div className="testimonialUserContainer">
				<div className="testimonialUserName">{name}</div>
				<div className="testimonialUserDetails">
					<span>{designation}</span>
					<span>{company}</span>
				</div>
			</div>
		</div>
	);
}
