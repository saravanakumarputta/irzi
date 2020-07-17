const subscriptionDAL = require('../DAL/subscriptionDAL');

async function getSubscribedEmails() {
	try {
		let emails = await subscriptionDAL.getSubscribedEmails();
		if (Array.isArray(emails)) {
			return emails.length > 0 ? { status: 200, data: emails } : { status: 204 };
		} else {
			return { status: 204 };
		}
	} catch (err) {
		return { status: 500, msg: 'INTERNAL_SERVER_ERROR' };
	}
}

async function addEmailsToSubscriptionList(email) {
	try {
		let newEmail = await subscriptionDAL.addEmailToSubscriptionList(email);
		return newEmail ? { status: 200, data: newEmail } : { status: 500, msg: 'INTERNAL_SERVER_ERROR' };
	} catch (err) {
		return { status: 500, msg: 'INTERNAL_SERVER_ERROR' };
	}
}

module.exports = {
	getSubscribedEmails,
	addEmailsToSubscriptionList,
};
