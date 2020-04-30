import { Tag } from '../../tag';

declare module '../../tag' {
	export interface Tag {
		txt(value: string): Tag;
	}
}

Tag.prototype.txt = function (value: string): Tag {
	const renderer = (_: Tag) => value;
	return this.element('txt', undefined, renderer);
};