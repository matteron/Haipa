import { HaipaAttribute } from '../extension.type';
import { LanguageAttribute } from '../../types/language.type';

declare module '../../main/node' {
	export interface HaipaNode {
		accentHeight: HaipaAttribute;
		accumulate: HaipaAttribute;
		additive: HaipaAttribute;
		alignmentBaseline: HaipaAttribute;
		allowReorder: HaipaAttribute;
		alphabetic: HaipaAttribute;
		amplitude: HaipaAttribute;
		arabicForm: HaipaAttribute;
		ascent: HaipaAttribute;
		attributeName: HaipaAttribute;
		attributeType: HaipaAttribute;
		autoReverse: HaipaAttribute;
		azimuth: HaipaAttribute;
		baseFrequency: HaipaAttribute;
		baselineShift: HaipaAttribute;
		baseProfile: HaipaAttribute;
		bbox: HaipaAttribute;
		begin: HaipaAttribute;
		bias: HaipaAttribute;
		by: HaipaAttribute;
		calcMode: HaipaAttribute;
		capHeight: HaipaAttribute;
		class: HaipaAttribute;
		clip: HaipaAttribute;
		clipPathUnits: HaipaAttribute;
		clipRule: HaipaAttribute;
		color: HaipaAttribute;
		colorInterpolation: HaipaAttribute;
		colorInterpolationFilters: HaipaAttribute;
		colorProfile: HaipaAttribute;
		colorRendering: HaipaAttribute;
		contentScriptType: HaipaAttribute;
		contentStyleType: HaipaAttribute;
		cursor: HaipaAttribute;
		cx: HaipaAttribute;
		cy: HaipaAttribute;
		d: HaipaAttribute;
		decelerate: HaipaAttribute;
		descent: HaipaAttribute;
		diffuseConstant: HaipaAttribute;
		direction: HaipaAttribute;
		display: HaipaAttribute;
		divisor: HaipaAttribute;
		dominantBaseline: HaipaAttribute;
		dur: HaipaAttribute;
		dx: HaipaAttribute;
		dy: HaipaAttribute;
		edgeMode: HaipaAttribute;
		elevation: HaipaAttribute;
		enableBackground: HaipaAttribute;
		end: HaipaAttribute;
		exponent: HaipaAttribute;
		externalResourcesRequired: HaipaAttribute;
		fill: HaipaAttribute;
		fillOpacity: HaipaAttribute;
		fillRule: HaipaAttribute;
		filterRes: HaipaAttribute;
		filterUnits: HaipaAttribute;
		floodColor: HaipaAttribute;
		floodOpacity: HaipaAttribute;
		fontFamily: HaipaAttribute;
		fontSize: HaipaAttribute;
		fontSizeAdjust: HaipaAttribute;
		fontStretch: HaipaAttribute;
		fontStyle: HaipaAttribute;
		fontVariant: HaipaAttribute;
		fontWeight: HaipaAttribute;
		format: HaipaAttribute;
		from: HaipaAttribute;
		fr: HaipaAttribute;
		fx: HaipaAttribute;
		fy: HaipaAttribute;
		g1: HaipaAttribute;
		g2: HaipaAttribute;
		glyphName: HaipaAttribute;
		glyphOrientationHorizontal: HaipaAttribute;
		glyphOrientationVertical: HaipaAttribute;
		glyphRef: HaipaAttribute;
		gradientTransform: HaipaAttribute;
		gradientUnits: HaipaAttribute;
		hanging: HaipaAttribute;
		height: HaipaAttribute;
		href: HaipaAttribute;
		horizAdvX: HaipaAttribute;
		horizOriginX: HaipaAttribute;
		id: HaipaAttribute;
		ideographic: HaipaAttribute;
		imageRendering: HaipaAttribute;
		in: HaipaAttribute;
		in2: HaipaAttribute;
		intercept: HaipaAttribute;
		k: HaipaAttribute;
		k1: HaipaAttribute;
		k2: HaipaAttribute;
		k3: HaipaAttribute;
		k4: HaipaAttribute;
		kernelMatrix: HaipaAttribute;
		kernelUnitLength: HaipaAttribute;
		kerning: HaipaAttribute;
		keyPoints: HaipaAttribute;
		keySplines: HaipaAttribute;
		keyTimes: HaipaAttribute;
		lengthAdjust: HaipaAttribute;
		letterSpacing: HaipaAttribute;
		lightingColor: HaipaAttribute;
		limitingConeAngle: HaipaAttribute;
		local: HaipaAttribute;
		markerEnd: HaipaAttribute;
		markerMid: HaipaAttribute;
		markerStart: HaipaAttribute;
		markerHeight: HaipaAttribute;
		markerUnits: HaipaAttribute;
		markerWidth: HaipaAttribute;
		maskContentUnits: HaipaAttribute;
		maskUnits: HaipaAttribute;
		mathematical: HaipaAttribute;
		max: HaipaAttribute;
		media: HaipaAttribute;
		method: HaipaAttribute;
		min: HaipaAttribute;
		mode: HaipaAttribute;
		name: HaipaAttribute;
		numOctaves: HaipaAttribute;
		offset: HaipaAttribute;
		opacity: HaipaAttribute;
		operator: HaipaAttribute;
		order: HaipaAttribute;
		orient: HaipaAttribute;
		orientation: HaipaAttribute;
		origin: HaipaAttribute;
		overflow: HaipaAttribute;
		overlinePosition: HaipaAttribute;
		overlineThickness: HaipaAttribute;
		paintOrder: HaipaAttribute;
		pathLength: HaipaAttribute;
		patternContentUnits: HaipaAttribute;
		patternTransform: HaipaAttribute;
		patternUnits: HaipaAttribute;
		ping: HaipaAttribute;
		pointerEvents: HaipaAttribute;
		points: HaipaAttribute;
		pointsAtX: HaipaAttribute;
		pointsAtY: HaipaAttribute;
		pointsAtZ: HaipaAttribute;
		preserveAlpha: HaipaAttribute;
		preserveAspectRatio: HaipaAttribute;
		primitiveUnits: HaipaAttribute;
		r: HaipaAttribute;
		radius: HaipaAttribute;
		referrerPolicy: HaipaAttribute;
		refX: HaipaAttribute;
		refY: HaipaAttribute;
		renderingIntent: HaipaAttribute;
		repeatCount: HaipaAttribute;
		repeatDur: HaipaAttribute;
		requiredExtensions: HaipaAttribute;
		requiredFeatures: HaipaAttribute;
		restart: HaipaAttribute;
		result: HaipaAttribute;
		rotate: HaipaAttribute;
		rx: HaipaAttribute;
		ry: HaipaAttribute;
		scale: HaipaAttribute;
		seed: HaipaAttribute;
		shapeRendering: HaipaAttribute;
		slope: HaipaAttribute;
		spacing: HaipaAttribute;
		specularConstant: HaipaAttribute;
		specularExponent: HaipaAttribute;
		speed: HaipaAttribute;
		spreadMethod: HaipaAttribute;
		startOffset: HaipaAttribute;
		stdDeviation: HaipaAttribute;
		stemh: HaipaAttribute;
		stemv: HaipaAttribute;
		stitchTiles: HaipaAttribute;
		stopColor: HaipaAttribute;
		stopOpacity: HaipaAttribute;
		strikethroughPosition: HaipaAttribute;
		strikethroughThickness: HaipaAttribute;
		string: HaipaAttribute;
		stroke: HaipaAttribute;
		strokeDasharray: HaipaAttribute;
		strokeDashoffset: HaipaAttribute;
		strokeLinecap: HaipaAttribute;
		strokeLinejoin: HaipaAttribute;
		strokeMiterlimit: HaipaAttribute;
		strokeOpacity: HaipaAttribute;
		strokeWidth: HaipaAttribute;
		surfaceScale: HaipaAttribute;
		systemLanguage: LanguageAttribute;
		tabindex: HaipaAttribute;
		tableValues: HaipaAttribute;
		target: HaipaAttribute;
		targetX: HaipaAttribute;
		targetY: HaipaAttribute;
		textAnchor: HaipaAttribute;
		textDecoration: HaipaAttribute;
		textRendering: HaipaAttribute;
		textLength: HaipaAttribute;
		to: HaipaAttribute;
		transform: HaipaAttribute;
		type: HaipaAttribute;
		u1: HaipaAttribute;
		u2: HaipaAttribute;
		underlinePosition: HaipaAttribute;
		underlineThickness: HaipaAttribute;
		unicode: HaipaAttribute;
		unicodeBidi: HaipaAttribute;
		unicodeRange: HaipaAttribute;
		unitsPerEm: HaipaAttribute;
		vAlphabetic: HaipaAttribute;
		vHanging: HaipaAttribute;
		vIdeographic: HaipaAttribute;
		vMathematical: HaipaAttribute;
		values: HaipaAttribute;
		vectorEffect: HaipaAttribute;
		version: HaipaAttribute;
		vertAdvY: HaipaAttribute;
		vertOriginX: HaipaAttribute;
		vertOriginY: HaipaAttribute;
		viewBox: HaipaAttribute;
		viewTarget: HaipaAttribute;
		visibility: HaipaAttribute;
		width: HaipaAttribute;
		widths: HaipaAttribute;
		wordSpacing: HaipaAttribute;
		writingMode: HaipaAttribute;
		x: HaipaAttribute;
		xHeight: HaipaAttribute;
		x1: HaipaAttribute;
		x2: HaipaAttribute;
		xChannelSelector: HaipaAttribute;
		xmlns: HaipaAttribute;
		y: HaipaAttribute;
		y1: HaipaAttribute;
		y2: HaipaAttribute;
		yChannelSelector: HaipaAttribute;
		z: HaipaAttribute;
		zoomAndPan: HaipaAttribute;
	}
}

export const svgAttributes = [
	'accent-height',
	'accumulate',
	'additive',
	'alignment-baseline',
	'allowReorder',
	'alphabetic',
	'amplitude',
	'arabic-form',
	'ascent',
	'attributeName',
	'attributeType',
	'autoReverse',
	'azimuth',
	'baseFrequency',
	'baseline-shift',
	'baseProfile',
	'bbox',
	'begin',
	'bias',
	'by',
	'calcMode',
	'cap-height',
	'class',
	'clip',
	'clipPathUnits',
	'clip-rule',
	'color',
	'color-interpolation',
	'color-interpolation-filters',
	'color-profile',
	'color-rendering',
	'contentScriptType',
	'contentStyleType',
	'cursor',
	'cx',
	'cy',
	'd',
	'decelerate',
	'descent',
	'diffuseConstant',
	'direction',
	'display',
	'divisor',
	'dominant-baseline',
	'dur',
	'dx',
	'dy',
	'edgeMode',
	'elevation',
	'enable-background',
	'end',
	'exponent',
	'externalResourcesRequired',
	'fill',
	'fill-opacity',
	'fill-rule',
	'filterRes',
	'filterUnits',
	'flood-color',
	'flood-opacity',
	'font-family',
	'font-size',
	'font-size-adjust',
	'font-stretch',
	'font-style',
	'font-variant',
	'font-weight',
	'format',
	'from',
	'fr',
	'fx',
	'fy',
	'g1',
	'g2',
	'glyph-name',
	'glyph-orientation-horizontal',
	'glyph-orientation-vertical',
	'glyphRef',
	'gradientTransform',
	'gradientUnits',
	'hanging',
	'height',
	'href',
	'horiz-adv-x',
	'horiz-origin-x',
	'id',
	'ideographic',
	'image-rendering',
	'in',
	'in2',
	'intercept',
	'k',
	'k1',
	'k2',
	'k3',
	'k4',
	'kernelMatrix',
	'kernelUnitLength',
	'kerning',
	'keyPoints',
	'keySplines',
	'keyTimes',
	'lengthAdjust',
	'letter-spacing',
	'lighting-color',
	'limitingConeAngle',
	'local',
	'marker-end',
	'marker-mid',
	'marker-start',
	'markerHeight',
	'markerUnits',
	'markerWidth',
	'maskContentUnits',
	'maskUnits',
	'mathematical',
	'max',
	'media',
	'method',
	'min',
	'mode',
	'name',
	'numOctaves',
	'offset',
	'opacity',
	'operator',
	'order',
	'orient',
	'orientation',
	'origin',
	'overflow',
	'overline-position',
	'overline-thickness',
	'paint-order',
	'pathLength',
	'patternContentUnits',
	'patternTransform',
	'patternUnits',
	'ping',
	'pointer-events',
	'points',
	'pointsAtX',
	'pointsAtY',
	'pointsAtZ',
	'preserveAlpha',
	'preserveAspectRatio',
	'primitiveUnits',
	'r',
	'radius',
	'referrerPolicy',
	'refX',
	'refY',
	'rendering-intent',
	'repeatCount',
	'repeatDur',
	'requiredExtensions',
	'requiredFeatures',
	'restart',
	'result',
	'rotate',
	'rx',
	'ry',
	'scale',
	'seed',
	'shape-rendering',
	'slope',
	'spacing',
	'specularConstant',
	'specularExponent',
	'speed',
	'spreadMethod',
	'startOffset',
	'stdDeviation',
	'stemh',
	'stemv',
	'stitchTiles',
	'stop-color',
	'stop-opacity',
	'strikethrough-position',
	'strikethrough-thickness',
	'string',
	'stroke',
	'stroke-dasharray',
	'stroke-dashoffset',
	'stroke-linecap',
	'stroke-linejoin',
	'stroke-miterlimit',
	'stroke-opacity',
	'stroke-width',
	'surfaceScale',
	'systemLanguage',
	'tabindex',
	'tableValues',
	'target',
	'targetX',
	'targetY',
	'text-anchor',
	'text-decoration',
	'text-rendering',
	'textLength',
	'to',
	'transform',
	'type',
	'u1',
	'u2',
	'underline-position',
	'underline-thickness',
	'unicode',
	'unicode-bidi',
	'unicode-range',
	'units-per-em',
	'v-alphabetic',
	'v-hanging',
	'v-ideographic',
	'v-mathematical',
	'values',
	'vector-effect',
	'version',
	'vert-adv-y',
	'vert-origin-x',
	'vert-origin-y',
	'viewBox',
	'viewTarget',
	'visibility',
	'width',
	'widths',
	'word-spacing',
	'writing-mode',
	'x',
	'x-height',
	'x1',
	'x2',
	'xChannelSelector',
	'xmlns',
	'y',
	'y1',
	'y2',
	'yChannelSelector',
	'z',
	'zoomAndPan',
];
