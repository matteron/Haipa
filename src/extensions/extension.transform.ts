// Dependencies:
import { tsquery } from '@phenomnomnominal/tsquery';
import { tstemplate } from '@phenomnomnominal/tstemplate';
import { createIdentifier, createLiteral, createToken, SyntaxKind, visitEachChild, visitNode } from 'typescript';
import { Node, PropertyDeclaration, SourceFile, TransformationContext, Transformer, TransformerFactory } from 'typescript';

// Constants:
const CAST_PROPERTIES_QUERY = `PropertyDeclaration:has(Decorator:has(Identifier[name="Value"]))`;
const RESULT_QUERY = 'PropertyDeclaration, GetAccessor, SetAccessor';
const OTHER_DECORATORS_QUERY = `Decorator:has(Decorator > CallExpression[expression.name!="Value"])`;
const CASTERS_QUERY = 'CallExpression[expression.name!="Value"], CallExpression[expression.name="Value"] > Identifier[name!="Value"], CallExpression[expression.name="Value"] > ArrayLiteralExpression > Identifier[name!="Value"]';
const CAST_RESULT_EXPRESSION_QUERY = 'ExpressionStatement';
const GETTER_CAST_QUERY = 'Identifier[name="isNotNull"]';

const GETTER_SETTER_TEMPLATE = tstemplate.compile(`
    class Template {
        private <%= privateName %>: <%= type %>;
        public get <%= name %> ():  <%= type %> {
            let val = this.<%= privateName %>
            return val;
        }
        public set <%= name %> (value: <%= type %>) {
            let val = value;
            this.<%= privateName %> = val;
        }
    }
`);

const CAST_CALL_TEMPLATE = tstemplate.compile(`
    val = <%= name %>(val,  <%= propertyName %>);
`);

export function transformer (source: SourceFile): TransformerFactory<Node> {
    const castProperties = tsquery(source, CAST_PROPERTIES_QUERY);
    return valueDecoratorToGetterAndSetterFactory(castProperties);
}

export function valueDecoratorToGetterAndSetterFactory (nodes: Array<Node>): TransformerFactory<Node> {
    return function (context: TransformationContext): Transformer<Node> {
        return function (node: Node): Node {
            return visitNode(node, visit);
        };

        function visit (node: Node): Node | Array<Node> {
            node = visitEachChild(node, visit, context);
            if (nodes.includes(node)) {
                // Create the base structure of the new getter/setter:
                const property = node as PropertyDeclaration;
                const propertyName = property.name.getText();
                const [internal, getter, setter] = tsquery(GETTER_SETTER_TEMPLATE({
                    name: property.name,
                    privateName: createIdentifier(`_${propertyName}`),
                    type: property.type! || createToken(SyntaxKind.AnyKeyword)
                }), RESULT_QUERY);

                // Re-attach any other decorators:
                getter.decorators = tsquery(node, OTHER_DECORATORS_QUERY);

                // Find caster function names:
                const casterNodes = tsquery(node, CASTERS_QUERY);

                // Create the CallExpressions for each cast call:
                const castCalls = casterNodes.map(casterNode => {
                    const [call] = tsquery(CAST_CALL_TEMPLATE({
                        name: casterNode,
                        propertyName: createLiteral(propertyName),
                    }), CAST_RESULT_EXPRESSION_QUERY);
                    return call;
                });
                const getters = castCalls.filter(call => tsquery(call, GETTER_CAST_QUERY).length);
                const setters = castCalls.filter(call => !getters.includes(call));

                // Insert the cast calls into the getter and setter bodies:
                getter.body.statements.splice(1, 0, ...getters);
                setter.body.statements.splice(1, 0, ...setters);

                // Return the new AST nodes to replace the old one:
                return [internal, getter, setter];
            }
            return node;
        }
    };
}