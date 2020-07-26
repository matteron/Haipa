import { HaipaAttribute } from '../extension.type';
import { Attribute } from '../extension.decorator';
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

export class SvgAttributes {
	@Attribute('accent-height') accentHeight() {}
	@Attribute() accumulate() {}
	@Attribute() additive() {}
	@Attribute('alignment-baseline') alignmentBaseline() {}
	@Attribute() allowReorder() {}
	@Attribute() alphabetic() {}
	@Attribute() amplitude() {}
	@Attribute('arabic-form') arabicForm() {}
	@Attribute() ascent() {}
	@Attribute() attributeName() {}
	@Attribute() attributeType() {}
	@Attribute() autoReverse() {}
	@Attribute() azimuth() {}
	@Attribute() baseFrequency() {}
	@Attribute('baseline-shift') baselineShift() {}
	@Attribute() baseProfile() {}
	@Attribute() bbox() {}
	@Attribute() begin() {}
	@Attribute() bias() {}
	@Attribute() by() {}
	@Attribute() calcMode() {}
	@Attribute('cap-height') capHeight() {}
	@Attribute() class() {}
	@Attribute() clip() {}
	@Attribute() clipPathUnits() {}
	@Attribute('clip-rule') clipRule() {}
	@Attribute() color() {}
	@Attribute('color-interpolation') colorInterpolation() {}
	@Attribute('color-interpolation-filters') colorInterpolationFilters() {}
	@Attribute('color-profile') colorProfile() {}
	@Attribute('color-rendering') colorRendering() {}
	@Attribute() contentScriptType() {}
	@Attribute() contentStyleType() {}
	@Attribute() cursor() {}
	@Attribute() cx() {}
	@Attribute() cy() {}
	@Attribute() d() {}
	@Attribute() decelerate() {}
	@Attribute() descent() {}
	@Attribute() diffuseConstant() {}
	@Attribute() direction() {}
	@Attribute() display() {}
	@Attribute() divisor() {}
	@Attribute('dominant-baseline') dominantBaseline() {}
	@Attribute() dur() {}
	@Attribute() dx() {}
	@Attribute() dy() {}
	@Attribute() edgeMode() {}
	@Attribute() elevation() {}
	@Attribute('enable-background') enableBackground() {}
	@Attribute() end() {}
	@Attribute() exponent() {}
	@Attribute() externalResourcesRequired() {}
	@Attribute() fill() {}
	@Attribute('fill-opacity') fillOpacity() {}
	@Attribute('fill-rule') fillRule() {}
	@Attribute() filterRes() {}
	@Attribute() filterUnits() {}
	@Attribute('flood-color') floodColor() {}
	@Attribute('flood-opacity') floodOpacity() {}
	@Attribute('font-family') fontFamily() {}
	@Attribute('font-size') fontSize() {}
	@Attribute('font-size-adjust') fontSizeAdjust() {}
	@Attribute('font-stretch') fontStretch() {}
	@Attribute('font-style') fontStyle() {}
	@Attribute('font-variant') fontVariant() {}
	@Attribute('font-weight') fontWeight() {}
	@Attribute() format() {}
	@Attribute() from() {}
	@Attribute() fr() {}
	@Attribute() fx() {}
	@Attribute() fy() {}
	@Attribute() g1() {}
	@Attribute() g2() {}
	@Attribute('glyph-name') glyphName() {}
	@Attribute('glyph-orientation-horizontal') glyphOrientationHorizontal() {}
	@Attribute('glyph-orientation-vertical') glyphOrientationVertical() {}
	@Attribute() glyphRef() {}
	@Attribute() gradientTransform() {}
	@Attribute() gradientUnits() {}
	@Attribute() hanging() {}
	@Attribute() height() {}
	@Attribute() href() {}
	@Attribute('horiz-adv-x') horizAdvX() {}
	@Attribute('horiz-origin-x') horizOriginX() {}
	@Attribute() id() {}
	@Attribute() ideographic() {}
	@Attribute('image-rendering') imageRendering() {}
	@Attribute() in() {}
	@Attribute() in2() {}
	@Attribute() intercept() {}
	@Attribute() k() {}
	@Attribute() k1() {}
	@Attribute() k2() {}
	@Attribute() k3() {}
	@Attribute() k4() {}
	@Attribute() kernelMatrix() {}
	@Attribute() kernelUnitLength() {}
	@Attribute() kerning() {}
	@Attribute() keyPoints() {}
	@Attribute() keySplines() {}
	@Attribute() keyTimes() {}
	@Attribute() lengthAdjust() {}
	@Attribute('letter-spacing') letterSpacing() {}
	@Attribute('lighting-color') lightingColor() {}
	@Attribute() limitingConeAngle() {}
	@Attribute() local() {}
	@Attribute('marker-end') markerEnd() {}
	@Attribute('marker-mid') markerMid() {}
	@Attribute('marker-start') markerStart() {}
	@Attribute() markerHeight() {}
	@Attribute() markerUnits() {}
	@Attribute() markerWidth() {}
	@Attribute() maskContentUnits() {}
	@Attribute() maskUnits() {}
	@Attribute() mathematical() {}
	@Attribute() max() {}
	@Attribute() media() {}
	@Attribute() method() {}
	@Attribute() min() {}
	@Attribute() mode() {}
	@Attribute() name() {}
	@Attribute() numOctaves() {}
	@Attribute() offset() {}
	@Attribute() opacity() {}
	@Attribute() operator() {}
	@Attribute() order() {}
	@Attribute() orient() {}
	@Attribute() orientation() {}
	@Attribute() origin() {}
	@Attribute() overflow() {}
	@Attribute('overline-position') overlinePosition() {}
	@Attribute('overline-thickness') overlineThickness() {}
	@Attribute('paint-order') paintOrder() {}
	@Attribute() pathLength() {}
	@Attribute() patternContentUnits() {}
	@Attribute() patternTransform() {}
	@Attribute() patternUnits() {}
	@Attribute() ping() {}
	@Attribute('pointer-events') pointerEvents() {}
	@Attribute() points() {}
	@Attribute() pointsAtX() {}
	@Attribute() pointsAtY() {}
	@Attribute() pointsAtZ() {}
	@Attribute() preserveAlpha() {}
	@Attribute() preserveAspectRatio() {}
	@Attribute() primitiveUnits() {}
	@Attribute() r() {}
	@Attribute() radius() {}
	@Attribute() referrerPolicy() {}
	@Attribute() refX() {}
	@Attribute() refY() {}
	@Attribute('rendering-intent') renderingIntent() {}
	@Attribute() repeatCount() {}
	@Attribute() repeatDur() {}
	@Attribute() requiredExtensions() {}
	@Attribute() requiredFeatures() {}
	@Attribute() restart() {}
	@Attribute() result() {}
	@Attribute() rotate() {}
	@Attribute() rx() {}
	@Attribute() ry() {}
	@Attribute() scale() {}
	@Attribute() seed() {}
	@Attribute('shape-rendering') shapeRendering() {}
	@Attribute() slope() {}
	@Attribute() spacing() {}
	@Attribute() specularConstant() {}
	@Attribute() specularExponent() {}
	@Attribute() speed() {}
	@Attribute() spreadMethod() {}
	@Attribute() startOffset() {}
	@Attribute() stdDeviation() {}
	@Attribute() stemh() {}
	@Attribute() stemv() {}
	@Attribute() stitchTiles() {}
	@Attribute('stop-color') stopColor() {}
	@Attribute('stop-opacity') stopOpacity() {}
	@Attribute('strikethrough-position') strikethroughPosition() {}
	@Attribute('strikethrough-thickness') strikethroughThickness() {}
	@Attribute() string() {}
	@Attribute() stroke() {}
	@Attribute('stroke-dasharray') strokeDasharray() {}
	@Attribute('stroke-dashoffset') strokeDashoffset() {}
	@Attribute('stroke-linecap') strokeLinecap() {}
	@Attribute('stroke-linejoin') strokeLinejoin() {}
	@Attribute('stroke-miterlimit') strokeMiterlimit() {}
	@Attribute('stroke-opacity') strokeOpacity() {}
	@Attribute('stroke-width') strokeWidth() {}
	@Attribute() surfaceScale() {}
	@Attribute() systemLanguage() {}
	@Attribute() tabindex() {}
	@Attribute() tableValues() {}
	@Attribute() target() {}
	@Attribute() targetX() {}
	@Attribute() targetY() {}
	@Attribute('text-anchor') textAnchor() {}
	@Attribute('text-decoration') textDecoration() {}
	@Attribute('text-rendering') textRendering() {}
	@Attribute() textLength() {}
	@Attribute() to() {}
	@Attribute() transform() {}
	@Attribute() type() {}
	@Attribute() u1() {}
	@Attribute() u2() {}
	@Attribute('underline-position') underlinePosition() {}
	@Attribute('underline-thickness') underlineThickness() {}
	@Attribute() unicode() {}
	@Attribute('unicode-bidi') unicodeBidi() {}
	@Attribute('unicode-range') unicodeRange() {}
	@Attribute('units-per-em') unitsPerEm() {}
	@Attribute('v-alphabetic') vAlphabetic() {}
	@Attribute('v-hanging') vHanging() {}
	@Attribute('v-ideographic') vIdeographic() {}
	@Attribute('v-mathematical') vMathematical() {}
	@Attribute() values() {}
	@Attribute('vector-effect') vectorEffect() {}
	@Attribute() version() {}
	@Attribute('vert-adv-y') vertAdvY() {}
	@Attribute('vert-origin-x') vertOriginX() {}
	@Attribute('vert-origin-y') vertOriginY() {}
	@Attribute() viewBox() {}
	@Attribute() viewTarget() {}
	@Attribute() visibility() {}
	@Attribute() width() {}
	@Attribute() widths() {}
	@Attribute('word-spacing') wordSpacing() {}
	@Attribute('writing-mode') writingMode() {}
	@Attribute() x() {}
	@Attribute('x-height') xHeight() {}
	@Attribute() x1() {}
	@Attribute() x2() {}
	@Attribute() xChannelSelector() {}
	@Attribute() xmlns() {}
	@Attribute() y() {}
	@Attribute() y1() {}
	@Attribute() y2() {}
	@Attribute() yChannelSelector() {}
	@Attribute() z() {}
	@Attribute() zoomAndPan() {}
}
