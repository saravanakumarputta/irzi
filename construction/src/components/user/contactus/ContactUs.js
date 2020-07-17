import React from 'react';
import './ContactUs.css';

import TextBox from '../../common/textbox/TextBox';
import TextArea from '../../common/textarea/TextArea';

export default function ContactUs() {
	return (
		<div>
			<div className="site-section sectionContainer dflex flexcolumn">
				<div className="cuRow">
					<div className="dflex flexwrap cuRowItem">
						<div className="rowItemHolder">
							<TextBox
								label="First Name"
								changeHandler={(value) => {
									console.log(value);
								}}
							/>
						</div>
						<div className="rowItemHolder">
							<TextBox
								label="Last Name"
								changeHandler={(value) => {
									console.log(value);
								}}
							/>
						</div>
					</div>
				</div>
				<div className="cuRow">
					<div className="dflex flexwrap cuRowItem">
						<div className="rowItemHolder">
							<TextBox
								label="Email"
								type="email"
								changeHandler={(value) => {
									console.log(value);
								}}
							/>
						</div>
						<div className="rowItemHolder">
							<TextBox
								label="Tel Number"
								changeHandler={(value) => {
									console.log(value);
								}}
							/>
						</div>
					</div>
				</div>
				<div className="cuRow">
					<div className="cuMessage">
						<TextArea
							label="Message"
							rows={10}
							changeHandler={(value) => {
								console.log(value);
							}}
						/>
						<br />
						<span className="btn pointer">Send Message</span>
					</div>
				</div>
			</div>
			<div class="cuPhilosphy">
				<div className="sectionContainer dflex flexwrap alignAround cuPhilosphyContainer">
					<div className="cuPhilosophyItem">
						<h3>Our Philosophy</h3>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis recusandae, iure
							repellat quis delectus ea? Dolore, amet reprehenderit.
						</p>
					</div>
					<div className="cuPhilosophyItem">
						<h3>Our Principle</h3>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis recusandae, iure
							repellat quis delectus ea? Dolore, amet reprehenderit.
						</p>
					</div>
					<div className="cuPhilosophyItem">
						<h3>Our Success</h3>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis recusandae, iure
							repellat quis delectus ea? Dolore, amet reprehenderit.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
