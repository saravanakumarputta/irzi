const testimonialDAL = require('../DAL/testimonialDAL');
const userDAL = require('../DAL/userDAL');

async function getTestimonals(filterObj, userId) {
	try {
		// let userObj = await userDAL.getUserById(userId);
		// if (userObj) {
		let testimonials = await testimonialDAL.getTestimonials(filterObj);
		if (Array.isArray(testimonials)) {
			return testimonials.length > 0 ? { status: 200, data: testimonials } : { status: 204 };
		} else {
			return { status: 204 };
		}
		// } else {
		// 	return { status: 401, msg: 'NO_ACCESS' };
		// }
	} catch (err) {
		return { status: 500, msg: 'TESTIMOANIALS_FETCH_FAILED' };
	}
}

function validateApprovalTestimonialObj(testimonialObj) {
	if (testimonialObj.hasOwnProperty('id')) {
		if (!testimonialObj.id) {
			return 'id_PARAM_NOT_VALID';
		}
	} else {
		return 'id_PARAM_MISSING';
	}

	if (testimonialObj.hasOwnProperty('userId')) {
		if (!testimonialObj.userId) {
			return 'userId_PARAM_NOT_VALID';
		}
	} else {
		return 'userId_PARAM_MISSING';
	}

	if (testimonialObj.hasOwnProperty('approvalStatus')) {
		if (typeof testimonialObj.approvalStatus != 'boolean') {
			return 'approvalStatus_PARAM_NOT_VALID';
		}
	} else {
		return 'approvalStatus_PARAM_MISSING';
	}

	return 'VALIDATION_SUCCESS';
}

async function approveTestimonial(testimonialObj) {
	let validationMsg = validateApprovalTestimonialObj(testimonialObj);
	if (validationMsg == 'VALIDATION_SUCCESS') {
		try {
			let { userId, approvalStatus, id } = testimonialObj;
			let user = await userDAL.getUserById(userId);
			if (user) {
				let testimonial = await testimonialDAL.approveTestimonial({ approvalStatus, id });
				return testimonial ? { status: 200, data: testimonial } : { status: 500, msg: 'INTERNAL_SERVER_ERROR' };
			} else {
				return { status: 401, msg: 'NO_ACCESS' };
			}
		} catch (err) {
			return { status: 500, msg: 'APPROVE_TESTIMONIAL_FAILED' };
		}
	} else {
		return { status: 422, msg: validationMsg };
	}
}

function validateTestimonialObj(testimonial) {
	if (testimonial.hasOwnProperty('name')) {
		if (!testimonial.name) {
			return 'NAME_PARAM_NOT_VALID';
		}
	} else {
		return 'NAME_PARAM_MISSING';
	}

	if (testimonial.hasOwnProperty('designation')) {
		if (!testimonial.designation) {
			return 'DESIGNATION_PARAM_NOT_VALID';
		}
	} else {
		return 'DESIGNATION_PARAM_MISSING';
	}

	if (testimonial.hasOwnProperty('company')) {
		if (!testimonial.company) {
			return 'COMPANY_PARAM_NOT_VALID';
		}
	} else {
		return 'COMPANY_PARAM_MISSING';
	}

	if (testimonial.hasOwnProperty('feedback')) {
		if (!testimonial.feedback) {
			return 'FEEDBACK_PARAM_NOT_VALID';
		}
	} else {
		return 'FEEDBACK_PARAM_MISSING';
	}

	return 'VALIDATION_SUCCESS';
}

async function addTestimonial(testimonialObj) {
	try {
		let isValidTestimonial = validateTestimonialObj(testimonialObj);
		if (isValidTestimonial == 'VALIDATION_SUCCESS') {
			let testimonial = await testimonialDAL.addTestimonial(testimonialObj);
			if (testimonial) {
				return { status: 200, data: testimonial };
			} else {
				return { status: 500, msg: 'INTERNAL_SERVER_ERROR' };
			}
		} else {
			return {
				status: 422,
				msg: isValidTestimonial,
			};
		}
	} catch (err) {
		return {
			status: 500,
			msg: 'INTERNAL_SERVER_ERROR',
		};
	}
}

module.exports = {
	getTestimonals,
	approveTestimonial,
	addTestimonial,
};
