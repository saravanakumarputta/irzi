const jwt = require('jsonwebtoken');

module.exports = checkAuth = async (req, res, next) => {
	try {
		let authHeader = req.headers.authorization;
		if (authHeader) {
			let token = authHeader.split(' ')[1];
			if (token) {
				let tokenObj = await jwt.verify(token, 'secret');
				req.body.userId = tokenObj.id;
				next();
			} else {
				res.status(401).json('AUTHENTICATION_TOKEN_NOT_FOUND');
			}
		} else {
			res.status(401).json('AUTHENTICATION_TOKEN_NOT_FOUND');
		}
	} catch (err) {
		if (typeof err === 'object') {
			if (err.hasOwnProperty('name')) {
				res.status(401).json({ erroMessage: 'INVALID_TOKEN' });
			}
		}
	}
};
