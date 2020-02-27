// Based on MDN List
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element
const { baseTags, baseAttr } = require('./base');
const { svgTags, svgAttr } = require('./svg');	
const { ariaAttr } = require('./aria');
const { eventAttr } = require('./events');

exports.tagList = [
	...baseTags,
	// SVG
	...svgTags
];

exports.attrList = [
	...baseAttr,
	// SVG
	...svgAttr,
	// Aria
	...ariaAttr,
	// Global Event Handlers
	...eventAttr
];
