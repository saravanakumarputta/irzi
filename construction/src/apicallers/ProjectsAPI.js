import callAPI from '../helpers/APIRequest';

export function getProjects() {
	return callAPI({ url: '/api/projects', headers: {}, body: {}, method: 'GET' });
}

export function getProject(id) {
	return callAPI({ url: `/api/projects/${id}`, headers: {}, body: {}, method: 'GET' });
}

export function addProject(projectObj) {
	let { title, images, section1, section2, type, client, location } = projectObj;

	let formData = new FormData();

	formData.append('title', title);
	formData.append('section1', section1);
	formData.append('section2', section2);
	formData.append('type', type);
	formData.append('location', location);
	formData.append('client', client);

	for (const key of Object.keys(images)) {
		formData.append('images', images[key]);
	}

	return callAPI({
		url: '/api/projects',
		headers: { 'Content-Type': 'multipart/form-data' },
		body: formData,
		method: 'POST',
	});
}

export function updateProject(projectObj) {
	return callAPI({
		url: `/api/projects/${projectObj.projectId}`,
		headers: { 'Content-Type': 'application/json' },
		body: projectObj,
		method: 'PATCH',
	});
}

export function deleteProject(projectId) {
	return callAPI({
		url: `/api/projects/${projectId}`,
		headers: { 'Content-Type': 'application/json' },
		body: {},
		method: 'DELETE',
	});
}
