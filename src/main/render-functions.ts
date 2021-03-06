import { AttributeModel, ElementModel } from "./haipa.model";


function renderAttribute(attribute: AttributeModel): string {
	return typeof attribute.value === 'boolean'
		? (attribute.value ? attribute.name : '')
		: `${attribute.name}="${attribute.value}"`;
}

function renderAttributes(element: ElementModel): string {
	return element.content?.attributes?.reduce((acc, cur) => acc + ` ${renderAttribute(cur)}`, '') ?? '';
}

function renderElement(element: ElementModel): string {
	if (element.name === 'txt') { return element.content?.attributes[0].value as string }
	const start = `<${element.name}${renderAttributes(element)}`;
	return element.selfClosing
		? `${start}/>`
		: `${start}>${(element.content?.render?.() ?? '')}</${element.name}>`
}

export function renderElements(elements: ElementModel[]): string {
	return elements.reduce((acc, cur) => acc + renderElement(cur), '');
}
