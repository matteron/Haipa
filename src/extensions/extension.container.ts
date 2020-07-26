
import { ExtendHaipa } from './extension.decorator';
import { HaipaExtensionContainer } from './extension.type';
import { baseElements, selfClosing } from './elements/base.elements';
import { svgElements } from './elements/svg.elements';
import { ariaAttributes } from './attributes/aria.attributes';
import { baseAttributes } from './attributes/base.attributes';
import { eventAttributes } from './attributes/event.attributes';
import { overlappingComponents } from './components/overlap.components';
import { svgAttributes } from './attributes/svg.attributes';

@ExtendHaipa()
class HaipaExtensions implements HaipaExtensionContainer {
	static elements = [...baseElements, ...svgElements];
	static selfClosingElements = selfClosing;
	static attributes = [...baseAttributes, ...svgAttributes, ...ariaAttributes, ...eventAttributes];
	static overlap = overlappingComponents;
}

