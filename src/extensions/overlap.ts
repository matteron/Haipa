import { Tag } from '../tag';

declare module '../tag' {
	export interface Tag {
		abbr(value: string): Tag;
		abbr(inner?: Tag): Tag;
		cite(value: string): Tag;
		cite(inner?: Tag): Tag;
		clipPath(value: string): Tag;
		clipPath(inner?: Tag): Tag;
		data(label: string, value: string): Tag;
		data(inner?: Tag): Tag;
		filter(value: string): Tag;
		filter(inner?: Tag): Tag;
		form(value: string): Tag;
		form(inner?: Tag): Tag;
		label(value: string): Tag;
		label(inner?: Tag): Tag;
		mask(value: string): Tag;
		mask(inner?: Tag): Tag;
		path(value: string): Tag;
		path(inner?: Tag): Tag;
		pattern(value: string): Tag;
		pattern(inner?: Tag): Tag;
		span(value: string): Tag;
		span(inner?: Tag): Tag;
		style(value: string): Tag;
		style(inner?: Tag): Tag;
		title(value: string): Tag;
		title(inner?: Tag): Tag;
	}
}

Tag.prototype.abbr = function (arg?: string | Tag): Tag {
	return this.overlap('abbr', arg);
};

Tag.prototype.cite = function (arg?: string | Tag): Tag {
	return this.overlap('cite', arg);
};

Tag.prototype.clipPath = function (arg?: string | Tag): Tag {
	return this.overlap('clipPath', arg);
};

Tag.prototype.data = function(arg?: string | Tag, value?: string): Tag {
	if (typeof arg === 'string') {
		return this.attribute(`data-${arg}`, value || '');
	} else {
		return this.element('data', arg);
	}
}

Tag.prototype.filter = function (arg?: string | Tag): Tag {
	return this.overlap('filter', arg);
};

Tag.prototype.form = function (arg?: string | Tag): Tag {
	return this.overlap('form', arg);
};

Tag.prototype.label = function (arg?: string | Tag): Tag {
	return this.overlap('label', arg);
};

Tag.prototype.mask = function (arg?: string | Tag): Tag {
	return this.overlap('mask', arg);
};

Tag.prototype.path = function (arg?: string | Tag): Tag {
	return this.overlap('path', arg);
};

Tag.prototype.pattern = function (arg?: string | Tag): Tag {
	return this.overlap('pattern', arg);
};

Tag.prototype.span = function (arg?: string | Tag): Tag {
	return this.overlap('span', arg);
};

Tag.prototype.style = function (arg?: string | Tag): Tag {
	return this.overlap('style', arg);
};

Tag.prototype.title = function (arg?: string | Tag): Tag {
	return this.overlap('title', arg);
};