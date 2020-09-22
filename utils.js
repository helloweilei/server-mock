module.exports = {
	extend(target, source) {
		if (!target) {
			source = target;
			target = {};
		}
		for (let key in source) {
			target[key] = source[key];
		}
		return target;
	}
}