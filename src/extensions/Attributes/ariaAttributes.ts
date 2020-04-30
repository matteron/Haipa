import { Tag } from '../../tag';

declare module '../../tag' {
	export interface Tag {
		ariaAutocomplete(value: string): Tag;
		ariaChecked(value: string): Tag;
		ariaCurrent(value: string): Tag;
		ariaDisabled(value: string): Tag;
		ariaErrormessage(value: string): Tag;
		ariaExpanded(value: string): Tag;
		ariaHaspopup(value: string): Tag;
		ariaHidden(value: string): Tag;
		ariaInvalid(value: string): Tag;
		ariaLabel(value: string): Tag;
		ariaLevel(value: string): Tag;
		ariaModal(value: string): Tag;
		ariaMultiline(value: string): Tag;
		ariaMultiselectable(value: string): Tag;
		ariaOrientation(value: string): Tag;
		ariaPlaceholder(value: string): Tag;
		ariaPressed(value: string): Tag;
		ariaReadonly(value: string): Tag;
		ariaRequired(value: string): Tag;
		ariaSelected(value: string): Tag;
		ariaSort(value: string): Tag;
		ariaValuemax(value: string): Tag;
		ariaValuemin(value: string): Tag;
		ariaValuenow(value: string): Tag;
		ariaValuetext(value: string): Tag;
		ariaLive(value: string): Tag;
		ariaRelevant(value: string): Tag;
		ariaAtomic(value: string): Tag;
		ariaBusy(value: string): Tag;
		ariaDropeffect(value: string): Tag;
		ariaDragged(value: string): Tag;
		ariaActivedescendant(value: string): Tag;
		ariaColcount(value: string): Tag;
		ariaColindex(value: string): Tag;
		ariaColspan(value: string): Tag;
		ariaControls(value: string): Tag;
		ariaDescribedby(value: string): Tag;
		ariaDetails(value: string): Tag;
		ariaFlowto(value: string): Tag;
		ariaLabelledby(value: string): Tag;
		ariaOwns(value: string): Tag;
		ariaPosinset(value: string): Tag;
		ariaRowcount(value: string): Tag;
		ariaRowindex(value: string): Tag;
		ariaRowspan(value: string): Tag;
		ariaSetsize(value: string): Tag;		
	}
}

Tag.prototype.ariaAutocomplete = function(value: string): Tag { return this.attribute('aria-autocomplete', value); }
Tag.prototype.ariaChecked = function(value: string): Tag { return this.attribute('aria-checked', value); }
Tag.prototype.ariaCurrent = function(value: string): Tag { return this.attribute('aria-current', value); }
Tag.prototype.ariaDisabled = function(value: string): Tag { return this.attribute('aria-disabled', value); }
Tag.prototype.ariaErrormessage = function(value: string): Tag { return this.attribute('aria-errormessage', value); }
Tag.prototype.ariaExpanded = function(value: string): Tag { return this.attribute('aria-expanded', value); }
Tag.prototype.ariaHaspopup = function(value: string): Tag { return this.attribute('aria-haspopup', value); }
Tag.prototype.ariaHidden = function(value: string): Tag { return this.attribute('aria-hidden', value); }
Tag.prototype.ariaInvalid = function(value: string): Tag { return this.attribute('aria-invalid', value); }
Tag.prototype.ariaLabel = function(value: string): Tag { return this.attribute('aria-label', value); }
Tag.prototype.ariaLevel = function(value: string): Tag { return this.attribute('aria-level', value); }
Tag.prototype.ariaModal = function(value: string): Tag { return this.attribute('aria-modal', value); }
Tag.prototype.ariaMultiline = function(value: string): Tag { return this.attribute('aria-multiline', value); }
Tag.prototype.ariaMultiselectable = function(value: string): Tag { return this.attribute('aria-multiselectable', value); }
Tag.prototype.ariaOrientation = function(value: string): Tag { return this.attribute('aria-orientation', value); }
Tag.prototype.ariaPlaceholder = function(value: string): Tag { return this.attribute('aria-placeholder', value); }
Tag.prototype.ariaPressed = function(value: string): Tag { return this.attribute('aria-pressed', value); }
Tag.prototype.ariaReadonly = function(value: string): Tag { return this.attribute('aria-readonly', value); }
Tag.prototype.ariaRequired = function(value: string): Tag { return this.attribute('aria-required', value); }
Tag.prototype.ariaSelected = function(value: string): Tag { return this.attribute('aria-selected', value); }
Tag.prototype.ariaSort = function(value: string): Tag { return this.attribute('aria-sort', value); }
Tag.prototype.ariaValuemax = function(value: string): Tag { return this.attribute('aria-valuemax', value); }
Tag.prototype.ariaValuemin = function(value: string): Tag { return this.attribute('aria-valuemin', value); }
Tag.prototype.ariaValuenow = function(value: string): Tag { return this.attribute('aria-valuenow', value); }
Tag.prototype.ariaValuetext = function(value: string): Tag { return this.attribute('aria-valuetext', value); }
Tag.prototype.ariaLive = function(value: string): Tag { return this.attribute('aria-live', value); }
Tag.prototype.ariaRelevant = function(value: string): Tag { return this.attribute('aria-relevant', value); }
Tag.prototype.ariaAtomic = function(value: string): Tag { return this.attribute('aria-atomic', value); }
Tag.prototype.ariaBusy = function(value: string): Tag { return this.attribute('aria-busy', value); }
Tag.prototype.ariaDropeffect = function(value: string): Tag { return this.attribute('aria-dropeffect', value); }
Tag.prototype.ariaDragged = function(value: string): Tag { return this.attribute('aria-dragged', value); }
Tag.prototype.ariaActivedescendant = function(value: string): Tag { return this.attribute('aria-activedescendant', value); }
Tag.prototype.ariaColcount = function(value: string): Tag { return this.attribute('aria-colcount', value); }
Tag.prototype.ariaColindex = function(value: string): Tag { return this.attribute('aria-colindex', value); }
Tag.prototype.ariaColspan = function(value: string): Tag { return this.attribute('aria-colspan', value); }
Tag.prototype.ariaControls = function(value: string): Tag { return this.attribute('aria-controls', value); }
Tag.prototype.ariaDescribedby = function(value: string): Tag { return this.attribute('aria-describedby', value); }
Tag.prototype.ariaDetails = function(value: string): Tag { return this.attribute('aria-details', value); }
Tag.prototype.ariaFlowto = function(value: string): Tag { return this.attribute('aria-flowto', value); }
Tag.prototype.ariaLabelledby = function(value: string): Tag { return this.attribute('aria-labelledby', value); }
Tag.prototype.ariaOwns = function(value: string): Tag { return this.attribute('aria-owns', value); }
Tag.prototype.ariaPosinset = function(value: string): Tag { return this.attribute('aria-posinset', value); }
Tag.prototype.ariaRowcount = function(value: string): Tag { return this.attribute('aria-rowcount', value); }
Tag.prototype.ariaRowindex = function(value: string): Tag { return this.attribute('aria-rowindex', value); }
Tag.prototype.ariaRowspan = function(value: string): Tag { return this.attribute('aria-rowspan', value); }
Tag.prototype.ariaSetsize = function(value: string): Tag { return this.attribute('aria-setsize', value); }
