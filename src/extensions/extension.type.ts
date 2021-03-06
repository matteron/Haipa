import { HaipaNode } from "../main/node";

export type HaipaElement = (content?: HaipaNode) => HaipaNode;
export type HaipaAttribute = (value: string) => HaipaNode;
export type HaipaBooleanAttribute = (value: boolean) => HaipaNode;

export interface HaipaExtensionContainer {
	elements?: string[];
	selfClosingElements?:  string[];
	attributes?: string[];
	overlap?: string[];
}
