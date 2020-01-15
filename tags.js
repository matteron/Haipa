const { tagList } = require('./data');

class Element {
	constructor(name, attr, internal) {
		this.tag = name;
		this.attr = attr;
		this.internal = internal;
	}
	compose() {
		return this.internal
		? `<${this.tag}${this.expandAttr()}>\t${this.expandInternal()}\n</${this.tag}>`
		: `<${this.tag}${this.expandAttr()}/>\n`;
	}
	expandAttr() {
		return this.attr.reduce((acc, cur) => `${acc} ${cur}`, '');
	}
	expandInternal(){
		return this.internal.reduce((acc, cur) => `${acc}\n${typeof cur == 'string' ? cur : cur.compose()}`, '');
	}
};

function createTag(tagName) {
	return function(attr, internal) {
		return (new Element(tagName, attr, internal)).compose();
	}
}

function generateTags(arr) {
	const out = { html: (a, i) => '<!DOCTYPE html>\n' + createTag('html')(a, i)};
	arr.forEach(t => out[t] = createTag(t));
	return out;
}

module.exports = generateTags(tagList);