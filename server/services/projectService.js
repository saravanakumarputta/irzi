const projectDAL = require('../DAL/projectDAL');

async function getProjects() {
	try {
		let projects = await projectDAL.getProjects();
		if (Array.isArray(projects)) {
			return projects.length > 0 ? { status: 200, data: projects } : { status: 204 };
		} else {
			return { status: 204 };
		}
	} catch (err) {
		return { status: 500, msg: 'INTERNAL_SERVER_ERROR' };
	}
}

async function getProject(projectId) {
	try {
		let project = await projectDAL.getProject(projectId);
		return project ? { status: 200, data: project } : { status: 204 };
	} catch (err) {
		return { status: 500, msg: 'INTERNAL_SERVER_ERROR' };
	}
}

function validateProjectPaylod(projectObj) {
	if (projectObj.hasOwnProperty('title')) {
		if (!projectObj.title) {
			return 'TITLE_PARAM_NOT_VALID';
		}
	} else {
		return 'TITLE_PARAM_MISSING';
	}

	if (projectObj.hasOwnProperty('section1')) {
		if (!projectObj.section1) {
			return 'section1_PARAM_NOT_VALID';
		}
	} else {
		return 'section1_PARAM_MISSING';
	}

	if (projectObj.hasOwnProperty('section2')) {
		if (!projectObj.section2) {
			return 'section2_PARAM_NOT_VALID';
		}
	} else {
		return 'section2_PARAM_MISSING';
	}

	if (!projectObj.hasOwnProperty('images')) {
		return 'images_PARAM_MISSING';
	}

	return 'VALIDATION_SUCCESS';
}

async function addProject(projectObj) {
	try {
		let projectValidationMsg = validateProjectPaylod({ ...projectObj });
		if (projectValidationMsg === 'VALIDATION_SUCCESS') {
			let project = await projectDAL.addProject(projectObj);
			return project ? { status: 200, data: project } : { status: 500, msg: 'INTERNAL_SERVER_ERROR' };
		} else {
			return { status: 422, msg: projectValidationMsg };
		}
	} catch (err) {
		return { status: 500, msg: 'INTERNAL_SERVER_ERROR' };
	}
}

async function updateProject(id, projectObj) {
	try {
		let updatedProject = await projectDAL.updateProject(id, projectObj);
		return updatedProject ? { status: 200, data: updatedProject } : { status: 500, msg: 'INTERNAL_SERVER_ERROR' };
	} catch (err) {
		return { status: 500, msg: 'INTERNAL_SERVER_ERROR' };
	}
}

async function deleteProject(projectId) {
	try {
		let project = await projectDAL.deleteProject(projectId);
		if (project) {
			return { status: 200, data: {} };
		} else {
			return { status: 422, msg: 'INVALID_PROJECT_ID' };
		}
	} catch (err) {
		return { status: 500, msg: 'INTERNAL_SERVER_ERROR' };
	}
}

module.exports = {
	getProjects,
	getProject,
	addProject,
	updateProject,
	deleteProject,
};
