export default function projectsReducer(state = {}, action) {
	switch (action.type) {
		case 'GET_PROJECTS_SUCCESS':
			return Object.assign({}, state, action.data);
		case 'ADD_PROJECT_SUCCESS':
			return Object.assign({}, state, { [action.data.id]: action.data });
		case 'UPDATE_PROJECT_SUCCESS':
			return Object.assign({}, state, { [action.data.id]: action.data.data });
		case 'DELETE_PROJECT_SUCCESS':
			delete state[action.data];
			return Object.assign({}, state);
		default:
			return state;
	}
}
