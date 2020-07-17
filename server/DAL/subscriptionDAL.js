const Subscription = require('../models/subscriptionModel');

getSubscribedEmails = async () => {
	try {
		let emails = await Subscription.find();
		return emails.reduce((emailsList, email) => {
			emailsList.push(email._doc.email);
			return emailsList;
		}, []);
	} catch (err) {
		throw { msg: 'EMAILS_FETCH_FAILED' };
	}
};

addEmailToSubscriptionList = async (email) => {
	try {
		let newEmail = new Subscription({ email });
		let addedEmail = await newEmail.save();
		if (addedEmail) {
			return {
				email: addedEmail._doc.email,
			};
		} else {
			return null;
		}
	} catch (err) {
		throw { msg: 'EMAIL_SUBSCRIPTION_FAILED' };
	}
};

module.exports = {
	getSubscribedEmails,
	addEmailToSubscriptionList,
};
