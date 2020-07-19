import React from 'react';
import './ChangepasswordContainer.css';
import { connect } from 'react-redux';

import { changePassword } from '../../../apicallers/UserAPI';

import { logout } from '../../../actions/userActions';
import { hidepopupLayer } from '../../../actions/popupLayerActions';

import TextBox from '../../../components/common/textbox/TextBox';
import ErrMsg from '../../../components/admin/errmsg/ErrMsg';
import AjaxLoader from '../../../components/common/ajaxloader/AjaxLoader';

let errMsgConstant = {
	INVALID_PASSWORD: 'Invalid Old Password',
};

class ChangePasswordContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			oldPassword: '',
			newPassword: '',
			oldPasswordErrMsg: '',
			newPasswordErrMsg: '',
			errMsg: '',
			isLoading: '',
		};
		this.handleChangepassword = this.handleChangepassword.bind(this);
	}

	handleChangepassword() {
		let { hidepopupLayer } = this.props;
		let { oldPassword, newPassword } = this.state;
		let _this = this;
		oldPassword = oldPassword.trim();
		newPassword = newPassword.trim();

		if (oldPassword.length <= 0) {
			this.setState({ oldPasswordErrMsg: 'Old Password is required' });
		}

		if (newPassword.length <= 0) {
			this.setState({ newPasswordErrMsg: 'New Password is required' });
		}
		_this.setState({ isLoading: true });
		if (oldPassword && newPassword) {
			changePassword(oldPassword, newPassword)
				.then((res) => {
					let { status } = res;
					_this.setState({ isLoading: false });
					if (status === 200) {
						hidepopupLayer();
					}
				})
				.catch((err) => {
					let { status, data } = err;
					_this.setState({ isLoading: false });
					if (status === 401) {
						if (errMsgConstant[data.errorMessage] === 'INVALID_TOKEN') {
							logout();
						}
					}
					_this.setState({ errMsg: errMsgConstant[data.errorMessage] });
				});
		}
	}

	render() {
		return (
			<div className="dflex flexcolumn cpFormContainer h100">
				{this.state.errMsg ? <ErrMsg msg={this.state.errMsg} /> : null}
				<div className="flexgrow formElements">
					<TextBox
						label="Old Password"
						value={this.state.oldPassword}
						changeHandler={(oldPassword) => {
							this.setState({ oldPassword: oldPassword });
							if (oldPassword.length <= 0) {
								this.setState({ oldPasswordErrMsg: 'Old Password is required' });
							} else {
								this.setState({ oldPasswordErrMsg: '' });
							}
						}}
						errMsg={this.state.oldPasswordErrMsg}
					/>
					<TextBox
						label="New Password"
						value={this.state.newPassword}
						changeHandler={(newPassword) => {
							this.setState({ newPassword: newPassword });
							if (newPassword.length <= 0) {
								this.setState({ newPasswordErrMsg: 'New Password is required' });
							} else {
								this.setState({ newPasswordErrMsg: '' });
							}
						}}
						errMsg={this.state.newPasswordErrMsg}
					/>
				</div>
				<div className="formFooter dflex">
					<span className="formBtn" onClick={this.handleChangepassword}>
						Change Password
					</span>
					{this.state.isLoading ? <AjaxLoader /> : null}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state, props) {
	return {
		errMessage: state.user.errMessage,
	};
}

export default connect(mapStateToProps, { hidepopupLayer, logout })(ChangePasswordContainer);
