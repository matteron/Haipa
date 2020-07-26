import { HaipaExtension } from '../extension.decorator';
import { HaipaNode } from '../../node';
import { ElementModel } from '../../models/element.model';

declare module '../../node' {
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