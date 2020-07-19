import React from 'react';
import './LoginContainer.css';

import { connect } from 'react-redux';

import { loginUser } from '../../../apicallers/UserAPI';
import { loginSuccess } from '../../../actions/userActions';

import TextBox from '../../../components/common/textbox/TextBox';
import ErrMsg from '../../../components/admin/errmsg/ErrMsg';
import AjaxLoader from '../../../components/common/ajaxloader/AjaxLoader';

import irzi from '../../../images/logo.png';

function ValidateEmail(mail) {
	// eslint-disable-next-line
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
		return true;
	}
	return false;
}

class LoginContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			emailValidationMsg: '',
			passwordValidationMsg: '',
			errMsg: '',
			isLoading: '',
		};
		this.handleLogin = this.handleLogin.bind(this);
	}

	handleLogin() {
		let { loginSuccess } = this.props;
		let _this = this;
		let { emailValidationMsg, password, passwordValidationMsg, email } = this.state;
		if (email.trim().length <= 0) {
			this.setState({ emailValidationMsg: "email/username can't be Empty" });
		}
		if (password.trim().length <= 0) {
			this.setState({ passwordValidationMsg: "Password can't be Empty" });
		}
		_this.setState({ isLoading: true });
		if (email.trim() && password) {
			if (!emailValidationMsg && !passwordValidationMsg) {
				loginUser(email, password)
					.then((res) => {
						let { status, data } = res;
						_this.setState({ isLoading: false });
						if (status === 200) {
							loginSuccess(data);
						}
					})
					.catch((err) => {
						let { data } = err;
						_this.setState({ isLoading: false });
						let errConst = {
							INVALID_USER_NAME: 'Invalid Email Id',
							INVALID_PASSWORD: 'Invalid Password',
						};
						_this.setState({ errMsg: errConst[data.errorMessage] });
					});
			}
		}
	}

	render() {
		return (
			<div className="dflex flexcolumn loginContainer">
				<div className="loginTitle alignVertical dflex">
					<img src={irzi} alt="logo" height="50px" />
					<div className="brandTagline">Engineers & Project Managers</div>
				</div>
				<div className="loginText">
					<div className="welcomeText">Welcome Back!</div>
					<div className="welcomeMsg">Enter your emailId and password to access admin panel.</div>
				</div>
				{this.state.errMsg ? (
					<div className="loginErrMsg">
						<ErrMsg msg={this.state.errMsg} />
					</div>
				) : null}
				<div className="loginForm">
					<TextBox
						label="Email Id"
						value={this.state.email}
						changeHandler={(email) => {
							this.setState({ email: email });
							if (!ValidateEmail(email)) {
								this.setState({ emailValidationMsg: 'Invalid Email' });
							} else {
								this.setState({ emailValidationMsg: '' });
							}
						}}
						errMsg={this.state.emailValidationMsg}
					/>
					<TextBox
						label="Password"
						type="password"
						value={this.state.passwod}
						changeHandler={(password) => {
							this.setState({ password: password });
							if (password.length <= 0) {
								this.setState({ passwordValidationMsg: "Password can't be Empty" });
							} else {
								this.setState({ passwordValidationMsg: '' });
							}
						}}
						errMsg={this.state.passwordValidationMsg}
					/>
					<div>
						<div className="dflex">
							<span className="btn pointer" onClick={this.handleLogin}>
								Login
							</span>
							{this.state.isLoading ? <AjaxLoader /> : null}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(
	(state, props) => {
		return { errMessage: state.user.errMessage };
	},
	{ loginSuccess }
)(LoginContainer);
