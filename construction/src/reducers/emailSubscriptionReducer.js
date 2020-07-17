export default function testimonialReducer(state = [], action) {
	switch (action.type) {
		case 'SUBSCRIBED_EMAILS_SUCCESS':
			return [...new Set([...state, ...action.data])];
		default:
			return state;
	}
}
