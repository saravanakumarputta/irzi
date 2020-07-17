import React from 'react';
import './SubscribersContainer.css';

import List from '../../../components/admin/list/List';
import { connect } from 'react-redux';

import { logout } from '../../../actions/userActions';
import { getEmailSubscribers } from '../../../apicallers/EmailAPI';
import { getSubscribedEmailsSuccess } from '../../../actions/emailSubscriptionActions';

import Loader from '../../../components/admin/loader/Loader';

class SubscribersContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			isErrMsg: '',
		};
	}

	componentDidMount() {
		var { logout, getSubscribedEmailsSuccess } = this.props;
		var _this = this;
		getEmailSubscribers()
			.then((res) => {
				let { status, data } = res;
				if (status === 200) {
					_this.setState({ isLoading: false });
					getSubscribedEmailsSuccess(data.data);
				}
				if (status === 204) {
					_this.setState({ isLoading: false });
					getSubscribedEmailsSuccess([]);
				}
			})
			.catch((err) => {
				let { status, data } = err;
				_this.setState({ isLoading: false });
				if (status === 401) {
					logout();
				} else {
					_this.setState({ isErrMsg: data.errorMessage });
				}
			});
	}
	render() {
		let { subscribers } = this.props;
		return (
			<React.Fragment>
				<List title="Email Subscribers">
					{this.state.isLoading ? (
						<div>
							<Loader />
							<Loader />
							<Loader />
							<Loader />
							<Loader />
						</div>
					) : subscribers.length > 0 ? (
						subscribers.map((email, key) => {
							return (
								<div key={key} style={{ borderBottom: '1px solid #ebf0f5', padding: '15px' }}>
									{email}
								</div>
							);
						})
					) : (
						<div className="noContent">No Content</div>
					)}
				</List>
			</React.Fragment>
		);
	}
}

function mapStateToProps(state, props) {
	return {
		subscribers: state.emails,
	};
}

export default connect(mapStateToProps, { getSubscribedEmailsSuccess, logout })(SubscribersContainer);
