// Based on MDN List
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element
const base = require('./base');
const svg = require('./svg');	
const aria = require('./aria');
const event = require('./events');

exports.tagList = [
	...base.tags,
	// SVG
	...svg.tags
];

exports.attrList = [
	...base.attr,
	// SVG
	...svg.attr,
	// Aria
	...aria.attr,
	// Global Event Handlers
	...event.attr
];
