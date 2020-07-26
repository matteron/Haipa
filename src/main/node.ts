import { renderElements } from "./render-functions";
import { ElementModel, AttributeModel } from "./haipa.model";

export class HaipaNode {
	elements: ElementModel[] = [];
	attributes: AttributeModel[] = [];

	element(val: ElementModel): HaipaNode {
		this.elements.push(val);
		return this;
	}

	attribute(val: AttributeModel): HaipaNode {
		this.attributes.push(val);
		return this;
	}

	overlap(val: ElementModel | AttributeModel): HaipaNode {
		'value' in val
			? this.attributes.push(val)
			: this.elements.push(val);
		return this;
	}

	render(): string {
		return renderElements(this.elements);
	}
}