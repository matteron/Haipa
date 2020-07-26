import { HaipaNode } from "../node";
import { ElementModel } from "../models/element.model";
import { AttributeModel } from "../models/attribute.model";

export function Element(selfClosing?: boolean) {
	const ctr: (new () => HaipaNode) = HaipaNode;
	return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		ctr.prototype[propertyKey] = function(content?: HaipaNode): HaipaNode {
			const element: ElementModel = {
				name: propertyKey,
				content,
				selfClosing
			}
			return this.element(element);
		}
	}
}

export function Attribute(key?: string) {
	const ctr: (new () => HaipaNode) = HaipaNode;
	return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		ctr.prototype[propertyKey] = function(value: string | boolean): HaipaNode {
			const attribute: AttributeModel = {
				name: (key ? key : propertyKey),
				value: value
			}
			return this.attribute(attribute);
		}
	}
}

export function Overlap(key?: string, selfClosing?: boolean) {
	const ctr: (new () => HaipaNode) = HaipaNode;
	return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		ctr.prototype[propertyKey] = function(value: string | boolean | HaipaNode): HaipaNode {
			if (typeof value === 'boolean' || typeof value === 'string') {
				const attribute: AttributeModel = {
					name: (key ? key : propertyKey),
					value
				};
				return this.attribute(attribute);
			} else {
				const element: ElementModel = {
					name: propertyKey,
					content: value as HaipaNode,
					selfClosing
				};
				return this.element(element);
			}
		}
	}
}

export function HaipaExtension() {
	const ctr: (new () => HaipaNode) = HaipaNode;
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      const originalFunction = descriptor.value as Function;

      ctr.prototype[propertyKey] = function(...args: any){
        return originalFunction(this, ...args);
      }
    }
}
