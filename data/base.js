exports.baseTags = [
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
	'slot', 'template'
];

exports.baseAttr = [
	// A
	'abbr', 'accept', 'acceptCharset', 'accessKey', 'action', 'allowFullScreen', 'allowTransparency', 'alt', 'as', 'async', 'autoComplete', 'autoFocus', 'autoPlay',
	// C  NOTE: 'class' is replaced with 'classes' due to name collision.
	'cellPadding', 'cellSpacing', 'challenge', 'charset', 'checked', 'cite', 'className', 'cols', 'colSpan', 'command', 'content', 'contentEditable',
	'contextMenu', 'controls', 'coords', 'crossOrigin',
	// D
	'data', 'dateTime', 'default', 'defer', 'dir', 'disabled', 'download', 'draggable', 'dropzone',
	// E
	'encType',
	// F  NOTE: 'for' is replaced with 'isFor' due to name collision.
	'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget', 'frameBorder',
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
	'width', 'wmode', 'wrap'
];