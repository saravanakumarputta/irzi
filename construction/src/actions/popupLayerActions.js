export function showpopupLayer(componentName, id, type, title) {
	return {
		type: 'SHOW_POPUP',
		data: {
			component: componentName,
			entityId: id,
			type,
			title: title,
		},
	};
}

export function hidepopupLayer() {
	return {
		type: 'HIDE_POPUP',
	};
}
