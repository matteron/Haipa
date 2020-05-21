import { Tag } from '../tag';

declare module '../tag' {
	export interface Tag {
        forEach<T>(input: T[], callback: (tag: Tag, value: T, index: number, array: T[]) => void): Tag;
	}
}

Tag.prototype.forEach = function<T>(
	array: T[], 
	callback: (tag: Tag, value: T, index: number, array: T[]) => void
): Tag {
	array.forEach((val, i, arr) => {
		callback(this, val, i, arr);
	});
	return this;
}