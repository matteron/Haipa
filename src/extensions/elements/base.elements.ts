import { HaipaElement } from '../extension.type';

declare module '../../main/node' {
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

export const baseElements = [
	'html',
	'head',
	'body',
	'address',
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
	'blockquote',
	'dd',
	'div',
	'dl',
	'dt',
	'figcaption',
	'figure',
	'li',
	'ol',
	'p',
	'pre',
	'ul',
	'a',
	'b',
	'bdi',
	'bdo',
	'code',
	'dfn',
	'em',
	'i',
	'kbd',
	'mark',
	'q',
	'rb',
	'rp',
	'rt',
	'rtc',
	'ruby',
	's',
	'samp',
	'small',
	'strong',
	'sub',
	'sup',
	'time',
	'u',
	'var',
	'wbr',
	'audio',
	'map',
	'video',
	'object',
	'picture',
	'canvas',
	'noscript',
	'script',
	'del',
	'ins',
	'caption',
	'col',
	'colgroup',
	'table',
	'tbody',
	'td',
	'tfoot',
	'th',
	'thead',
	'tr',
	'button',
	'datalist',
	'fieldset',
	'legend',
	'meter',
	'optgroup',
	'option',
	'output',
	'progress',
	'select',
	'textarea',
	'details',
	'dialog',
	'menu',
	'summary',
	'slot',
	'template'
];

export const selfClosing = [
	'base',
	'link',
	'meta',
	'hr',
	'br',
	'area',
	'img',
	'track',
	'embed',
	'iframe',
	'param',
	'input',
	'source',
];