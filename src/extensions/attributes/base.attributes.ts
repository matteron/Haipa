import { HaipaAttribute, HaipaBooleanAttribute } from '../extension.type';
import { Attribute } from '../extension.decorator';
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

export class BaseAttributes {
	@Attribute() accept() {}
	@Attribute() acceptCharset() {}
	@Attribute() accessKey() {}
	@Attribute() action() {}
	@Attribute() allowFullScreen() {}
	@Attribute() allowTransparency() {}
	@Attribute() alt() {}
	@Attribute() as() {}
	@Attribute() async() {}
	@Attribute() autoComplete() {}
	@Attribute() autoFocus() {}
	@Attribute() autoPlay() {}
	@Attribute() cellPadding() {}
	@Attribute() cellSpacing() {}
	@Attribute() challenge() {}
	@Attribute() charset() {}
	@Attribute() checked() {}
	@Attribute() className() {}
	@Attribute() cols() {}
	@Attribute() colSpan() {}
	@Attribute() command() {}
	@Attribute() content() {}
	@Attribute() contentEditable() {}
	@Attribute() contextMenu() {}
	@Attribute() controls() {}
	@Attribute() coords() {}
	@Attribute() crossOrigin() {}
	@Attribute() dateTime() {}
	@Attribute() default() {}
	@Attribute() defer() {}
	@Attribute() dir() {}
	@Attribute() disabled() {}
	@Attribute() download() {}
	@Attribute() draggable() {}
	@Attribute() dropzone() {}
	@Attribute() encType() {}
	@Attribute() formAction() {}
	@Attribute() formEncType() {}
	@Attribute() formMethod() {}
	@Attribute() formNoValidate() {}
	@Attribute() formTarget() {}
	@Attribute() frameBorder() {}
	@Attribute() headers() {}
	@Attribute() height() {}
	@Attribute() hidden() {}
	@Attribute() high() {}
	@Attribute() href() {}
	@Attribute() hrefLang() {}
	@Attribute() htmlFor() {}
	@Attribute() httpEquiv() {}
	@Attribute() icon() {}
	@Attribute() id() {}
	@Attribute() inputMode() {}
	@Attribute() isMap() {}
	@Attribute() itemId() {}
	@Attribute() itemProp() {}
	@Attribute() itemRef() {}
	@Attribute() itemScope() {}
	@Attribute() itemType() {}
	@Attribute() kind() {}
	@Attribute() lang() {}
	@Attribute() list() {}
	@Attribute() loop() {}
	@Attribute() manifest() {}
	@Attribute() max() {}
	@Attribute() maxLength() {}
	@Attribute() media() {}
	@Attribute() mediaGroup() {}
	@Attribute() method() {}
	@Attribute() min() {}
	@Attribute() minLength() {}
	@Attribute() multiple() {}
	@Attribute() muted() {}
	@Attribute() name() {}
	@Attribute() noValidate() {}
	@Attribute() open() {}
	@Attribute() optimum() {}
	@Attribute() ping() {}
	@Attribute() placeholder() {}
	@Attribute() poster() {}
	@Attribute() preload() {}
	@Attribute() radioGroup() {}
	@Attribute() readOnly() {}
	@Attribute() rel() {}
	@Attribute() required() {}
	@Attribute() role() {}
	@Attribute() rows() {}
	@Attribute() rowSpan() {}
	@Attribute() sandbox() {}
	@Attribute() scope() {}
	@Attribute() scoped() {}
	@Attribute() scrolling() {}
	@Attribute() seamless() {}
	@Attribute() selected() {}
	@Attribute() shape() {}
	@Attribute() size() {}
	@Attribute() sizes() {}
	@Attribute() sortable() {}
	@Attribute() spellCheck() {}
	@Attribute() src() {}
	@Attribute() srcDoc() {}
	@Attribute() srcSet() {}
	@Attribute() start() {}
	@Attribute() step() {}
	@Attribute() tabIndex() {}
	@Attribute() target() {}
	@Attribute() translate() {}
	@Attribute() type() {}
	@Attribute() typeMustMatch() {}
	@Attribute() useMap() {}
	@Attribute() value() {}
	@Attribute() version() {}
	@Attribute() width() {}
	@Attribute() wmode() {}
	@Attribute() wrap() {}
}