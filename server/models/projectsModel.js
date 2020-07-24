const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
	title: {
		type: String,
		required: true,
		trim: true,
	},
	section1: {
		type: String,
		required: true,
		trim: true,
	},
	section2: {
		type: String,
		required: true,
		trim: true,
	},
	type: {
		type: String,
		required: true,
		trim: true,
	},
	location: {
		type: String,
		required: true,
		trim: true,
	},
	client: {
		type: String,
		required: true,
		trim: true,
	},
	images: [
		{
			type: String,
		},
	],
});

module.exports = mongoose.model('Project', projectSchema);
