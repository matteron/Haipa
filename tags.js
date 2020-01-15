const {tagList, closingList} = require('./data');

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

function createClosingTag(tagName) {
	return function(attr) {
		return new Element(tagName, attr).compose();
	}
}

function generateTags(normal, closing) {
	const out = { html: (a, i) => '<!DOCTYPE html>' + createTag('html')(a, i)};
	normal.forEach(t => out[t] = createTag(t));
	closing.forEach(t => out[t] = createClosingTag(t));
	return out;
}

module.exports = generateTags(tagList, closingList);