const Testimonial = require('../models/testimonialModel');

getTestimonials = async (filterObj) => {
	try {
		let testimonials = await Testimonial.find({});
		return testimonials.reduce((testimonialList, testimonial) => {
			testimonialList.push({
				id: testimonial._doc._id,
				name: testimonial._doc.name,
				company: testimonial._doc.company,
				designation: testimonial._doc.designation,
				feedback: testimonial._doc.feedback,
				isApproved: testimonial._doc.isApproved,
			});
			return testimonialList;
		}, []);
	} catch (error) {
		return {};
	}
};

approveTestimonial = async (testimonialObj) => {
	try {
		let { id, approvalStatus } = testimonialObj;
		let testimonial = await Testimonial.findByIdAndUpdate(id, { isApproved: approvalStatus }, { new: true });
		if (testimonial) {
			return {
				id: testimonial._doc._id,
				isApproved: testimonial._doc.isApproved,
			};
		} else {
			return null;
		}
	} catch (err) {
		return null;
	}
};

addTestimonial = async (testimonialObj) => {
	try {
		const newTestimonial = new Testimonial(testimonialObj);
		let testimonial = await newTestimonial.save();
		if (testimonial) {
			return {
				id: testimonial._doc._id,
				name: testimonial._doc.name,
				designation: testimonial._doc.designation,
				company: testimonial._doc.company,
				feedback: testimonial._doc.feedback,
			};
		} else {
			return null;
		}
	} catch (err) {
		return null;
	}
};

module.exports = {
	getTestimonials,
	approveTestimonial,
	addTestimonial,
};
