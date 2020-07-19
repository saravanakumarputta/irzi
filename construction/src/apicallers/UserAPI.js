import callAPI from '../helpers/APIRequest';

export function loginUser(email, password) {
	return callAPI({
		url: '/api/user/signin',
		headers: {
			'Content-Type': 'application/json',
		},
		body: { email, password },
		method: 'POST',
		isJSONPaylod: true,
	});
}

export function changePassword(oldPassword, newPassword) {
	return callAPI({
		url: '/api/user/changepassword',
		headers: {
			'Content-Type': 'application/json',
		},
		body: { oldPassword, newPassword },
		method: 'PATCH',
		isJSONPaylod: true,
	});
}
