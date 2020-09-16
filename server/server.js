const mongoose = require('mongoose');

const app = require('./app');

const PORT = process.env.PORT || 3000;

async function startServer() {
	try {
		await mongoose.connect(
			'mongodb+srv://sana:admin@main-cluster-yzh55.mongodb.net/test?retryWrites=true&w=majority',
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useFindAndModify: false,
			}
		);
		app.listen(PORT, (err) => {
			err ? console.log('Server Start Failed') : console.log('Server Started!!!');
		});
	} catch (err) {
		err ? console.log('DB connect failed') : null;
	}
}

startServer();
