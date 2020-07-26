import { HaipaAttribute, HaipaBooleanAttribute } from '../extension.type';
import { LinkTypeAttribute } from '../../types/link.type';
import { LanguageAttribute } from '../../types/language.type';
import { DocumentEncodingAttribute } from '../../types/document-encoding.type';

declare module '../../main/node' {
	export interface HaipaNode {
		accept: HaipaAttribute;
		acceptCharset: HaipaAttribute;
		accessKey: HaipaAttribute;
		action: HaipaAttribute;
		allowFullScreen: HaipaBooleanAttribute;
		allowTransparency: HaipaAttribute;
		alt: HaipaAttribute;
		as: HaipaAttribute;
		async: HaipaBooleanAttribute;
		autoComplete: HaipaAttribute;
		autoFocus: HaipaBooleanAttribute;
		autoPlay: HaipaBooleanAttribute;
		cellPadding: HaipaAttribute;
		cellSpacing: HaipaAttribute;
		challenge: HaipaAttribute;
		charset: DocumentEncodingAttribute;
		checked: HaipaBooleanAttribute;
		className: HaipaAttribute;
		cols: HaipaAttribute;
		colSpan: HaipaAttribute;
		command: HaipaAttribute;
		content: HaipaAttribute;
		contentEditable: HaipaAttribute;
		contextMenu: HaipaAttribute;
		controls: HaipaBooleanAttribute;
		coords: HaipaAttribute;
		crossOrigin: HaipaAttribute;
		dateTime: HaipaAttribute;
		default: HaipaBooleanAttribute;
		defer: HaipaBooleanAttribute;
		dir: HaipaAttribute;
		disabled: HaipaBooleanAttribute;
		download: HaipaAttribute;
		draggable: HaipaAttribute;
		dropzone: HaipaAttribute;
		encType: HaipaAttribute;
		formAction: HaipaAttribute;
		formEncType: HaipaAttribute;
		formMethod: HaipaAttribute;
		formNoValidate: HaipaBooleanAttribute;
		formTarget: HaipaAttribute;
		frameBorder: HaipaAttribute;
		headers: HaipaAttribute;
		height: HaipaAttribute;
		hidden: HaipaBooleanAttribute;
		high: HaipaAttribute;
		href: HaipaAttribute;
		hrefLang: LanguageAttribute;
		htmlFor: HaipaAttribute;
		httpEquiv: HaipaAttribute;
		icon: HaipaAttribute;
		id: HaipaAttribute;
		inputMode: HaipaAttribute;
		isMap: HaipaBooleanAttribute;
		itemId: HaipaAttribute;
		itemProp: HaipaAttribute;
		itemRef: HaipaAttribute;
		itemScope: HaipaBooleanAttribute;
		itemType: HaipaAttribute;
		kind: HaipaAttribute;
		lang: LanguageAttribute;
		list: HaipaAttribute;
		loop: HaipaBooleanAttribute;
		manifest: HaipaAttribute;
		max: HaipaAttribute;
		maxLength: HaipaAttribute;
		media: HaipaAttribute;
		mediaGroup: HaipaAttribute;
		method: HaipaAttribute;
		min: HaipaAttribute;
		minLength: HaipaAttribute;
		multiple: HaipaBooleanAttribute;
		muted: HaipaBooleanAttribute;
		name: HaipaAttribute;
		noValidate: HaipaBooleanAttribute;
		open: HaipaBooleanAttribute;
		optimum: HaipaAttribute;
		ping: HaipaAttribute;
		placeholder: HaipaAttribute;
		poster: HaipaAttribute;
		preload: HaipaAttribute;
		radioGroup: HaipaAttribute;
		readOnly: HaipaBooleanAttribute;
		rel: LinkTypeAttribute;
		required: HaipaBooleanAttribute;
		role: HaipaAttribute;
		rows: HaipaAttribute;
		rowSpan: HaipaAttribute;
		sandbox: HaipaAttribute;
		scope: HaipaAttribute;
		scoped: HaipaAttribute;
		scrolling: HaipaAttribute;
		seamless: HaipaAttribute;
		selected: HaipaBooleanAttribute;
		shape: HaipaAttribute;
		size: HaipaAttribute;
		sizes: HaipaAttribute;
		sortable: HaipaAttribute;
		spellCheck: HaipaAttribute;
		src: HaipaAttribute;
		srcDoc: HaipaAttribute;
		srcSet: HaipaAttribute;
		start: HaipaAttribute;
		step: HaipaAttribute;
		tabIndex: HaipaAttribute;
		target: HaipaAttribute;
		translate: HaipaAttribute;
		type: HaipaAttribute;
		typeMustMatch: HaipaAttribute;
		useMap: HaipaAttribute;
		value: HaipaAttribute;
		version: HaipaAttribute;
		width: HaipaAttribute;
		wmode: HaipaAttribute;
		wrap: HaipaAttribute;
	}
}

export const baseAttributes = [
	'accept',
	'acceptCharset',
	'accessKey',
	'action',
	'allowFullScreen',
	'allowTransparency',
	'alt',
	'as',
	'async',
	'autoComplete',
	'autoFocus',
	'autoPlay',
	'cellPadding',
	'cellSpacing',
	'challenge',
	'charset',
	'checked',
	'className',
	'cols',
	'colSpan',
	'command',
	'content',
	'contentEditable',
	'contextMenu',
	'controls',
	'coords',
	'crossOrigin',
	'dateTime',
	'default',
	'defer',
	'dir',
	'disabled',
	'download',
	'draggable',
	'dropzone',
	'encType',
	'formAction',
	'formEncType',
	'formMethod',
	'formNoValidate',
	'formTarget',
	'frameBorder',
	'headers',
	'height',
	'hidden',
	'high',
	'href',
	'hrefLang',
	'htmlFor',
	'httpEquiv',
	'icon',
	'id',
	'inputMode',
	'isMap',
	'itemId',
	'itemProp',
	'itemRef',
	'itemScope',
	'itemType',
	'kind',
	'lang',
	'list',
	'loop',
	'manifest',
	'max',
	'maxLength',
	'media',
	'mediaGroup',
	'method',
	'min',
	'minLength',
	'multiple',
	'muted',
	'name',
	'noValidate',
	'open',
	'optimum',
	'ping',
	'placeholder',
	'poster',
	'preload',
	'radioGroup',
	'readOnly',
	'rel',
	'required',
	'role',
	'rows',
	'rowSpan',
	'sandbox',
	'scope',
	'scoped',
	'scrolling',
	'seamless',
	'selected',
	'shape',
	'size',
	'sizes',
	'sortable',
	'spellCheck',
	'src',
	'srcDoc',
	'srcSet',
	'start',
	'step',
	'tabIndex',
	'target',
	'translate',
	'type',
	'typeMustMatch',
	'useMap',
	'value',
	'version',
	'width',
	'wmode',
	'wrap'
]