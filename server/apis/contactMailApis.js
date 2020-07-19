const express = require('express');
const nodemailer = require('nodemailer');

const contactMailAPIs = express.Router();

contactMailAPIs.post('/', (req, res) => {
	let transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'saravanakumar.2701@gmail.com',
			pass: '9597927733',
		},
	});

	let mailOptions = {
		from: 'saravanakumar.2701@gmail.com',
		to: 'saravanakumar.2701@gmail.com',
		subject: 'Sending Email using Node.js',
		text: 'That was easy!',
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
		}
	});
});

module.exports = contactMailAPIs;
