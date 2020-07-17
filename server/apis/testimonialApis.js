const express = require('express');
const testimonialService = require('../services/testimonialService');
const checkAuth = require('../middlewares/checkAuthMiddleware');

const testimonialAPIs = express.Router();

testimonialAPIs.get('/', checkAuth, async (req, res) => {
	try {
		let queryParams = req.query;
		let testimonials = await testimonialService.getTestimonals(queryParams, req.body.userId);
		if (testimonials.status === 200) {
			setTimeout(() => {
				res.status(200).json({ data: testimonials.data });
			}, 3000);
		} else if (testimonials.status === 204) {
			res.status(204).send();
		} else {
			res.status(testimonials.status).json({ errorMessage: testimonials.msg });
		}
	} catch (err) {
		res.status(500).json({ errorMessage: 'INTERNAL_SERVER_ERROR' });
	}
});

testimonialAPIs.post('/', async (req, res) => {
	try {
		let testimonial = await testimonialService.addTestimonial(req.body);
		if (testimonial.status === 200) {
			res.status(200).json({ data: testimonial.data });
		} else if (testimonial.status === 204) {
			res.status(204).send();
		} else {
			res.status(testimonial.status).json({ errorMessage: testimonial.msg });
		}
	} catch (err) {
		res.status(500).json({ errorMessage: 'INTERNAL_SERVER_ERROR' });
	}
});

testimonialAPIs.patch('/:id', checkAuth, async (req, res) => {
	try {
		let { userId, approvalStatus } = req.body;
		let id = req.params.id;
		let testimonial = await testimonialService.approveTestimonial({ id, userId, approvalStatus });
		if (testimonial.status === 200) {
			setTimeout(() => {
				res.status(200).json({ data: testimonial.data });
			}, 3000);
		} else {
			res.status(testimonial.status).json({ errorMessage: testimonial.msg });
		}
	} catch (err) {
		res.status(500).json({ errorMessage: 'INTERNAL_SERVER_ERROR' });
	}
});

module.exports = testimonialAPIs;
