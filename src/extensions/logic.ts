import { Tag } from '../tag';

declare module '../tag' {
	export interface Tag {
		forEach<T>(input: T[], callback: (tag: Tag, value: T, index: number, array: T[]) => void): Tag;
		if(condition: boolean, thenBranch: (tag: Tag) => void, elseBranch?: (tag: Tag) => void): Tag;
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

Tag.prototype.if = function(
	condition: boolean,
	thenBranch: (tag: Tag) => void,
	elseBranch?: (tag: Tag) => void
): Tag {
	if (condition) {
		thenBranch(this);
	} else if (elseBranch) {
		elseBranch(this);
	}
	return this;
}