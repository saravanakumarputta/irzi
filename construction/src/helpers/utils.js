export function normalize(array, key) {
	return array.reduce((obj, item) => {
		let key1 = item[key];
		obj[key1] = item;
		return obj;
	}, {});
}
