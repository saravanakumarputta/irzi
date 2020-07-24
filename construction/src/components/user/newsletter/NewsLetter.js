import React, { useState } from 'react';
import './NewsLetter.css';

export default function NewsLetter(props) {
	let [email, setEmail] = useState('');
	return (
		<div className="newsletterContainer">
			<div className="dflex flexwrap sectionContainer">
				<div className="newsletterText">
					<h3 className="newsletterTitle">Subscribe To Newsletter</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, reprehenderit!</p>
				</div>
				<div className="newsletterAction flexgrow">
					<input
						type="text"
						className="subscribeInput"
						placeholder="Type Here..."
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
					<span
						className="subscribeButton"
						onClick={() => {
							console.log(email);
						}}>
						Subscribe
					</span>
				</div>
			</div>
		</div>
	);
}
