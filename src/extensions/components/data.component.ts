import { HaipaElement, HaipaAttribute } from '../extension.type';
import { HaipaExtension } from '../extension.decorator';
import { HaipaNode } from '../../node';
import { ElementModel } from '../../models/element.model';
import { AttributeModel } from '../../models/attribute.model';

declare module '../../node' {

	type DataAttribute = (key: string, value: string) => HaipaNode;

	export interface HaipaNode {
		data: HaipaElement | DataAttribute;
	}
}

export class DataComponent {
	@HaipaExtension()
	data(thisArg: HaipaNode, key: string | HaipaNode, value?: string): HaipaNode {
		if (typeof value === 'string') {
			const attribute: AttributeModel = {
				name: `data-${key}`,
				value
			};
			return thisArg.attribute(attribute);
		} else {
			const element: ElementModel = {
				name: 'data',
				content: key as HaipaNode,
			};
			return thisArg.element(element);
		}
	}
}