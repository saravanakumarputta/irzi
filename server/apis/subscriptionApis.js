const express = require('express');

const multer = require('multer');

const subscriptionService = require('../services/subscriptionService');

const checkAuth = require('../middlewares/checkAuthMiddleware');

const subscriptionAPIs = express.Router();

subscriptionAPIs.get('/', checkAuth, async (req, res) => {
	try {
		let emails = await subscriptionService.getSubscribedEmails();
		if (emails.status === 200) {
			res.status(200).json({ data: emails.data });
		} else if (emails.status === 204) {
			res.status(204).send();
		} else {
			res.status(emails.status).json({ errorMessage: emails.msg });
		}
	} catch (err) {
		res.status(500).json({ errorMessage: 'INTERNAL_SERVER_ERROR' });
	}
});

subscriptionAPIs.post('/', async (req, res) => {
	try {
		let newEmail = await subscriptionService.addEmailsToSubscriptionList(req.body.email);
		if (newEmail.status === 200) {
			res.status(200).json({ data: newEmail.data });
		} else if (newEmail.status === 204) {
			res.status(204).send();
		} else {
			res.status(newEmail.status).json({ errorMessage: newEmail.msg });
		}
	} catch (err) {
		res.status(500).json({ errorMessage: 'INTERNAL_SERVER_ERROR' });
	}
});

module.exports = subscriptionAPIs;
