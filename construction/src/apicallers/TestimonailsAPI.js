import callAPI from '../helpers/APIRequest';

export function getTestimonials() {
	return callAPI({ url: '/api/testimonials', headers: {}, body: {}, method: 'GET' });
}

export function approveTestimonial(testimonialId, data) {
	return callAPI({
		url: `/api/testimonials/${testimonialId}`,
		headers: {
			'Content-Type': 'application/json',
		},
		body: data,
		method: 'patch',
		isJSONPayload: true,
	});
}

export function addTestimonial(testimonialObj) {
	return callAPI({
		url: '/api/testimonials',
		headers: {
			'Content-Type': 'application/json',
		},
		body: testimonialObj,
		method: 'post',
		isJSONPayload: true,
	});
}
