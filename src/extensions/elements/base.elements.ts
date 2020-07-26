import { HaipaElement } from '../extension.type';
import { Element } from '../extension.decorator';

declare module '../../node' {
	export interface HaipaNode {
		html: HaipaElement;
		/// Document MetaData
		base: HaipaElement;
		link: HaipaElement;
		meta: HaipaElement;
		head: HaipaElement;
		// Sectioning Root
		body: HaipaElement;
		// Content Sectioning
		address: HaipaElement;
		article: HaipaElement;
		aside: HaipaElement;
		footer: HaipaElement;
		header: HaipaElement;
		h1: HaipaElement;
		h2: HaipaElement;
		h3: HaipaElement;
		h4: HaipaElement;
		h5: HaipaElement;
		h6: HaipaElement;
		// Text Content
		hgroup: HaipaElement;
		main: HaipaElement;
		nav: HaipaElement;
		section: HaipaElement;
		blockquote: HaipaElement;
		dd: HaipaElement;
		div: HaipaElement;
		dl: HaipaElement;
		dt: HaipaElement;
		figcaption: HaipaElement;
		figure: HaipaElement;
		hr: HaipaElement;
		li: HaipaElement;
		ol: HaipaElement;
		p: HaipaElement;
		pre: HaipaElement;
		ul: HaipaElement;
		// Inline Text Semantics
		a: HaipaElement;
		b: HaipaElement;
		bdi: HaipaElement;
		bdo: HaipaElement;
		br: HaipaElement;
		code: HaipaElement;
		dfn: HaipaElement;
		em: HaipaElement;
		i: HaipaElement;
		kbd: HaipaElement;
		mark: HaipaElement;
		q: HaipaElement;
		rb: HaipaElement;
		rp: HaipaElement;
		rt: HaipaElement;
		rtc: HaipaElement;
		ruby: HaipaElement;
		s: HaipaElement;
		samp: HaipaElement;
		small: HaipaElement;
		strong: HaipaElement;
		sub: HaipaElement;
		sup: HaipaElement;
		time: HaipaElement;
		u: HaipaElement;
		var: HaipaElement;
		wbr: HaipaElement;
		// Image and Multimedia
		area: HaipaElement;
		audio: HaipaElement;
		img: HaipaElement;
		map: HaipaElement;
		track: HaipaElement;
		video: HaipaElement;
		// Embedded Content
		embed: HaipaElement;
		iframe: HaipaElement;
		object: HaipaElement;
		param: HaipaElement;
		picture: HaipaElement;
		source: HaipaElement;
		// Scripting
		canvas: HaipaElement;
		noscript: HaipaElement;
		script: HaipaElement;
		// Demarcating Edits
		del: HaipaElement;
		ins: HaipaElement;
		// Table Content
		caption: HaipaElement;
		col: HaipaElement;
		colgroup: HaipaElement;
		table: HaipaElement;
		tbody: HaipaElement;
		td: HaipaElement;
		tfoot: HaipaElement;
		th: HaipaElement;
		thead: HaipaElement;
		tr: HaipaElement;
		// Forms
		button: HaipaElement;
		datalist: HaipaElement;
		fieldset: HaipaElement;
		input: HaipaElement;
		legend: HaipaElement;
		meter: HaipaElement;
		optgroup: HaipaElement;
		option: HaipaElement;
		output: HaipaElement;
		progress: HaipaElement;
		select: HaipaElement;
		textarea: HaipaElement;
		// Interactive Elements
		details: HaipaElement;
		dialog: HaipaElement;
		menu: HaipaElement;
		summary: HaipaElement;
		// Web Components
		slot: HaipaElement;
		template: HaipaElement;
	}
}

export class BaseElements {
	@Element() html() {}
	@Element(true)  base() {}
	@Element(true) link() {}
	@Element(true) meta() {}
	@Element() head() {}
	@Element() body() {}
	@Element() address() {}
	@Element() article() {}
	@Element() aside() {}
	@Element() footer() {}
	@Element() header() {}
	@Element() h1() {}
	@Element() h2() {}
	@Element() h3() {}
	@Element() h4() {}
	@Element() h5() {}
	@Element() h6() {}
	@Element() hgroup() {}
	@Element() main() {}
	@Element() nav() {}
	@Element() section() {}
	@Element() blockquote() {}
	@Element() dd() {}
	@Element() div() {}
	@Element() dl() {}
	@Element() dt() {}
	@Element() figcaption() {}
	@Element() figure() {}
	@Element(true) hr() {}
	@Element() li() {}
	@Element() ol() {}
	@Element() p() {}
	@Element() pre() {}
	@Element() ul() {}
	@Element() a() {}
	@Element() b() {}
	@Element() bdi() {}
	@Element() bdo() {}
	@Element(true) br() {}
	@Element() cite() {}
	@Element() code() {}
	@Element() dfn() {}
	@Element() em() {}
	@Element() i() {}
	@Element() kbd() {}
	@Element() mark() {}
	@Element() q() {}
	@Element() rb() {}
	@Element() rp() {}
	@Element() rt() {}
	@Element() rtc() {}
	@Element() ruby() {}
	@Element() s() {}
	@Element() samp() {}
	@Element() small() {}
	@Element() strong() {}
	@Element() sub() {}
	@Element() sup() {}
	@Element() time() {}
	@Element() u() {}
	@Element() var() {}
	@Element() wbr() {}
	@Element(true) area() {}
	@Element() audio() {}
	@Element(true) img() {}
	@Element() map() {}
	@Element(true) track() {}
	@Element() video() {}
	@Element(true) embed() {}
	@Element(true) iframe() {}
	@Element() object() {}
	@Element(true) param() {}
	@Element() picture() {}
	@Element(true) source() {}
	@Element() canvas() {}
	@Element() noscript() {}
	@Element() script() {}
	@Element() del() {}
	@Element() ins() {}
	@Element() caption() {}
	@Element() col() {}
	@Element() colgroup() {}
	@Element() table() {}
	@Element() tbody() {}
	@Element() td() {}
	@Element() tfoot() {}
	@Element() th() {}
	@Element() thead() {}
	@Element() tr() {}
	@Element() button() {}
	@Element() datalist() {}
	@Element() fieldset() {}
	@Element(true) input() {}
	@Element() legend() {}
	@Element() meter() {}
	@Element() optgroup() {}
	@Element() option() {}
	@Element() output() {}
	@Element() progress() {}
	@Element() select() {}
	@Element() textarea() {}
	@Element() details() {}
	@Element() dialog() {}
	@Element() menu() {}
	@Element() summary() {}
	@Element() slot() {}
	@Element() template() {}
}