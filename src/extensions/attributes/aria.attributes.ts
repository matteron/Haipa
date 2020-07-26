import { HaipaAttribute, HaipaBooleanAttribute } from '../extension.type';
import { Attribute } from '../extension.decorator';

declare module '../../node' {
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

export class AriaAttributes {
	@Attribute('aria-autoComplete') ariaAutoComplete() {}
	@Attribute('aria-checked') ariaChecked() {}
	@Attribute('aria-current') ariaCurrent() {}
	@Attribute('aria-disabled') ariaDisabled() {}
	@Attribute('aria-errorMessage') ariaErrorMessage() {}
	@Attribute('aria-expanded') ariaExpanded() {}
	@Attribute('aria-hasPopup') ariaHasPopup() {}
	@Attribute('aria-hidden') ariaHidden() {}
	@Attribute('aria-invalid') ariaInvalid() {}
	@Attribute('aria-label') ariaLabel() {}
	@Attribute('aria-level') ariaLevel() {}
	@Attribute('aria-modal') ariaModal() {}
	@Attribute('aria-multiline') ariaMultiline() {}
	@Attribute('aria-multiSelectable') ariaMultiSelectable() {}
	@Attribute('aria-orientation') ariaOrientation() {}
	@Attribute('aria-placeholder') ariaPlaceholder() {}
	@Attribute('aria-pressed') ariaPressed() {}
	@Attribute('aria-readonly') ariaReadonly() {}
	@Attribute('aria-required') ariaRequired() {}
	@Attribute('aria-selected') ariaSelected() {}
	@Attribute('aria-sort') ariaSort() {}
	@Attribute('aria-valueMax') ariaValueMax() {}
	@Attribute('aria-valueMin') ariaValueMin() {}
	@Attribute('aria-valueNow') ariaValueNow() {}
	@Attribute('aria-valueText') ariaValueText() {}
	@Attribute('aria-live') ariaLive() {}
	@Attribute('aria-relevant') ariaRelevant() {}
	@Attribute('aria-atomic') ariaAtomic() {}
	@Attribute('aria-busy') ariaBusy() {}
	@Attribute('aria-dropEffect') ariaDropEffect() {}
	@Attribute('aria-dragged') ariaDragged() {}
	@Attribute('aria-activeDescendant') ariaActiveDescendant() {}
	@Attribute('aria-colCount') ariaColCount() {}
	@Attribute('aria-colIndex') ariaColIndex() {}
	@Attribute('aria-colSpan') ariaColSpan() {}
	@Attribute('aria-controls') ariaControls() {}
	@Attribute('aria-describedBy') ariaDescribedBy() {}
	@Attribute('aria-details') ariaDetails() {}
	@Attribute('aria-flowTo') ariaFlowTo() {}
	@Attribute('aria-labelledBy') ariaLabelledBy() {}
	@Attribute('aria-owns') ariaOwns() {}
	@Attribute('aria-posInSet') ariaPosInSet() {}
	@Attribute('aria-rowCount') ariaRowCount() {}
	@Attribute('aria-rowIndex') ariaRowIndex() {}
	@Attribute('aria-rowSpan') ariaRowSpan() {}
	@Attribute('aria-setSize') ariaSetSize() {}
}