import { Tag } from '../tag';

declare module '../tag' {
	export interface Tag {
		txt(value: string): Tag;
	}
}

Tag.prototype.txt = function (value: string): Tag {
	return this.element('txt', undefined, () => value);
};