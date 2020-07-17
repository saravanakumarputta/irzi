const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testimonialSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	company: {
		type: String,
		required: true,
		trim: true,
	},
	designation: {
		type: String,
		required: true,
		trim: true,
	},
	feedback: {
		type: String,
		required: true,
		trim: true,
	},
	isApproved: {
		type: Boolean,
		default: false,
	},
});

module.exports = mongoose.model('Testimonial', testimonialSchema);
