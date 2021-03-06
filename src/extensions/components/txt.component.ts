import { HaipaExtension } from '../extension.decorator';
import { HaipaNode } from '../../main/node';
import { ElementModel } from '../../main/haipa.model';
import { h } from '../..';

declare module '../../main/node' {
	export interface HaipaNode {
		txt: (value: string) => HaipaNode;
	}
}

class TxtComponent {
	@HaipaExtension()
	txt(thisArg: HaipaNode, value: string): HaipaNode {
		const el: ElementModel = {
			name: 'txt',
			content: h().value(value)
		}
		return thisArg.element(el);
	}
}