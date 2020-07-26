import { h } from '../..';
import { HaipaExtension } from '../extension.decorator';
import { HaipaNode } from '../../main/node';

declare module '../../main/node' {
	export interface HaipaNode {
		doctype: (value?: string) => HaipaNode;
	}
}

class DoctypeComponent {
	@HaipaExtension()
	doctype(thisArg: HaipaNode, value: string = 'html'): HaipaNode {
		return thisArg.txt(`<!DOCTYPE ${value}>`);
	}
}
