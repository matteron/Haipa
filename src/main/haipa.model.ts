import { HaipaNode } from "./node";

export interface AttributeModel {
	name: string;
	value: string | boolean;
}

export interface ElementModel {
	name: string;
	selfClosing?: boolean;
	content?: HaipaNode;
	render?: () => string;
}