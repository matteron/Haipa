const clipboardy = require('clipboardy');
const base = require('./data/base');
const svg = require('./data/svg');
const aria = require('./data/aria');
const events = require('./data/events');

const args = process.argv.slice(2).map(a => a.split('=')).reduce((acc, cur) => {
	acc[cur[0]] = cur[1];
	return acc;
}, {});

const generic = (data, callback) => {
	let result = '';
	data.forEach(d => {
		result += callback(d) + '\n'
	});
	clipboardy.writeSync(result);
}

const iTag = (d) => {
	return `${d}(inner?: Tag): Tag;`
}

const tag = (d) => {
	return `Tag.prototype.${d} = function(inner?: Tag): Tag { return this.element('${d}', inner) };`
}

function kebabToCamel(s) {
	return s.replace(/([-_][a-z])/ig, ($1) => {
		return $1.toUpperCase().replace('-', '');
	});
};

const iAttr = (d) => {
	return `${kebabToCamel(d)}(value: string): Tag;`
}

const attr = (d) => {
	return `Tag.prototype.${kebabToCamel(d)} = function(value: string): Tag { return this.attribute('${d}', value); }`
}

const iEl = (d) => `${d}: HaipaElement;`;
const el = (d) => `@Element() ${d}() {}`;
const iAt = (d) => `${kebabToCamel(d)}: HaipaAttribute;`;
const at = (d) => `@Attribute(${d.includes('-') ? "'" + d + "'" : ''}) ${kebabToCamel(d)}() {}`;

const ariaGen = (d) => `@Attribute('${d}') ${kebabToCamel(d)}() {}`

const renderers = {
	'interface': {
		'tags': iEl,
		'attr': iAt,
	},
	'func': {
		'tags': el,
		'attr': at,
	}
};

const chooseData = (set, key) => {
	const allData = {
		base: base,
		aria: aria,
		svg: svg,
		events: events,
		all: {
			tags: [
				...base.tags,
				...svg.tags
			],
			attr: [
				...base.attr,
				...svg.tags,
				...aria.attr,
				...events.attr
			]
		}
	};
	return allData[key][set];
}

const start = () => {
	const type = args.type ? args.type : 'func';
	const set = args.set ? args.set : 'tags';
	const data = args.data
		? chooseData(set, args.data)
		: chooseData(set, 'all')
	const renderer = renderers[type][set];
	console.log(type, set, args.data);
	generic(data, renderer);
};

start();