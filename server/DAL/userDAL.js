const User = require('../models/userModel');

getUserByEmail = async (email) => {
	try {
		let user = await User.findOne({ email: email });
		if (user) {
			return {
				id: user._doc._id,
				email: user._doc.email,
				password: user._doc.password,
			};
		} else {
			return null;
		}
	} catch (err) {
		return { msg: 'DB_FETCH_FAILED' };
	}
};

getUserById = async (id) => {
	try {
		let user = await User.findById(id);
		if (user) {
			return {
				id: user._doc._id,
				email: user._doc.email,
				password: user._doc.password,
			};
		} else {
			return null;
		}
	} catch (err) {
		return { msg: 'DB_FETCH_FAILED' };
	}
};

updateUserPassword = async (passwordObj) => {
	let { id, newPassword } = passwordObj;
	try {
		let user = await User.findByIdAndUpdate(id, { password: newPassword }, { new: true });
		if (user) {
			return {
				id: user._doc._id,
				password: user._doc.password,
			};
		} else {
			return null;
		}
	} catch (err) {
		return { msg: 'PASSWORD_UPDATE_FAILED' };
	}
};

module.exports = {
	getUserByEmail,
	updateUserPassword,
	getUserById,
};
