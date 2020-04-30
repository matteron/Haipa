import { Attribute } from './models/attribute';
import { HaipaElement, Buffer } from './models/element';
import { renderFns } from './renderFns';

export class Tag implements HaipaElement {
	identifier: string = '';
	children: HaipaElement[] = [];
	attr: Attribute[] = [];
	buffer: Buffer = {
		nodes: [],
		attr: []
	};
	renderer = renderFns.standard;

	render(): string { return this.renderer(this) };

	element(name: string, inner?: Tag, renderer?: (tag: Tag) => string): Tag {
		const tag = new Tag();
		tag.identifier = name;
		tag.buffer = this.buffer;
		tag.render = this.render;
		if (inner) {
			tag.children = inner.buffer.nodes;
			tag.attr = inner.buffer.attr;
			inner.buffer.nodes = [];
			inner.buffer.attr = [];
		}
		if (renderer) {
			tag.renderer = renderer;
		}
		this.buffer.nodes.push(tag);
		return tag;
	}

	attribute(name: string, value: string): Tag {
		this.buffer.attr.push({
			name,
			value,
		});
		return this;
	}

	overlap(name: string, arg?: string | Tag): Tag {
		if (typeof arg === 'string') {
			return this.attribute(name, arg);
		} else {
			return this.element(name, arg);
		}
	}
}
