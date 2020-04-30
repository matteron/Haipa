import { Attribute } from "./attribute";

export interface Buffer {
    nodes: HaipaElement[];
    attr: Attribute[];
}

export interface HaipaElement {
    identifier: string;
    children: HaipaElement[];
    attr: Attribute[];
    buffer: Buffer;
    render: () => string;
    // element: (name: string, inner?: HaipaElement) => HaipaElement;
    // attribute: (name: string, value: string) => HaipaElement;
    // overlap: (name: string, arg?: string | HaipaElement) => HaipaElement;
}