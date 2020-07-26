import { HaipaNode } from "../node";

export type HaipaElement = (content?: HaipaNode) => HaipaNode;
export type HaipaAttribute = (value: string) => HaipaNode;
export type HaipaBooleanAttribute = (value: boolean) => HaipaNode;
