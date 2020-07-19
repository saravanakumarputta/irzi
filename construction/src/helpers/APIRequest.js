import axios from 'axios';

export default function callAPI(reqObj) {
	return new Promise((yeah, nah) => {
		let { headers, body, url, method, isJSONPayload } = reqObj;
		if (localStorage.getItem('token')) {
			headers = Object.assign({}, headers, { Authorization: `Bearer ${localStorage.getItem('token')}` });
		}

		axios({
			url,
			headers: headers,
			data: isJSONPayload ? JSON.stringify(body) : body,
			method,
		})
			.then((response) => {
				let { status, data } = response;
				yeah({ status, data });
			})
			.catch((err) => {
				if (err.response) {
					let { status, data } = err.response;
					nah({ status, data });
				}
			});
	});
}
