import { HaipaElement, HaipaAttribute } from '../extension.type';
import { HaipaExtension } from '../extension.decorator';
import { HaipaNode } from '../../main/node';
import { AttributeModel, ElementModel } from '../../main/haipa.model';

declare module '../../main/node' {

	type DataAttribute = (key: string, value: string) => HaipaNode;

	export interface HaipaNode {
		data: HaipaElement | DataAttribute;
	}
}

class DataComponent {
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