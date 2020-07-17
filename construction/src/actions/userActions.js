export function loginSuccess(data) {
	return {
		type: 'LOGIN_SUCCESS',
		data,
	};
}

export function logout() {
	localStorage.removeItem('token');
	return {
		type: 'LOGOUT_USER',
	};
}

export function changePassword(oldPassword, newPassword) {
	// return (dispatch) => {
	// 	fetch('/user/changepassword', {
	// 		method: 'PATCH',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 			authorization: `Bearer ${localStorage.getItem('token')}`,
	// 		},
	// 		body: JSON.stringify({
	// 			oldPassword,
	// 			newPassword,
	// 		}),
	// 	})
	// 		.then((res) => {
	// 			console.log(res);
	// 			if (res.ok) {
	// 				return res.json();
	// 			} else {
	// 				throw 'PASSWORD UPDATE FAILED';
	// 			}
	// 		})
	// 		.then((res) => {
	// 			dispatch({
	// 				type: 'HIDE_POPUP',
	// 			});
	// 			dispatch({
	// 				type: 'CHANGE_PASSWORD_SUCCESS',
	// 			});
	// 		})
	// 		.catch((err) => {
	// 			dispatch({
	// 				type: 'CHANGE_PASSWORD_FAILED',
	// 				data: err,
	// 			});
	// 		});
	// };
}
