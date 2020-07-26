import { HaipaAttribute } from '../extension.type';

declare module '../../main/node' {
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

export const eventAttributes = [
	'onAbort',
	'onAnimationCancel',
	'onAnimationEnd',
	'onAnimationIteration',
	'onAnimationStart',
	'onAuxClick ',
	'onBlur',
	'onError',
	'onFocus',
	'onCancel',
	'onCanPlay',
	'onCanPlayThrough',
	'onChange',
	'onClick',
	'onClose',
	'onContextMenu',
	'onCueChange',
	'onDblClick',
	'onDrag',
	'onDragEnd',
	'onDragEnter',
	'onDragExit',
	'onDragLeave',
	'onDragOver',
	'onDragStart',
	'onDrop',
	'onDurationChange',
	'onEmptied',
	'onEnded',
	'onFormData',
	'onGotPointerCapture',
	'onInput',
	'onInvalid',
	'onKeyDown',
	'onKeyPress',
	'onKeyUp',
	'onLoad',
	'onLoadedData',
	'onLoadedMetaData',
	'onLoadEnd',
	'onLoadStart',
	'onLostPointerCapture',
	'onMouseDown',
	'onMouseEnter',
	'onMouseLeave',
	'onMouseMove',
	'onMouseOut',
	'onMouseOver',
	'onMouseUp',
	'onMouseWhee',
	'onWheel',
	'onPause',
	'onPlay',
	'onPlaying',
	'onPointerDown',
	'onPointerMove',
	'onPointerUp',
	'onPointerCancel',
	'onPointerOver',
	'onPointerOut',
	'onPointerEnter',
	'onPointerLeave',
	'onPointerLockchange',
	'onPointerLockerror',
	'onProgress',
	'onRateChange',
	'onReset',
	'onResize',
	'onScroll',
	'onSeeked',
	'onSeeking',
	'onSelect',
	'onSelectStart',
	'onSelectionChange',
	'onShow',
	'onSort',
	'onStalled',
	'onSubmit',
	'onSuspend',
	'onTimeUpdate',
	'onVolumeChange',
	'onTouchCancel',
	'onTouchEnd',
	'onTouchMove',
	'onTouchStart',
	'onTransitionCancel',
	'onTransitionEnd',
	'onTransitionRun',
	'onTransitionStart',
	'onWaiting'
]