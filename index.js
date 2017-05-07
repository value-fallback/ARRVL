module.exports = function arrvl(value, fallbackValue) {
	return Array.isArray(value) ? value : fallbackValue;
};
