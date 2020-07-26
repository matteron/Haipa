import { HaipaElement, HaipaAttribute } from '../extension.type';
import { Overlap } from '../extension.decorator';

declare module '../../node' {
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

export class OverlappingComponents {
	@Overlap() abbr() {}
	@Overlap() cite() {}
	@Overlap('clip-path') clipPath() {}
	@Overlap() filter() {}
	@Overlap() form() {}
	@Overlap() label() {}
	@Overlap() mask() {}
	@Overlap() path() {}
	@Overlap() pattern() {}
	@Overlap() span() {}
	@Overlap() style() {}
	@Overlap() title() {}
}