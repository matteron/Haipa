import { HaipaElement, HaipaAttribute } from '../extension.type';

declare module '../../main/node' {
	export interface HaipaNode {
		abbr: HaipaElement | HaipaAttribute;
		cite: HaipaElement | HaipaAttribute;
		clipPath: HaipaElement | HaipaAttribute;
		filter: HaipaElement | HaipaAttribute;
		form: HaipaElement | HaipaAttribute;
		label: HaipaElement | HaipaAttribute;
		mask: HaipaElement | HaipaAttribute;
		path: HaipaElement | HaipaAttribute;
		pattern: HaipaElement | HaipaAttribute;
		span: HaipaElement | HaipaAttribute;
		style: HaipaElement | HaipaAttribute;
		title: HaipaElement | HaipaAttribute;
	}
}

export const overlappingComponents = [
	'abbr',
	'cite',
	'clip-path',
	'filter',
	'form',
	'label',
	'mask',
	'path',
	'pattern',
	'span',
	'style',
	'title'
];
