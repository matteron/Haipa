import './extensions/components/txt.component';
import './extensions/components/data.component';
import './extensions/components/logic.components';
import './extensions/components/doctype.component';
import './extensions/components/shortcut.components';
import './extensions/extension.container';
import { HaipaNode } from './main/node';

export const h = (innerText?: string) =>
	innerText ? new HaipaNode().txt(innerText) : new HaipaNode();