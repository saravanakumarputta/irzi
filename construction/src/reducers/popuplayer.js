export default function popupLayerReducer(state = {}, action) {
	switch (action.type) {
		case 'SHOW_POPUP':
			return Object.assign({}, state, {
				isShow: true,
				component: action.data.component,
				entityId: action.data.entityId,
				type: action.data.type,
				title: action.data.title,
			});
		case 'HIDE_POPUP':
			return Object.assign({}, state, { isShow: false, component: null, entityId: null });
		default:
			return state;
	}
}
