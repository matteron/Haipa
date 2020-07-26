import { HaipaAttribute } from '../extension.type';
import { Attribute } from '../extension.decorator';

declare module '../../node' {
	export interface HaipaNode {
		onAbort: HaipaAttribute;
		onAnimationCancel: HaipaAttribute;
		onAnimationEnd: HaipaAttribute;
		onAnimationIteration: HaipaAttribute;
		onAnimationStart: HaipaAttribute;
		onAuxClick : HaipaAttribute;
		onBlur: HaipaAttribute;
		onError: HaipaAttribute;
		onFocus: HaipaAttribute;
		onCancel: HaipaAttribute;
		onCanPlay: HaipaAttribute;
		onCanPlayThrough: HaipaAttribute;
		onChange: HaipaAttribute;
		onClick: HaipaAttribute;
		onClose: HaipaAttribute;
		onContextMenu: HaipaAttribute;
		onCueChange: HaipaAttribute;
		onDblClick: HaipaAttribute;
		onDrag: HaipaAttribute;
		onDragEnd: HaipaAttribute;
		onDragEnter: HaipaAttribute;
		onDragExit: HaipaAttribute;
		onDragLeave: HaipaAttribute;
		onDragOver: HaipaAttribute;
		onDragStart: HaipaAttribute;
		onDrop: HaipaAttribute;
		onDurationChange: HaipaAttribute;
		onEmptied: HaipaAttribute;
		onEnded: HaipaAttribute;
		onFormData: HaipaAttribute;
		onGotPointerCapture: HaipaAttribute;
		onInput: HaipaAttribute;
		onInvalid: HaipaAttribute;
		onKeyDown: HaipaAttribute;
		onKeyPress: HaipaAttribute;
		onKeyUp: HaipaAttribute;
		onLoad: HaipaAttribute;
		onLoadedData: HaipaAttribute;
		onLoadedMetaData: HaipaAttribute;
		onLoadEnd: HaipaAttribute;
		onLoadStart: HaipaAttribute;
		onLostPointerCapture: HaipaAttribute;
		onMouseDown: HaipaAttribute;
		onMouseEnter: HaipaAttribute;
		onMouseLeave: HaipaAttribute;
		onMouseMove: HaipaAttribute;
		onMouseOut: HaipaAttribute;
		onMouseOver: HaipaAttribute;
		onMouseUp: HaipaAttribute;
		onMouseWhee: HaipaAttribute;
		onWheel: HaipaAttribute;
		onPause: HaipaAttribute;
		onPlay: HaipaAttribute;
		onPlaying: HaipaAttribute;
		onPointerDown: HaipaAttribute;
		onPointerMove: HaipaAttribute;
		onPointerUp: HaipaAttribute;
		onPointerCancel: HaipaAttribute;
		onPointerOver: HaipaAttribute;
		onPointerOut: HaipaAttribute;
		onPointerEnter: HaipaAttribute;
		onPointerLeave: HaipaAttribute;
		onPointerLockchange: HaipaAttribute;
		onPointerLockerror: HaipaAttribute;
		onProgress: HaipaAttribute;
		onRateChange: HaipaAttribute;
		onReset: HaipaAttribute;
		onResize: HaipaAttribute;
		onScroll: HaipaAttribute;
		onSeeked: HaipaAttribute;
		onSeeking: HaipaAttribute;
		onSelect: HaipaAttribute;
		onSelectStart: HaipaAttribute;
		onSelectionChange: HaipaAttribute;
		onShow: HaipaAttribute;
		onSort: HaipaAttribute;
		onStalled: HaipaAttribute;
		onSubmit: HaipaAttribute;
		onSuspend: HaipaAttribute;
		onTimeUpdate: HaipaAttribute;
		onVolumeChange: HaipaAttribute;
		onTouchCancel: HaipaAttribute;
		onTouchEnd: HaipaAttribute;
		onTouchMove: HaipaAttribute;
		onTouchStart: HaipaAttribute;
		onTransitionCancel: HaipaAttribute;
		onTransitionEnd: HaipaAttribute;
		onTransitionRun: HaipaAttribute;
		onTransitionStart: HaipaAttribute;
		onWaiting: HaipaAttribute;
	}
}

export class EventAttributes {
	@Attribute() onAbort() {}
	@Attribute() onAnimationCancel() {}
	@Attribute() onAnimationEnd() {}
	@Attribute() onAnimationIteration() {}
	@Attribute() onAnimationStart() {}
	@Attribute() onAuxClick () {}
	@Attribute() onBlur() {}
	@Attribute() onError() {}
	@Attribute() onFocus() {}
	@Attribute() onCancel() {}
	@Attribute() onCanPlay() {}
	@Attribute() onCanPlayThrough() {}
	@Attribute() onChange() {}
	@Attribute() onClick() {}
	@Attribute() onClose() {}
	@Attribute() onContextMenu() {}
	@Attribute() onCueChange() {}
	@Attribute() onDblClick() {}
	@Attribute() onDrag() {}
	@Attribute() onDragEnd() {}
	@Attribute() onDragEnter() {}
	@Attribute() onDragExit() {}
	@Attribute() onDragLeave() {}
	@Attribute() onDragOver() {}
	@Attribute() onDragStart() {}
	@Attribute() onDrop() {}
	@Attribute() onDurationChange() {}
	@Attribute() onEmptied() {}
	@Attribute() onEnded() {}
	@Attribute() onFormData() {}
	@Attribute() onGotPointerCapture() {}
	@Attribute() onInput() {}
	@Attribute() onInvalid() {}
	@Attribute() onKeyDown() {}
	@Attribute() onKeyPress() {}
	@Attribute() onKeyUp() {}
	@Attribute() onLoad() {}
	@Attribute() onLoadedData() {}
	@Attribute() onLoadedMetaData() {}
	@Attribute() onLoadEnd() {}
	@Attribute() onLoadStart() {}
	@Attribute() onLostPointerCapture() {}
	@Attribute() onMouseDown() {}
	@Attribute() onMouseEnter() {}
	@Attribute() onMouseLeave() {}
	@Attribute() onMouseMove() {}
	@Attribute() onMouseOut() {}
	@Attribute() onMouseOver() {}
	@Attribute() onMouseUp() {}
	@Attribute() onMouseWhee() {}
	@Attribute() onWheel() {}
	@Attribute() onPause() {}
	@Attribute() onPlay() {}
	@Attribute() onPlaying() {}
	@Attribute() onPointerDown() {}
	@Attribute() onPointerMove() {}
	@Attribute() onPointerUp() {}
	@Attribute() onPointerCancel() {}
	@Attribute() onPointerOver() {}
	@Attribute() onPointerOut() {}
	@Attribute() onPointerEnter() {}
	@Attribute() onPointerLeave() {}
	@Attribute() onPointerLockchange() {}
	@Attribute() onPointerLockerror() {}
	@Attribute() onProgress() {}
	@Attribute() onRateChange() {}
	@Attribute() onReset() {}
	@Attribute() onResize() {}
	@Attribute() onScroll() {}
	@Attribute() onSeeked() {}
	@Attribute() onSeeking() {}
	@Attribute() onSelect() {}
	@Attribute() onSelectStart() {}
	@Attribute() onSelectionChange() {}
	@Attribute() onShow() {}
	@Attribute() onSort() {}
	@Attribute() onStalled() {}
	@Attribute() onSubmit() {}
	@Attribute() onSuspend() {}
	@Attribute() onTimeUpdate() {}
	@Attribute() onVolumeChange() {}
	@Attribute() onTouchCancel() {}
	@Attribute() onTouchEnd() {}
	@Attribute() onTouchMove() {}
	@Attribute() onTouchStart() {}
	@Attribute() onTransitionCancel() {}
	@Attribute() onTransitionEnd() {}
	@Attribute() onTransitionRun() {}
	@Attribute() onTransitionStart() {}
	@Attribute() onWaiting() {}
}