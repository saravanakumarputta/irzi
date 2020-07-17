const userDAL = require('../DAL/userDAL');

const jwt = require('jsonwebtoken');

async function signIn(userObj) {
	try {
		let { email, password } = userObj;
		let user = await userDAL.getUserByEmail(email);
		if (user) {
			if (user.password === password) {
				//{'expiresIn': '1h'}
				let token = await jwt.sign({ id: user.id }, 'secret', { expiresIn: '11h' });
				return { status: 200, data: token };
			} else {
				return { status: 401, msg: 'INVALID_PASSWORD' };
			}
		} else {
			return { status: 401, msg: 'INVALID_USER_NAME' };
		}
	} catch (err) {
		return { status: 500 };
	}
}

async function changePassword(passwordObj) {
	try {
		let { id, oldPassword, newPassword } = passwordObj;
		let user = await userDAL.getUserById(id);
		if (user) {
			if (user.password === oldPassword) {
				let updatedPassword = await userDAL.updateUserPassword({ id, newPassword });
				if (updatedPassword) {
					return { status: 200, data: {} };
				} else {
					return { status: 500, msg: 'USER_NOT_FOUND' };
				}
			} else {
				return { status: 401, msg: 'INVALID_PASSWORD' };
			}
		} else {
			return { status: 401, msg: 'INVALID_USER' };
		}
	} catch (err) {
		return { status: 500 };
	}
}

module.exports = {
	signIn,
	changePassword,
};
