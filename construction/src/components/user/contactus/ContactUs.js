import React from 'react';
import './ContactUs.css';

import TextBox from '../../common/textbox/TextBox';
import TextArea from '../../common/textarea/TextArea';
import Hero from '../../../components/user/hero/Hero';

import { sendMessage } from '../../../apicallers/ContactUsAPI';

export default class ContactUs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
			message: '',
			errMsg: '',
			errEmail: '',
			errFirstName: '',
			errSendMsg: '',
		};
	}
	render() {
		return (
			<div>
				<Hero height="300">
					<h1>Contact US</h1>
				</Hero>
				<div className="site-section sectionContainer dflex flexcolumn">
					<div className="cuRow">
						<div className="dflex flexwrap cuRowItem">
							<div className="rowItemHolder">
								<TextBox
									label="First Name"
									changeHandler={(value) => {
										if (value.length <= 0) {
											this.setState({ errFirstName: 'First Name is Required', firstName: value });
										} else {
											this.setState({ firstName: value, errFirstName: '' });
										}
									}}
									value={this.state.firstName}
									errMsg={this.state.errFirstName}
								/>
							</div>
							<div className="rowItemHolder">
								<TextBox
									label="Last Name"
									value={this.state.lastName}
									changeHandler={(value) => {
										this.setState({ lastName: value });
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
									value={this.state.email}
									changeHandler={(value) => {
										// eslint-disable-next-line
										if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
											this.setState({ errEmail: '', email: value });
										} else {
											this.setState({ errEmail: 'Invalid Email', email: value });
										}
									}}
									errMsg={this.state.errEmail}
								/>
							</div>
							<div className="rowItemHolder">
								<TextBox
									label="Tel Number"
									value={this.state.phone}
									changeHandler={(value) => {
										this.setState({ phone: value });
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
								value={this.state.message}
								changeHandler={(value) => {
									if (value.length <= 100) {
										this.setState({
											message: value,
											errMsg: 'Message should be greater than 100 Chnarecters',
										});
									} else {
										this.setState({ message: value, errMsg: '' });
									}
								}}
								errMsg={this.state.errMsg}
							/>
							<br />
							<span
								className="btn pointer"
								onClick={() => {
									let { firstName, lastName, email, message, phone } = this.state;
									let _this = this;
									if (firstName && email && message) {
										sendMessage({ firstName, lastName, email, message, phone })
											.then((res) => {
												_this.setState({
													email: '',
													phone: '',
													firstName: '',
													lastName: '',
													message: '',
												});
											})
											.catch((err) => {
												this.setState({ errSendMsg: 'Unable to Send Message' });
											});
									}
								}}>
								Send Message
							</span>
						</div>
					</div>
				</div>
				<div className="cuPhilosphy">
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
}
