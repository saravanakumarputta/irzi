import React from 'react';

import Header from '../../components/admin/header/Header';
import Navbar from '../../components/admin/navbar/Navbar';

import PopupContainer from './popupcontainer/PopupContainer';
import LoginContainer from './loginContainer/LoginContainer';
import { connect } from 'react-redux';

import { logout } from '../../actions/userActions';
import { showpopupLayer } from '../../actions/popupLayerActions';

class AdminContainer extends React.Component {
	render() {
		let { isUserLoggedIn, logout, showpopupLayer } = this.props;
		return (
			<React.Fragment>
				{isUserLoggedIn ? (
					<div className="dflex flexcolumn h100">
						<div>
							<Header
								logoutHandler={() => {
									logout();
								}}
								changePasswordHandler={() => {
									showpopupLayer('changepassword', '', '', 'ChangePassword');
								}}
							/>
						</div>
						<div className="flexgrow h100">
							<Navbar />
						</div>
						<PopupContainer />
					</div>
				) : (
					<div className="dflex alignVertical h100">
						<LoginContainer />
					</div>
				)}
			</React.Fragment>
		);
	}
}

function mapStateToProps(state, props) {
	return {
		isUserLoggedIn: state.user.isUserLoggedIn,
	};
}

export default connect(mapStateToProps, { logout, showpopupLayer })(AdminContainer);
