// Based on MDN List
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element

exports.tagList = [
	//'html', Handeled manually to prepend <!DOCTYPE html>
	// Document Metadata
	'head',
	'style',
	'title',
	// Sectioning Root
	'body',
	// Content Sectioning
	'article',
	'aside',
	'footer',
	'header',
	'h1',
	'h2',
	'h3',
	'h4',
	'h5',
	'h6',
	'hgroup',
	'main',
	'nav',
	'section',
	// Text Content
	'div',
	'hr',
	'li',
	'ol',
	'ul',
	'p',
	// Inline Text Semantics
	'a',
	'b',
	'br',
	'code',
	'i',
	'small',
	'span',
	'strong',
	'sub',
	'sup',
	'u',
	// Image and Multimedia
	'img',
	// Table Content
	'table',
	'tbody',
	'td',
	'tfoot',
	'th',
	'thead',
	'tr',
	// SVG
	'svg',
	'g'
];

// Self Closing Tags
exports.closingList = [
	'link',
	'meta',
	'path'
];

exports.attrList = [
	//'class', handled in the function as it is a reserved keyword
	'lang',
	'id',
	'href',
	'rel',
	'as',
	'type',
	'name',
	'content',
	// SVG
	'version',
	'viewBox',
	'xmlns',
	'fill-rule',
	'stroke-dasharray',
	'stroke-linecap',
	'stroke-opacity',
	'transform',
	'stroke',
	'stroke-width',
	'd'
];
