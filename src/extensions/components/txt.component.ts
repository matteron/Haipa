import { HaipaExtension } from '../extension.decorator';
import { HaipaNode } from '../../main/node';
import { ElementModel } from '../../main/haipa.model';

declare module '../../main/node' {
	export interface HaipaNode {
		txt: (value: string) => HaipaNode;
	}
}

export class TxtComponent {
	@HaipaExtension()
	txt(thisArg: HaipaNode, value: string): HaipaNode {
		const el: ElementModel = {
			name: 'txt',
			render: () => value,
		}
		return thisArg.element(el);
	}
}