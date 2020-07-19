import callAPI from '../helpers/APIRequest';

export function sendMessage(data) {
	return callAPI({ url: '/api/contact', headers: {}, body: data, method: 'POST' });
}
