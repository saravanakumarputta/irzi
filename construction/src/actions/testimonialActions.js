import { normalize } from '../helpers/utils';

export function approveTestimonialSuccess(data) {
	return {
		type: 'APPROVE_TESTIMONIAL_SUCCESS',
		data: data,
	};
}

export function getTestimonialsSuccess(data) {
	return {
		type: 'GET_TESTIMONIALS_SUCCESS',
		data: normalize(data, 'id'),
	};
}
