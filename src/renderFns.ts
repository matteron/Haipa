import { Tag } from "./tag";

const printChildren = (tag: Tag): string => tag.children.reduce((acc, cur) => acc + cur.render(), '');

const printAttributes = (tag: Tag): string => tag.attr.reduce(
    (acc, cur) => acc + ` ${cur.name}="${cur.value}"`,
    ''
);

const standard = (tag: Tag): string => `
<${tag.identifier}${printAttributes(tag)}>
    ${printChildren(tag)}
</${tag.identifier}>`;

const selfClosing = (tag: Tag): string => `<${tag.identifier}${printAttributes(tag)}/>`;

const docType = (tag: Tag): string => `<!DOCTYPE html>
${standard(tag)}`;

export const renderFns = {
    standard,
    selfClosing,
    docType
}