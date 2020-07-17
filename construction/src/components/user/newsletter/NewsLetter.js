import React from 'react';
import './NewsLetter.css';

export default function NewsLetter(props) {
	return (
		<div className="newsletterContainer">
			<div className="dflex flexwrap sectionContainer">
				<div className="newsletterText">
					<h3 className="newsletterTitle">Subscribe To Newsletter</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, reprehenderit!</p>
				</div>
				<div className="newsletterAction flexgrow">
					<input type="text" className="subscribeInput" />
					<span className="subscribeButton">Subscribe</span>
				</div>
			</div>
		</div>
	);
}
