import callAPI from '../helpers/APIRequest';

export function getEmailSubscribers() {
	return callAPI({ url: '/api/subscriptions', headers: {}, body: {}, method: 'GET' });
}

export function addEmailTosubscriptionList(email) {
	return callAPI({
		url: '/api/subscriptions',
		headers: { 'Content-Type': 'application/json' },
		body: { email: email },
		method: 'POST',
	});
}
