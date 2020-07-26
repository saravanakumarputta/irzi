import React, { useState } from 'react';
import './NewsLetter.css';

import { addEmailTosubscriptionList } from '../../../apicallers/EmailAPI';

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
						value={email}
					/>
					<span
						className="subscribeButton"
						onClick={() => {
							addEmailTosubscriptionList(email)
								.then((res) => {
									let { status } = res;
									if (status === 200) {
										setEmail('');
									}
								})
								.catch((err) => {
									alert('Unable to Add you email to subscription list!!!');
								});
						}}>
						Subscribe
					</span>
				</div>
			</div>
		</div>
	);
}
