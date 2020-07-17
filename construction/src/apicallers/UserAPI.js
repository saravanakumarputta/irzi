import callAPI from '../helpers/APIRequest';

export function loginUser(email, password) {
	return callAPI({
		url: '/user/signin',
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
		url: '/user/changepassword',
		headers: {
			'Content-Type': 'application/json',
		},
		body: { oldPassword, newPassword },
		method: 'PATCH',
		isJSONPaylod: true,
	});
}
