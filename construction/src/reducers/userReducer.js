const intialState = {
	isUserLoggedIn: localStorage.getItem('token') ? true : false,
};

export default function userReducer(state = intialState, action) {
	switch (action.type) {
		case 'LOGIN_SUCCESS':
			localStorage.setItem('token', action.data.token);
			return Object.assign({}, state, { isUserLoggedIn: true });
		case 'LOGOUT_USER':
			localStorage.removeItem('token');
			return Object.assign({}, state, { isUserLoggedIn: false });
		case 'LOGIN_FAILED':
			return Object.assign({}, state, { errMessage: action.data.errMessage });
		case 'CHANGE_PASSWORD_FAILED':
			return Object.assign({}, state, { errMessage: 'Check your old password' });
		case 'CHANGE_PASSWORD_SUCCESS':
		case 'HIDE_POPUP':
			return Object.assign({}, state, { errMessage: '' });
		default:
			return state;
	}
}
