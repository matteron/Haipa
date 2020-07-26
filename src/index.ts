import './extensions/elements/base.elements';
import './extensions/elements/svg.elements';
import './extensions/attributes/base.attributes';
import './extensions/attributes/svg.attributes';
import './extensions/attributes/aria.attributes';
import './extensions/attributes/event.attributes';
import './extensions/components/overlap.components';
import './extensions/components/txt.component';
import './extensions/components/data.component';
import './extensions/components/logic.components';
import './extensions/components/shortcut.components';
import { HaipaNode } from './main/node';

export const h = (innerText?: string) =>
	innerText ? new HaipaNode().txt(innerText) : new HaipaNode();