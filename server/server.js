const mongoose = require('mongoose');
require('dotenv').config();

const app = require('./app');

const PORT = process.env.PORT || 3000;

async function startServer() {
	try {
		console.log(process.env.DB_ENDPOINT);
		await mongoose.connect('mongodb://localhost:27017/website', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
		});
		app.listen(PORT, (err) => {
			err ? console.log('Server Start Failed') : console.log('Server Started!!!');
		});
	} catch (err) {
		err ? console.log('DB connect failed') : null;
	}
}

startServer();
