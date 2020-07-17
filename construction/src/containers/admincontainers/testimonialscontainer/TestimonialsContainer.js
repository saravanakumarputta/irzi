import React from 'react';
import './TestimonialsContainer.css';

import List from '../../../components/admin/list/List';
import Chip from '../../../components/admin/chip/Chip';
import Loader from '../../../components/admin/loader/Loader';
import { connect } from 'react-redux';

import { approveTestimonialSuccess, getTestimonialsSuccess } from '../../../actions/testimonialActions';
import { logout } from '../../../actions/userActions';

import { getTestimonials, approveTestimonial } from '../../../apicallers/TestimonailsAPI';

class TestimonialContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			errMessage: '',
			approvalLoading: '',
		};
	}
	componentDidMount() {
		let { getTestimonialsSuccess } = this.props;
		var _this = this;
		getTestimonials()
			.then((res) => {
				if (res.status === 200) {
					_this.setState({ isLoading: false });
					getTestimonialsSuccess(res.data.data);
				}
			})
			.catch((err) => {
				_this.setState({ isLoading: false });
				_this.setState({ isErrMsg: err.data.errorMessage });
			});
	}

	approveTestimonialHandler(testimonialId) {
		var _this = this;
		var { testimonials, approveTestimonialSuccess } = this.props;
		let approvalStatus = !testimonials[testimonialId].isApproved;
		_this.setState({ approvalLoading: testimonialId });
		approveTestimonial(testimonialId, { approvalStatus })
			.then((res) => {
				_this.setState({ approvalLoading: '' });
				let { status, data } = res;
				if (status === 200) {
					approveTestimonialSuccess({
						id: data.data.id,
						isApproved: data.data.isApproved,
					});
				}
			})
			.catch((err) => {
				let { status } = err;
				_this.setState({ approvalLoading: '' });
				if (status === 401) {
					_this.props.logout();
				}
			});
	}

	render() {
		let { testimonials } = this.props;
		return (
			<React.Fragment>
				<List title="Testimonials" isAddIconNeeded={false}>
					{this.state.isLoading ? (
						<div>
							<Loader />
							<Loader />
							<Loader />
							<Loader />
							<Loader />
						</div>
					) : Object.keys(testimonials).length > 0 ? (
						Object.keys(testimonials).map((key) => {
							let { feedback, company, designation, name, isApproved } = testimonials[key];
							return (
								<Testimonials
									key={key}
									testimonialId={key}
									feedback={feedback}
									company={company}
									name={name}
									designation={designation}
									isApproved={isApproved}
									isLoading={this.state.approvalLoading === key ? true : false}
									approveHandler={(testimonialId) => {
										this.approveTestimonialHandler(testimonialId);
									}}
								/>
							);
						})
					) : null}
				</List>
			</React.Fragment>
		);
	}
}

function Testimonials(props) {
	let { testimonialId, approveHandler, company, designation, name, feedback, isApproved, isLoading } = props;
	return (
		<div className="dflex flexcolumn testimonialContainer">
			<div className="testimionialContent">
				<div className="dflex flexcolumn">
					<div className="testimonialFeedback">{feedback}</div>
					<div className="testimonialUser">
						<div className="dflex">
							<div className="testimonialChips">
								<Chip name={name} color="grey" />
							</div>
							<div className="testimonialChips">
								<Chip name={designation} color="grey" />
							</div>
							<div className="testimonialChips">
								<Chip name={company} color="grey" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="testimonialAction">
				{/* <div
					className="testimonialAction pointer"
					onClick={() => {
						approveHandler(testimonialId);
					}}> */}
				<div className="dflex justifyFend">
					<div
						className="pointer"
						onClick={() => {
							approveHandler(testimonialId);
						}}>
						<Chip
							isLoading={isLoading}
							name={isApproved ? 'Reject' : 'Approve'}
							color={isApproved ? 'red' : 'green'}
						/>
					</div>
				</div>
				{/* </div> */}
			</div>
		</div>
	);
}

function mapStateToProps(state, props) {
	return {
		testimonials: state.testimonials,
	};
}

export default connect(mapStateToProps, { logout, approveTestimonialSuccess, getTestimonialsSuccess })(
	TestimonialContainer
);
