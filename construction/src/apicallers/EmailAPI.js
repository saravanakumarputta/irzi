import callAPI from '../helpers/APIRequest';

export function getEmailSubscribers() {
	return callAPI({ url: '/api/subscriptions', headers: {}, body: {}, method: 'GET' });
}
