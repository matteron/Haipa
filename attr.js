const {attrList} = require('./data');

function createAttr(attrName) {
	return function(prop) {
		return `${attrName}="${prop}"`
	}
}

function createAttributes(arr) {
	const out = { classes: createAttr('class') };
	var result = arr.forEach(a => out[a] = createAttr(a));
	return out;
}

module.exports = createAttributes(attrList);