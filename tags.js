const {tags} = require('./data');

const element = {
	tag: '',
	attr: [],
	internal: [],
	compose: function() {
		return `<${this.tag}${this.expandAttr()}>\t${this.expandInternal()}\n</${this.tag}>`;
	},
	expandAttr: function() {
		return this.properties.reduce((acc, cur) => `${acc} ${cur}`, '');
	},
	expandInternal: function(){
		return this.internal.reduce((acc, cur) => `${acc}\n${typeof cur == 'string' ? cur : cur.compose()}`, '');
	}
};

function createTag(tagName) {
	return function(properties, internal) {
		const base = Object.create(element);
		base.tag = tagName;
		base.properties = properties;
		base.internal = internal;
		return base.compose();
	}
}

function generateTags(tagList) {
	const output = {};
	tagList.forEach(t => output[t] = createTag(t));
	return output;
}

module.exports = generateTags(tags);