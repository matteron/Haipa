import { HaipaAttribute, HaipaBooleanAttribute } from '../extension.type';

declare module '../../main/node' {
	export interface HaipaNode {
		ariaAutoComplete: HaipaAttribute;
		ariaChecked: HaipaAttribute;
		ariaCurrent: HaipaAttribute;
		ariaDisabled: HaipaAttribute;
		ariaErrorMessage: HaipaAttribute;
		ariaExpanded: HaipaAttribute;
		ariaHasPopup: HaipaAttribute;
		ariaHidden: HaipaAttribute;
		ariaInvalid: HaipaAttribute;
		ariaLabel: HaipaAttribute;
		ariaLevel: HaipaAttribute;
		ariaModal: HaipaAttribute;
		ariaMultiline: HaipaAttribute;
		ariaMultiSelectable: HaipaAttribute;
		ariaOrientation: HaipaAttribute;
		ariaPlaceholder: HaipaAttribute;
		ariaPressed: HaipaAttribute;
		ariaReadonly: HaipaAttribute;
		ariaRequired: HaipaAttribute;
		ariaSelected: HaipaAttribute;
		ariaSort: HaipaAttribute;
		ariaValueMax: HaipaAttribute;
		ariaValueMin: HaipaAttribute;
		ariaValueNow: HaipaAttribute;
		ariaValueText: HaipaAttribute;
		ariaLive: HaipaAttribute;
		ariaRelevant: HaipaAttribute;
		ariaAtomic: HaipaAttribute;
		ariaBusy: HaipaAttribute;
		ariaDropEffect: HaipaAttribute;
		ariaDragged: HaipaAttribute;
		ariaActiveDescendant: HaipaAttribute;
		ariaColCount: HaipaAttribute;
		ariaColIndex: HaipaAttribute;
		ariaColSpan: HaipaAttribute;
		ariaControls: HaipaAttribute;
		ariaDescribedBy: HaipaAttribute;
		ariaDetails: HaipaAttribute;
		ariaFlowTo: HaipaAttribute;
		ariaLabelledBy: HaipaAttribute;
		ariaOwns: HaipaAttribute;
		ariaPosInSet: HaipaAttribute;
		ariaRowCount: HaipaAttribute;
		ariaRowIndex: HaipaAttribute;
		ariaRowSpan: HaipaAttribute;
		ariaSetSize: HaipaAttribute;
	}
}

export const ariaAttributes = [
	'aria-autoComplete',
	'aria-checked',
	'aria-current',
	'aria-disabled',
	'aria-errorMessage',
	'aria-expanded',
	'aria-hasPopup',
	'aria-hidden',
	'aria-invalid',
	'aria-label',
	'aria-level',
	'aria-modal',
	'aria-multiline',
	'aria-multiSelectable',
	'aria-orientation',
	'aria-placeholder',
	'aria-pressed',
	'aria-readonly',
	'aria-required',
	'aria-selected',
	'aria-sort',
	'aria-valueMax',
	'aria-valueMin',
	'aria-valueNow',
	'aria-valueText',
	'aria-live',
	'aria-relevant',
	'aria-atomic',
	'aria-busy',
	'aria-dropEffect',
	'aria-dragged',
	'aria-activeDescendant',
	'aria-colCount',
	'aria-colIndex',
	'aria-colSpan',
	'aria-controls',
	'aria-describedBy',
	'aria-details',
	'aria-flowTo',
	'aria-labelledBy',
	'aria-owns',
	'aria-posInSet',
	'aria-rowCount',
	'aria-rowIndex',
	'aria-rowSpan',
	'aria-setSize'
];