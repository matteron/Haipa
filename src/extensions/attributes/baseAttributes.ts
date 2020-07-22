import { Tag } from '../../tag';
import { DocumentEncoding } from '../../types/document-encoding.type';
import { Language } from '../../types/language.type';

declare module '../../tag' {
	export interface Tag {
		accept(value: string): Tag;
		acceptCharset(value: string): Tag;
		accessKey(value: string): Tag;
		action(value: string): Tag;
		allowFullScreen(value: string): Tag;
		allowTransparency(value: string): Tag;
		alt(value: string): Tag;
		as(value: string): Tag;
		async(value: string): Tag;
		autoComplete(value: string): Tag;
		autoFocus(value: string): Tag;
		autoPlay(value: string): Tag;
		class(value: string): Tag;
		cellPadding(value: string): Tag;
		cellSpacing(value: string): Tag;
		challenge(value: string): Tag;
		charset(value: DocumentEncoding): Tag;
		checked(value: string): Tag;
		className(value: string): Tag;
		cols(value: string): Tag;
		colSpan(value: string): Tag;
		command(value: string): Tag;
		content(value: string): Tag;
		contentEditable(value: string): Tag;
		contextMenu(value: string): Tag;
		controls(value: string): Tag;
		coords(value: string): Tag;
		crossOrigin(value: string): Tag;
		dateTime(value: string): Tag;
		default(value: string): Tag;
		defer(value: string): Tag;
		dir(value: string): Tag;
		disabled(value: string): Tag;
		download(value: string): Tag;
		draggable(value: string): Tag;
		dropzone(value: string): Tag;
		encType(value: string): Tag;
		for(value: string): Tag;
		formAction(value: string): Tag;
		formEncType(value: string): Tag;
		formMethod(value: string): Tag;
		formNoValidate(value: string): Tag;
		formTarget(value: string): Tag;
		frameBorder(value: string): Tag;
		headers(value: string): Tag;
		height(value: string): Tag;
		hidden(value: string): Tag;
		high(value: string): Tag;
		href(value: string): Tag;
		hrefLang(value: Language): Tag;
		htmlFor(value: string): Tag;
		httpEquiv(value: string): Tag;
		icon(value: string): Tag;
		id(value: string): Tag;
		inputMode(value: string): Tag;
		isMap(value: string): Tag;
		itemId(value: string): Tag;
		itemProp(value: string): Tag;
		itemRef(value: string): Tag;
		itemScope(value: string): Tag;
		itemType(value: string): Tag;
		kind(value: string): Tag;
		lang(value: Language): Tag;
		list(value: string): Tag;
		loop(value: string): Tag;
		manifest(value: string): Tag;
		max(value: string): Tag;
		maxLength(value: string): Tag;
		media(value: string): Tag;
		mediaGroup(value: string): Tag;
		method(value: string): Tag;
		min(value: string): Tag;
		minLength(value: string): Tag;
		multiple(value: string): Tag;
		muted(value: string): Tag;
		name(value: string): Tag;
		noValidate(value: string): Tag;
		open(value: string): Tag;
		optimum(value: string): Tag;
		ping(value: string): Tag;
		placeholder(value: string): Tag;
		poster(value: string): Tag;
		preload(value: string): Tag;
		radioGroup(value: string): Tag;
		readOnly(value: string): Tag;
		rel(value: string): Tag;
		required(value: string): Tag;
		role(value: string): Tag;
		rows(value: string): Tag;
		rowSpan(value: string): Tag;
		sandbox(value: string): Tag;
		scope(value: string): Tag;
		scoped(value: string): Tag;
		scrolling(value: string): Tag;
		seamless(value: string): Tag;
		selected(value: string): Tag;
		shape(value: string): Tag;
		size(value: string): Tag;
		sizes(value: string): Tag;
		sortable(value: string): Tag;
		spellCheck(value: string): Tag;
		src(value: string): Tag;
		srcDoc(value: string): Tag;
		srcSet(value: string): Tag;
		start(value: string): Tag;
		step(value: string): Tag;
		tabIndex(value: string): Tag;
		target(value: string): Tag;
		translate(value: string): Tag;
		type(value: string): Tag;
		typeMustMatch(value: string): Tag;
		useMap(value: string): Tag;
		value(value: string): Tag;
		version(value: string): Tag;
		width(value: string): Tag;
		wmode(value: string): Tag;
		wrap(value: string): Tag;
	}
}

Tag.prototype.accept = function(value: string): Tag { return this.attribute('accept', value); }
Tag.prototype.acceptCharset = function(value: string): Tag { return this.attribute('acceptCharset', value); }
Tag.prototype.accessKey = function(value: string): Tag { return this.attribute('accessKey', value); }
Tag.prototype.action = function(value: string): Tag { return this.attribute('action', value); }
Tag.prototype.allowFullScreen = function(value: string): Tag { return this.attribute('allowFullScreen', value); }
Tag.prototype.allowTransparency = function(value: string): Tag { return this.attribute('allowTransparency', value); }
Tag.prototype.alt = function(value: string): Tag { return this.attribute('alt', value); }
Tag.prototype.as = function(value: string): Tag { return this.attribute('as', value); }
Tag.prototype.async = function(value: string): Tag { return this.attribute('async', value); }
Tag.prototype.autoComplete = function(value: string): Tag { return this.attribute('autoComplete', value); }
Tag.prototype.autoFocus = function(value: string): Tag { return this.attribute('autoFocus', value); }
Tag.prototype.autoPlay = function(value: string): Tag { return this.attribute('autoPlay', value); }
Tag.prototype.class = function(value: string): Tag { return this.attribute('class', value); }
Tag.prototype.cellPadding = function(value: string): Tag { return this.attribute('cellPadding', value); }
Tag.prototype.cellSpacing = function(value: string): Tag { return this.attribute('cellSpacing', value); }
Tag.prototype.challenge = function(value: string): Tag { return this.attribute('challenge', value); }
Tag.prototype.charset = function(value: DocumentEncoding): Tag { return this.attribute('charset', value); }
Tag.prototype.checked = function(value: string): Tag { return this.attribute('checked', value); }
Tag.prototype.className = function(value: string): Tag { return this.attribute('className', value); }
Tag.prototype.cols = function(value: string): Tag { return this.attribute('cols', value); }
Tag.prototype.colSpan = function(value: string): Tag { return this.attribute('colSpan', value); }
Tag.prototype.command = function(value: string): Tag { return this.attribute('command', value); }
Tag.prototype.content = function(value: string): Tag { return this.attribute('content', value); }
Tag.prototype.contentEditable = function(value: string): Tag { return this.attribute('contentEditable', value); }
Tag.prototype.contextMenu = function(value: string): Tag { return this.attribute('contextMenu', value); }
Tag.prototype.controls = function(value: string): Tag { return this.attribute('controls', value); }
Tag.prototype.coords = function(value: string): Tag { return this.attribute('coords', value); }
Tag.prototype.crossOrigin = function(value: string): Tag { return this.attribute('crossOrigin', value); }
Tag.prototype.dateTime = function(value: string): Tag { return this.attribute('dateTime', value); }
Tag.prototype.default = function(value: string): Tag { return this.attribute('default', value); }
Tag.prototype.defer = function(value: string): Tag { return this.attribute('defer', value); }
Tag.prototype.dir = function(value: string): Tag { return this.attribute('dir', value); }
Tag.prototype.disabled = function(value: string): Tag { return this.attribute('disabled', value); }
Tag.prototype.download = function(value: string): Tag { return this.attribute('download', value); }
Tag.prototype.draggable = function(value: string): Tag { return this.attribute('draggable', value); }
Tag.prototype.dropzone = function(value: string): Tag { return this.attribute('dropzone', value); }
Tag.prototype.encType = function(value: string): Tag { return this.attribute('encType', value); }
Tag.prototype.for = function(value: string): Tag { return this.attribute('for', value); }
Tag.prototype.formAction = function(value: string): Tag { return this.attribute('formAction', value); }
Tag.prototype.formEncType = function(value: string): Tag { return this.attribute('formEncType', value); }
Tag.prototype.formMethod = function(value: string): Tag { return this.attribute('formMethod', value); }
Tag.prototype.formNoValidate = function(value: string): Tag { return this.attribute('formNoValidate', value); }
Tag.prototype.formTarget = function(value: string): Tag { return this.attribute('formTarget', value); }
Tag.prototype.frameBorder = function(value: string): Tag { return this.attribute('frameBorder', value); }
Tag.prototype.headers = function(value: string): Tag { return this.attribute('headers', value); }
Tag.prototype.height = function(value: string): Tag { return this.attribute('height', value); }
Tag.prototype.hidden = function(value: string): Tag { return this.attribute('hidden', value); }
Tag.prototype.high = function(value: string): Tag { return this.attribute('high', value); }
Tag.prototype.href = function(value: string): Tag { return this.attribute('href', value); }
Tag.prototype.hrefLang = function(value: Language): Tag { return this.attribute('hrefLang', value); }
Tag.prototype.htmlFor = function(value: string): Tag { return this.attribute('htmlFor', value); }
Tag.prototype.httpEquiv = function(value: string): Tag { return this.attribute('httpEquiv', value); }
Tag.prototype.icon = function(value: string): Tag { return this.attribute('icon', value); }
Tag.prototype.id = function(value: string): Tag { return this.attribute('id', value); }
Tag.prototype.inputMode = function(value: string): Tag { return this.attribute('inputMode', value); }
Tag.prototype.isMap = function(value: string): Tag { return this.attribute('isMap', value); }
Tag.prototype.itemId = function(value: string): Tag { return this.attribute('itemId', value); }
Tag.prototype.itemProp = function(value: string): Tag { return this.attribute('itemProp', value); }
Tag.prototype.itemRef = function(value: string): Tag { return this.attribute('itemRef', value); }
Tag.prototype.itemScope = function(value: string): Tag { return this.attribute('itemScope', value); }
Tag.prototype.itemType = function(value: string): Tag { return this.attribute('itemType', value); }
Tag.prototype.kind = function(value: string): Tag { return this.attribute('kind', value); }
Tag.prototype.lang = function(value: Language): Tag { return this.attribute('lang', value); }
Tag.prototype.list = function(value: string): Tag { return this.attribute('list', value); }
Tag.prototype.loop = function(value: string): Tag { return this.attribute('loop', value); }
Tag.prototype.manifest = function(value: string): Tag { return this.attribute('manifest', value); }
Tag.prototype.max = function(value: string): Tag { return this.attribute('max', value); }
Tag.prototype.maxLength = function(value: string): Tag { return this.attribute('maxLength', value); }
Tag.prototype.media = function(value: string): Tag { return this.attribute('media', value); }
Tag.prototype.mediaGroup = function(value: string): Tag { return this.attribute('mediaGroup', value); }
Tag.prototype.method = function(value: string): Tag { return this.attribute('method', value); }
Tag.prototype.min = function(value: string): Tag { return this.attribute('min', value); }
Tag.prototype.minLength = function(value: string): Tag { return this.attribute('minLength', value); }
Tag.prototype.multiple = function(value: string): Tag { return this.attribute('multiple', value); }
Tag.prototype.muted = function(value: string): Tag { return this.attribute('muted', value); }
Tag.prototype.name = function(value: string): Tag { return this.attribute('name', value); }
Tag.prototype.noValidate = function(value: string): Tag { return this.attribute('noValidate', value); }
Tag.prototype.open = function(value: string): Tag { return this.attribute('open', value); }
Tag.prototype.optimum = function(value: string): Tag { return this.attribute('optimum', value); }
Tag.prototype.ping = function(value: string): Tag { return this.attribute('ping', value); }
Tag.prototype.placeholder = function(value: string): Tag { return this.attribute('placeholder', value); }
Tag.prototype.poster = function(value: string): Tag { return this.attribute('poster', value); }
Tag.prototype.preload = function(value: string): Tag { return this.attribute('preload', value); }
Tag.prototype.radioGroup = function(value: string): Tag { return this.attribute('radioGroup', value); }
Tag.prototype.readOnly = function(value: string): Tag { return this.attribute('readOnly', value); }
Tag.prototype.rel = function(value: string): Tag { return this.attribute('rel', value); }
Tag.prototype.required = function(value: string): Tag { return this.attribute('required', value); }
Tag.prototype.role = function(value: string): Tag { return this.attribute('role', value); }
Tag.prototype.rows = function(value: string): Tag { return this.attribute('rows', value); }
Tag.prototype.rowSpan = function(value: string): Tag { return this.attribute('rowSpan', value); }
Tag.prototype.sandbox = function(value: string): Tag { return this.attribute('sandbox', value); }
Tag.prototype.scope = function(value: string): Tag { return this.attribute('scope', value); }
Tag.prototype.scoped = function(value: string): Tag { return this.attribute('scoped', value); }
Tag.prototype.scrolling = function(value: string): Tag { return this.attribute('scrolling', value); }
Tag.prototype.seamless = function(value: string): Tag { return this.attribute('seamless', value); }
Tag.prototype.selected = function(value: string): Tag { return this.attribute('selected', value); }
Tag.prototype.shape = function(value: string): Tag { return this.attribute('shape', value); }
Tag.prototype.size = function(value: string): Tag { return this.attribute('size', value); }
Tag.prototype.sizes = function(value: string): Tag { return this.attribute('sizes', value); }
Tag.prototype.sortable = function(value: string): Tag { return this.attribute('sortable', value); }
Tag.prototype.spellCheck = function(value: string): Tag { return this.attribute('spellCheck', value); }
Tag.prototype.src = function(value: string): Tag { return this.attribute('src', value); }
Tag.prototype.srcDoc = function(value: string): Tag { return this.attribute('srcDoc', value); }
Tag.prototype.srcSet = function(value: string): Tag { return this.attribute('srcSet', value); }
Tag.prototype.start = function(value: string): Tag { return this.attribute('start', value); }
Tag.prototype.step = function(value: string): Tag { return this.attribute('step', value); }
Tag.prototype.tabIndex = function(value: string): Tag { return this.attribute('tabIndex', value); }
Tag.prototype.target = function(value: string): Tag { return this.attribute('target', value); }
Tag.prototype.translate = function(value: string): Tag { return this.attribute('translate', value); }
Tag.prototype.type = function(value: string): Tag { return this.attribute('type', value); }
Tag.prototype.typeMustMatch = function(value: string): Tag { return this.attribute('typeMustMatch', value); }
Tag.prototype.useMap = function(value: string): Tag { return this.attribute('useMap', value); }
Tag.prototype.value = function(value: string): Tag { return this.attribute('value', value); }
Tag.prototype.version = function(value: string): Tag { return this.attribute('version', value); }
Tag.prototype.width = function(value: string): Tag { return this.attribute('width', value); }
Tag.prototype.wmode = function(value: string): Tag { return this.attribute('wmode', value); }
Tag.prototype.wrap = function(value: string): Tag { return this.attribute('wrap', value); }
