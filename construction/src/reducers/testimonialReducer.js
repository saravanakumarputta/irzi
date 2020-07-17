export default function testimonialReducer(state = {}, action) {
	switch (action.type) {
		case 'APPROVE_TESTIMONIAL_SUCCESS':
			var testionialInfo = state[action.data.id];
			return Object.assign({}, state, {
				[action.data.id]: Object.assign({}, testionialInfo, { isApproved: action.data.isApproved }),
			});
		case 'GET_TESTIMONIALS_SUCCESS':
			return Object.assign({}, state, action.data);
		default:
			return state;
	}
}
