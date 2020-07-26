import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

import TextBox from '../../common/textbox/TextBox';
import TextArea from '../../common/textarea/TextArea';

import { addTestimonial } from '../../../apicallers/TestimonailsAPI';

import logo from '../../../images/logo.png';

export default function Header() {
	let [isNavbarVisible, setNavBarVisible] = React.useState(false);
	let [isReviewFormVisible, setReviewFormVisible] = React.useState(false);
	let [fullName, setFullName] = React.useState('');
	let [fullNameErrMsg, setFullNameErrMsg] = React.useState('');
	let [company, setCompany] = React.useState('');
	let [companyErrMsg, setCompanyErrMsg] = React.useState('');
	let [review, setReview] = React.useState('');
	let [reviewErrMsg, setReviewErrMsg] = React.useState('');
	let [designation, setDesignation] = React.useState('');
	let [designationErrMsg, setDesignationErrMsg] = React.useState('');
	let [submittedMsg, setSubmittedMsg] = React.useState('');

	return (
		<div className="uHeaderContainer bg-light">
			<div className="sectionContainer mauto">
				<div className="dflex alignBetween alignVertical uHeaderWrapper">
					<div className="logo">
						<img src={logo} alt="IrZi" />
					</div>
					<div
						className="menu-icon"
						onClick={() => {
							setNavBarVisible(!isNavbarVisible);
						}}>
						<div className="menu-bar bar1"></div>
						<div className="menu-bar bar2"></div>
						<div className="menu-bar bar3"></div>
					</div>
					<div className="reMenuContainer" style={{ display: isNavbarVisible ? 'block' : 'none' }}>
						<div className="dflex flexcolumn">
							<NavLink
								exact
								to="/"
								activeClassName="reMenuActive"
								className="reMenuItems"
								onClick={() => {
									setNavBarVisible(false);
								}}>
								Home
							</NavLink>
							<NavLink
								to="/projects"
								activeClassName="reMenuActive"
								className="reMenuItems"
								onClick={() => {
									setNavBarVisible(false);
								}}>
								Projects
							</NavLink>
							<NavLink
								to="/testimonials"
								activeClassName="reMenuActive"
								className="reMenuItems"
								onClick={() => {
									setNavBarVisible(false);
								}}>
								Testimonials
							</NavLink>
							<NavLink
								to="/contact"
								activeClassName="reMenuActive"
								className="reMenuItems"
								onClick={() => {
									setNavBarVisible(false);
								}}>
								Contact Us
							</NavLink>
						</div>
					</div>
					<div className="dflex wid_70 alignBetween headerDetail">
						<div className="headerItems">
							<div className="quick-contact-icons dflex fwrap alignVertical">
								<div className="icon align-self-start">
									<span className="myicon-placeholder"></span>
								</div>
								<div className="text">
									<span className="h4 d-block">Selangor</span>
									<span className="caption-text">11-2 Jalan Impian Perdana</span>
								</div>
							</div>
						</div>
						<div className="headerItems">
							<div className="quick-contact-icons dflex fwrap alignVertical">
								<div className="icon align-self-start">
									<span className="myicon-call"></span>
								</div>
								<div className="text">
									<span className="h4 d-block">03 8740 9774</span>
									<span className="caption-text">Fax: 03 8740 9784</span>
								</div>
							</div>
						</div>
						<div className="headerItems">
							<div className="quick-contact-icons dflex fwrap alignVertical">
								<div className="icon align-self-start">
									<span className="myicon-email"></span>
								</div>
								<div className="text">
									<span className="h4 d-block">mail@irzi.com</span>
									<span className="caption-text">43000, Kajang</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className={isReviewFormVisible ? 'reviewFormOpen' : 'reviewForm'}>
					<div className="reviewFormFreeze dflex">
						<div className="reviewFormHolder">
							<div className="reviewFormTitleContainer">
								<h3 className="reviewFormTitle">Write Review</h3>
							</div>
							<div className="reviewFormControls">
								<TextBox
									label="Full Name"
									value={fullName}
									changeHandler={(fullName) => {
										setFullName(fullName);
										if (fullName.length <= 0) {
											setFullNameErrMsg('Full Name is required');
										} else {
											setFullNameErrMsg('');
										}
									}}
									errMsg={fullNameErrMsg}
								/>

								<TextBox
									label="Company"
									value={company}
									changeHandler={(company) => {
										setCompany(company);
										if (company.length <= 0) {
											setCompanyErrMsg('Company is required');
										} else {
											setCompanyErrMsg('');
										}
									}}
									errMsg={companyErrMsg}
								/>

								<TextBox
									label="Designation"
									value={designation}
									changeHandler={(designation) => {
										setDesignation(designation);
										if (designation.length <= 0) {
											setDesignationErrMsg('Designation is required');
										} else {
											setDesignationErrMsg('');
										}
									}}
									errMsg={designationErrMsg}
								/>

								<TextArea
									label="Review"
									rows={5}
									value={review}
									changeHandler={(review) => {
										setReview(review);
										if (review.length <= 100) {
											setReviewErrMsg('Designation is required and must be of 100 characters');
										} else {
											setReviewErrMsg('');
										}
									}}
									errMsg={reviewErrMsg}
								/>
								<span
									className="formBtn"
									onClick={() => {
										if (fullName.length <= 0) {
											setFullNameErrMsg('Full Name is required');
										}
										if (company.length <= 0) {
											setCompanyErrMsg('Company is required');
										}
										if (designation.length <= 0) {
											setDesignationErrMsg('Designation is required');
										}
										if (review.length <= 100) {
											setReviewErrMsg('Review is required');
										}

										if (fullName && company && designation && review) {
											addTestimonial({
												name: fullName,
												company,
												designation,
												feedback: review,
											})
												.then((res) => {
													if (res.status === 200) {
														setSubmittedMsg('Feedback Review Sumitted Successfully!');
														setTimeout(() => {
															setSubmittedMsg('');
															setFullName('');
															setCompany('');
															setDesignation('');
															setReview('');
														}, 3000);
													}
												})
												.catch((err) => {
													setSubmittedMsg(err.msg);
												});
										}
									}}>
									Submit
								</span>
								<span className="resultMsg">{submittedMsg}</span>
							</div>
							<div
								className="clsoseIcon"
								onClick={() => {
									setReviewFormVisible(false);
								}}>
								<i className=""></i>
							</div>
						</div>
					</div>
				</div>

				<div
					className="review_icn"
					onClick={() => {
						setReviewFormVisible(!isReviewFormVisible);
					}}>
					<i></i>
				</div>
			</div>
		</div>
	);
}
