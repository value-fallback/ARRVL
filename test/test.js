const assert = require('assert');
const arrvl = require('../');

describe('ARRVL', () => {
	let fallbackValue = [1, 2, 3];

	it('should return `value` when `value` is Array.', () => {
		let emptyArray = [];
		let nonEmptyArray = ['a', 'b', 'c'];

		assert.strictEqual(arrvl(emptyArray, fallbackValue), emptyArray);
		assert.strictEqual(arrvl(nonEmptyArray, fallbackValue), nonEmptyArray);
	});
	it('should return `fallbackValue` when `value` is not Array.', () => {
		assert.strictEqual(arrvl(null, fallbackValue), fallbackValue);
		assert.strictEqual(arrvl({ a: 1, b: 2, c: 3 }, fallbackValue), fallbackValue);
		assert.strictEqual(arrvl(0, fallbackValue), fallbackValue);
		assert.strictEqual(arrvl('string', fallbackValue), fallbackValue);
		assert.strictEqual(arrvl(Symbol('symbol'), fallbackValue), fallbackValue);
	});
});
