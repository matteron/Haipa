import './extensions/elements/baseElements';
import './extensions/elements/svgElements';
import './extensions/attributes/baseAttributes';
import './extensions/attributes/ariaAttributes';
import './extensions/attributes/svgAttributes';
import './extensions/attributes/eventAttributes';
import './extensions/components';
import './extensions/overlap';
import './extensions/logic';
import './extensions/txt';

import { Tag } from "./tag";

export const h = (innerText?: string) =>
	innerText ? new Tag().txt(innerText) : new Tag();
