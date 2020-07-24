const express = require('express');

const multer = require('multer');

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './server/uploads/');
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	},
});

const fileFilter = (req, file, cb) => {
	if (file.mimetype == 'image/png' || file.mimetype == 'image/jpeg') {
		cb(null, true);
	} else {
		cb(null, false);
	}
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

const projectService = require('../services/projectService');

const checkAuth = require('../middlewares/checkAuthMiddleware');

const projectAPIs = express.Router();

projectAPIs.get('/', async (req, res) => {
	try {
		let projects = await projectService.getProjects();
		if (projects.status === 200) {
			res.status(200).json({ data: projects.data });
		} else if (projects.status === 204) {
			res.status(204).send();
		} else {
			res.status(projects.status).json({ errorMessage: projects.msg });
		}
	} catch (err) {
		res.status(500).json({ errorMessage: 'INTERNAL_SERVER_ERROR' });
	}
});

projectAPIs.get('/:id', async (req, res) => {
	try {
		let projectId = req.params.id;
		let project = await projectService.getProject(projectId);
		if (project.status === 200) {
			res.status(200).json({ data: project.data });
		} else if (project.status == 204) {
			res.status(204).send();
		} else {
			res.status(project.status).json({ errorMessage: project.msg });
		}
	} catch (err) {
		res.status(500).json({ errorMessage: 'INTERNAL_SERVER_ERROR' });
	}
});

projectAPIs.post('/', checkAuth, upload.array('images'), async (req, res) => {
	try {
		req.body.images = req.files.reduce((paths, file) => {
			paths.push(`images/${file.originalname}`);
			return paths;
		}, []);
		let newProject = await projectService.addProject(req.body);
		if (newProject.status === 200) {
			res.status(200).json({ data: newProject.data });
		} else if (newProject.status === 204) {
			res.status(204).send();
		} else {
			res.status(newProject.status).json({ errorMessage: newProject.msg });
		}
	} catch (err) {
		res.status(500).json({ errorMessage: 'INTERNAL_SERVER_ERROR' });
	}
});

projectAPIs.patch('/:id', checkAuth, async (req, res) => {
	try {
		let updatedProject = await projectService.updateProject(req.params.id, req.body);
		if (updatedProject.status === 200) {
			res.status(200).json({ data: updatedProject.data });
		} else if (updatedProject.status === 204) {
			res.status(204).send();
		} else {
			res.status(updatedProject.status).json({ errorMessage: updatedProject.msg });
		}
	} catch (err) {
		res.status(500).json({ errorMessage: 'INTERNAL_SERVER_ERROR' });
	}
});

projectAPIs.delete('/:id', checkAuth, async (req, res) => {
	try {
		let isDeleted = await projectService.deleteProject(req.params.id);
		if (isDeleted.status === 200) {
			res.status(200).json({ data: {} });
		} else if (isDeleted.status === 204) {
			res.status(204).send();
		} else {
			res.status(isDeleted.status).json({ errorMessage: isDeleted.msg });
		}
	} catch (err) {
		res.status(500).json({ errorMessage: 'INTERNAL_SERVER_ERROR' });
	}
});

module.exports = projectAPIs;
