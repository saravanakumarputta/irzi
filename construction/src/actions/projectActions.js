import { normalize } from '../helpers/utils';

export function addProjectSuccess(data) {
	return {
		type: 'ADD_PROJECT_SUCCESS',
		data,
	};
}

export function getProjectsSuccess(data) {
	return {
		type: 'GET_PROJECTS_SUCCESS',
		data: normalize(data, 'id'),
	};
}

export function deleteProjectSuccess(projectId) {
	return {
		type: 'DELETE_PROJECT_SUCCESS',
		data: projectId,
	};
}

export function updateProjectSuccess(data) {
	return {
		type: 'UPDATE_PROJECT_SUCCESS',
		data: {
			id: data.id,
			data: data,
		},
	};
}
