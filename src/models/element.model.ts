import { HaipaNode } from "../node";

export interface ElementModel {
	name: string;
	selfClosing?: boolean;
	content?: HaipaNode;
	render?: () => string;
}