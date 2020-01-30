(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.haipa = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
exports.ariaAttr = [
	'autocomplete',
	'checked',
	'current',
	'disabled',
	'errormessage',
	'expanded',
	'haspopup',
	'hidden',
	'invalid',
	'label',
	'level',
	'modal',
	'multiline',
	'multiselectable',
	'orientation',
	'placeholder',
	'pressed',
	'readonly',
	'required',
	'selected',
	'sort',
	'valuemax',
	'valuemin',
	'valuenow',
	'valuetext',
	'live',
	'relevant',
	'atomic',
	'busy',
	'dropeffect',
	'dragged',
	'activedescendant',
	'colcount',
	'colindex',
	'colspan',
	'controls',
	'describedby',
	'details',
	'errormessage',
	'flowto',
	'labelledby',
	'owns',
	'posinset',
	'rowcount',
	'rowindex',
	'rowspan',
	'setsize'
].map(a => 'aria-' + a);


},{}],2:[function(require,module,exports){

// Based on MDN List
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element

module.exports = (useSvg) => {
	const { svgTags, svgAttr } = useSvg ? require('./svg') : { svgTags: [], svgAttr: [] };	
	const { ariaAttr } = require('./aria');

	const tagList = [
		//'html', Handeled manually to prepend <!DOCTYPE html>
		// Document Metadata
		'base', 'link', 'meta', 'head', 'style', 'title', 
		// Sectioning Root
		'body',
		// Content Sectioning
		'address', 'article', 'aside', 'footer', 'header', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hgroup', 'main', 'nav', 'section',
		// Text Content
		'blockquote', 'dd', 'div', 'dl', 'dt', 'figcaption', 'figure', 'hr', 'li', 'ol', 'p', 'pre', 'ul',
		// Inline Text Semantics
		'a', 'abbr', 'b', 'bdi', 'bdo', 'br', 'cite', 'code', 'data', 'dfn', 'em', 'i', 'kbd', 'mark', 'q','rb',
		'rp', 'rt', 'rtc', 'ruby', 's', 'samp', 'small', 'span', 'strong', 'sub', 'sup', 'time', 'u', 'var', 'wbr',
		// Image and Multimedia
		'area', 'audio', 'img', 'map', 'track', 'video',
		// Embedded Content
		'embed', 'iframe', 'object', 'param', 'picture', 'source',
		// Scripting
		'canvas', 'noscript', 'script',
		// Demarcating Edits
		'del', 'ins',
		// Table Content
		'caption', 'col', 'colgroup', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr',
		// Forms
		'button', 'datalist', 'fieldset', 'form', 'input', 'label', 'legend', 'meter', 'optgroup', 'option', 'output', 'progress', 'select', 'textarea',
		// Interactive Elements
		'details', 'dialog', 'menu', 'summary',
		// Web Components
		'slot', 'template',
		// SVG
		...svgTags
	];

	const attrList = [
		// A
		'abbr', 'accept', 'acceptCharset', 'accessKey', 'action', 'allowFullScreen', 'allowTransparency', 'alt', 'as', 'async', 'autoComplete', 'autoFocus', 'autoPlay',
		// C  NOTE: Class is replaced with classes due to name collision.
		'cellPadding', 'cellSpacing', 'challenge', 'charset', 'checked', 'cite', 'className', 'cols', 'colSpan', 'command', 'content', 'contentEditable',
		'contextMenu', 'controls', 'coords', 'crossOrigin',
		// D
		'data', 'dateTime', 'default', 'defer', 'dir', 'disabled', 'download', 'draggable', 'dropzone',
		// E
		'encType',
		// F
		'for', 'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget', 'frameBorder',
		// H
		'headers', 'height', 'hidden', 'high', 'href', 'hrefLang', 'htmlFor', 'httpEquiv',
		// I
		'icon', 'id', 'inputMode', 'isMap', 'itemId', 'itemProp', 'itemRef', 'itemScope', 'itemType',
		// K
		'kind',
		// L
		'label', 'lang', 'list', 'loop',
		// M
		'manifest', 'max', 'maxLength', 'media', 'mediaGroup', 'method', 'min', 'minLength', 'multiple', 'muted',
		// N
		'name', 'noValidate',
		// O
		'open', 'optimum',
		// P
		'pattern', 'ping', 'placeholder', 'poster', 'preload',
		// R
		'radioGroup', 'readOnly', 'rel', 'required', 'role', 'rows', 'rowSpan',
		// S
		'sandbox', 'scope', 'scoped', 'scrolling', 'seamless', 'selected', 'shape', 'size', 'sizes', 'sortable', 'span', 'spellCheck', 'src', 'srcDoc', 'srcSet',
		'start', 'step', 'style',
		// T
		'tabIndex', 'target', 'title', 'translate', 'type', 'typeMustMatch',
		// U
		'useMap',
		// V
		'value', 'version',
		// W
		'width', 'wmode', 'wrap',
		// SVG
		...svgAttr,
		// Aria
		...ariaAttr
	];

	return {
		tags: tagList,
		attr: attrList
	}
}

},{"./aria":1,"./svg":3}],3:[function(require,module,exports){
exports.svgTags = [
	// A
	'a', 'animate', 'animateMotion', 'animateTransform',
	// C
	'circle', 'clipPath',
	// D
	'defs', 'desc', 'discard',
	// E
	'ellipse',
	// F
	'feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting',
	'feDisplacementMap', 'feDistantLight', 'feDropShadow', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR',
	'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight',
	'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence', 'filter', 'foreignObject',
	// G
	'g',
	// H
	'hatch', 'hatchpath',
	// I
	'image',
	// L
	'line', 'linearGradient',
	// M
	'marker', 'mask', 'mesh', 'meshgradient', 'meshpatch', 'meshrow', 'metadata', 'mpath',
	// P
	'path', 'pattern', 'polygon', 'polyline',
	// R
	'radialGradient', 'rect',
	// S
	'script', 'set', 'solidcolor', 'stop', 'style', 'svg', 'switch', 'symbol',
	// T
	'text', 'textPath', 'title', 'tspan',
	// U
	'unknown', 'use',
	// V
	'view'
];

exports.svgAttr = [
	// A
	'accent-height', 'accumulate', 'additive', 'alignment-baseline', 'allowReorder', 'alphabetic',
	'amplitude', 'arabic-form', 'ascent', 'attributeName', 'attributeType', 'autoReverse', 'azimuth',
	// B
	'baseFrequency', 'baseline-shift', 'baseProfile', 'bbox', 'begin', 'bias', 'by',
	// C
	'calcMode', 'cap-height', 'class', 'clip', 'clipPathUnits', 'clip-path', 'clip-rule', 'color',
	'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'contentScriptType',
	'contentStyleType', 'cursor', 'cx', 'cy',
	// D
	'd', 'decelerate', 'descent', 'diffuseConstant', 'direction', 'display', 'divisor', 'dominant-baseline', 'dur', 'dx', 'dy',
	// E
	'edgeMode', 'elevation', 'enable-background', 'end', 'exponent', 'externalResourcesRequired',
	// F
	'fill', 'fill-opacity', 'fill-rule', 'filter', 'filterRes', 'filterUnits', 'flood-color', 'flood-opacity',
	'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight',
	'format', 'from', 'fr', 'fx', 'fy',
	// G
	'g1', 'g2', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'glyphRef', 'gradientTransform', 'gradientUnits',
	// H
	'hanging', 'height', 'href', 'hreflang', 'horiz-adv-x', 'horiz-origin-x',
	// I
	'id', 'ideographic', 'image-rendering', 'in', 'in2', 'intercept',
	// K
	'k', 'k1', 'k2', 'k3', 'k4', 'kernelMatrix', 'kernelUnitLength', 'kerning', 'keyPoints', 'keySplines', 'keyTimes',
	// L
	'lang', 'lengthAdjust', 'letter-spacing', 'lighting-color', 'limitingConeAngle', 'local',
	// M
	'marker-end', 'marker-mid', 'marker-start', 'markerHeight', 'markerUnits', 'markerWidth', 'mask', 'maskContentUnits', 'maskUnits',
	'mathematical', 'max', 'media', 'method', 'min', 'mode',
	// N
	'name', 'numOctaves',
	// O
	'offset', 'opacity', 'operator', 'order', 'orient', 'orientation', 'origin', 'overflow', 'overline-position', 'overline-thickness',
	// P
	'panose-1', 'paint-order', 'path', 'pathLength', 'patternContentUnits', 'patternTransform', 'patternUnits', 'ping', 'pointer-events',
	'points', 'pointsAtX', 'pointsAtY', 'pointsAtZ', 'preserveAlpha', 'preserveAspectRatio', 'primitiveUnits',
	// R
	'r', 'radius', 'referrerPolicy', 'refX', 'refY', 'rel', 'rendering-intent', 'repeatCount', 'repeatDur', 'requiredExtensions',
	'requiredFeatures', 'restart', 'result', 'rotate', 'rx', 'ry',
	// S
	'scale', 'seed', 'shape-rendering', 'slope', 'spacing', 'specularConstant', 'specularExponent', 'speed', 'spreadMethod', 'startOffset',
	'stdDeviation', 'stemh', 'stemv', 'stitchTiles', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness',
	'string', 'stroke', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity',
	'stroke-width', 'style', 'surfaceScale', 'systemLanguage',
	// T
	'tabindex', 'tableValues', 'target', 'targetX', 'targetY', 'text-anchor', 'text-decoration', 'text-rendering', 'textLength', 'to', 'transform', 'type',
	// U
	'u1', 'u2', 'underline-position', 'underline-thickness', 'unicode', 'unicode-bidi', 'unicode-range', 'units-per-em',
	// V
	'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'values', 'vector-effect', 'version', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y',
	'viewBox', 'viewTarget', 'visibility',
	// W
	'width', 'widths', 'word-spacing', 'writing-mode',
	// X
	'x', 'x-height', 'x1', 'x2', 'xChannelSelector', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title',
	'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'xmlns',
	// Y
	'y', 'y1', 'y2', 'yChannelSelector',
	// Z
	'z', 'zoomAndPan'
];
},{}],4:[function(require,module,exports){
function kebabeToCamel(s) {
  return s.replace(/([-_][a-z])/ig, ($1) => {
    return $1.toUpperCase().replace('-', '');
  });
};

function createAttr(attrName) {
	return function(prop) {
		return `${attrName}="${prop}"`
	}
}

function createAttributes(arr) {
	const out = { classes: createAttr('class') };
	var result = arr.forEach(a => out[kebabeToCamel(a)] = createAttr(a));
	return out;
}

module.exports = (attrList) => createAttributes(attrList);
},{}],5:[function(require,module,exports){
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

module.exports = (tagList) => generateTags(tagList);
},{}],6:[function(require,module,exports){
const haipa = (useSvg) => {
	const data = require('./data/data')(useSvg);
	return {
		tags: require('./factories/tags')(data.tags),
		attr: require('./factories/attr')(data.attr)
	}
}

module.exports = haipa;
},{"./data/data":2,"./factories/attr":4,"./factories/tags":5}]},{},[6])(6)
});
