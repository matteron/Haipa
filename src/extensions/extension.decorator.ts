import { HaipaNode } from "../main/node";
import { ElementModel, AttributeModel } from "../main/haipa.model";
import { HaipaExtensionContainer } from "./extension.type";

const ctr: (new () => HaipaNode) = HaipaNode;

export function HaipaExtension() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      const originalFunction = descriptor.value as Function;

      ctr.prototype[propertyKey] = function(...args: any){
        return originalFunction(this, ...args);
      }
    }
}

function kebabToCamel(s: string) {
	return s.replace(/([-_][a-z])/ig, ($1) => {
		return $1.toUpperCase().replace('-', '');
	});
};

function extendElements(set: string[], selfClosing?: boolean) {
	set.forEach(e => {
		ctr.prototype[kebabToCamel(e)] = function(content?: HaipaNode): HaipaNode {
			const element: ElementModel = {
				name: e,
				content,
				selfClosing
			}
			return this.element(element);
		}
	});
}

function extendAttributes(set: string[]) {
	set.forEach(e => {
		ctr.prototype[kebabToCamel(e)] = function(value: string | boolean): HaipaNode {
			const attribute: AttributeModel = {
				name: e,
				value
			}
			return this.attribute(attribute);
		}
	});
}

function extendOverlapping(set: string[]) {
	set.forEach(e => {
		ctr.prototype[kebabToCamel(e)] = function(value: string | boolean | HaipaNode): HaipaNode {
			if (typeof value === 'boolean' || typeof value === 'string') {
				const attribute: AttributeModel = {
					name: e,
					value
				};
				return this.attribute(attribute);
			} else {
				const element: ElementModel = {
					name: kebabToCamel(e),
					content: value as HaipaNode,
				};
				return this.element(element);
			}
		}
	});
}

export function ExtendHaipa() {
	
	return function(target: HaipaExtensionContainer) {
		extendElements(target?.elements ?? []);
		extendElements(target?.selfClosingElements ?? [], true);
		extendAttributes(target?.attributes ?? []);
		extendOverlapping(target?.overlap ?? []);
	}
}