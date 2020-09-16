const { exec } = require('child_process');
const fs = require('fs-extra');
const path = require('path');

console.log('Client code is being built....');
const clientBuildCmdString = 'cd construction && npm run build';
exec(clientBuildCmdString, (err, stdout, stderr) => {
	if (err) {
		console.log('Error in building');
		return;
	}
	console.log('Clinet Build Success!!');
	console.log('Copying the Client build to server');

	fs.copySync(path.join(__dirname, 'construction', 'build'), path.join(__dirname, 'server', 'public'));

	console.log('Copying Server files');
	if (fs.existsSync('build')) {
		fs.removeSync('build');
	}
	fs.mkdirSync('build');
	fs.copySync(path.join(__dirname, 'server/apis'), path.join(__dirname, 'build/apis'));
	fs.copySync(path.join(__dirname, 'server/DAL'), path.join(__dirname, 'build/DAL'));
	fs.copySync(path.join(__dirname, 'server/middlewares'), path.join(__dirname, 'build/middlewares'));
	fs.copySync(path.join(__dirname, 'server/models'), path.join(__dirname, 'build/models'));
	fs.copySync(path.join(__dirname, 'server/public'), path.join(__dirname, 'build/public'));
	fs.copySync(path.join(__dirname, 'server/services'), path.join(__dirname, 'build/services'));
	// fs.copySync(path.join(__dirname, 'server/.env'), path.join(__dirname, 'build/.env'));
	fs.copySync(path.join(__dirname, 'server/package.json'), path.join(__dirname, 'build/package.json'));
	fs.copySync(path.join(__dirname, 'server/server.js'), path.join(__dirname, 'build/server.js'));
	fs.copySync(path.join(__dirname, 'server/app.js'), path.join(__dirname, 'build/app.js'));
});
