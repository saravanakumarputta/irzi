const Project = require('../models/projectsModel');

getProjects = async () => {
	try {
		let projects = await Project.find();
		return projects.reduce((projectsList, project) => {
			projectsList.push({
				id: project._doc._id,
				title: project._doc.title,
				section1: project._doc.section1,
				section2: project._doc.section2,
				images: project._doc.images,
			});
			return projectsList;
		}, []);
	} catch (err) {
		throw { msg: 'PROJECTS_FETCH_FAILED' };
	}
};

getProject = async (projectId) => {
	try {
		let project = await Project.findById(projectId);
		return project;
	} catch (err) {
		throw { msg: 'PROJECT_FETCH_FAILED' };
	}
};

addProject = async (projectObj) => {
	try {
		let newProject = new Project(projectObj);
		let project = await newProject.save();
		if (project) {
			return {
				id: project._doc._id,
				title: project._doc.title,
				section1: project._doc.section1,
				section2: project._doc.section2,
				images: project._doc.images,
			};
		} else {
			return null;
		}
	} catch (err) {
		throw { msg: 'ADD_PROJECT_FAILED' };
	}
};

updateProject = async (id, projectObj) => {
	try {
		let updatedProject = await Project.findByIdAndUpdate(id, projectObj, { new: true });
		if (updatedProject) {
			return {
				id: updatedProject._doc._id,
				title: updatedProject._doc.title,
				section1: updatedProject._doc.section1,
				section2: updatedProject._doc.section2,
				images: updatedProject._doc.images,
			};
		} else {
			return null;
		}
	} catch (err) {
		throw { msg: 'UPDATE_PROJECT_FAILED' };
	}
};

deleteProject = async (id) => {
	try {
		let isProjectDeleted = await Project.findByIdAndDelete(id);
		if (isProjectDeleted) {
			return {
				id: isProjectDeleted._doc._id,
				title: isProjectDeleted._doc.title,
				section1: isProjectDeleted._doc.section1,
				section2: isProjectDeleted._doc.section2,
				image: isProjectDeleted._doc.image,
			};
		} else {
			return null;
		}
	} catch (err) {
		throw { msg: 'DELETE_PROJECT_FAILED' };
	}
};

module.exports = {
	getProjects,
	getProject,
	addProject,
	updateProject,
	deleteProject,
};
