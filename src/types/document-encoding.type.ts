import { HaipaNode } from "../node";

export type DocumentEncoding = 'utf-8' | string;

export type DocumentEncodingAttribute = (encoding: DocumentEncoding) => HaipaNode;