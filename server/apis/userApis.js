const express = require('express');
const userService = require('../services/userService');
const checkAuth = require('../middlewares/checkAuthMiddleware');

const userAPIs = express.Router();

userAPIs.post('/signin', async (req, res) => {
	try {
		let { email, password } = req.body;
		let userObj = await userService.signIn({ email, password });
		if (userObj.status === 200) {
			res.status(200).json({ token: userObj.data });
		} else if (userObj.status === 204) {
			res.status(204).send();
		} else {
			res.status(userObj.status).json({ errorMessage: userObj.msg });
		}
	} catch (err) {
		res.status(500).json({ errorMessage: 'INTERNAL_SERVER_ERROR' });
	}
});

userAPIs.patch('/changepassword', checkAuth, async (req, res) => {
	let userId = req.body.userId;
	let { oldPassword, newPassword } = req.body;
	try {
		let userObj = await userService.changePassword({ id: userId, oldPassword, newPassword });
		if (userObj.status === 200) {
			res.status(200).json({});
		} else {
			res.status(userObj.status).json({ errorMessage: userObj.msg });
		}
	} catch (err) {
		res.status(500).json({ errorMessage: 'INTERNAL_SERVER_ERROR' });
	}
});

module.exports = userAPIs;
