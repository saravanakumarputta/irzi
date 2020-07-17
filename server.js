const mongoose = require('mongoose');

const app = require('./server/app');

const PORT = process.env.PORT || 3000;

async function startServer() {
	try {
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

// mongodb+srv://sana:admin@main-cluster-yzh55.mongodb.net/test?retryWrites=true&w=majority',
