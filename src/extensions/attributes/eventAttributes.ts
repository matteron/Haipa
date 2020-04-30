import { Tag } from '../../tag';

declare module '../../tag' {
	export interface Tag {
		onabort(value: string): Tag;
		onanimationcancel (value: string): Tag;
		onanimationend (value: string): Tag;
		onanimationiteration (value: string): Tag;
		onanimationstart (value: string): Tag;
		onauxclick (value: string): Tag;
		onblur(value: string): Tag;
		onerror(value: string): Tag;
		onfocus(value: string): Tag;
		oncancel(value: string): Tag;
		oncanplay(value: string): Tag;
		oncanplaythrough(value: string): Tag;
		onchange(value: string): Tag;
		onclick(value: string): Tag;
		onclose(value: string): Tag;
		oncontextmenu(value: string): Tag;
		oncuechange(value: string): Tag;
		ondblclick(value: string): Tag;
		ondrag(value: string): Tag;
		ondragend(value: string): Tag;
		ondragenter(value: string): Tag;
		ondragexit(value: string): Tag;
		ondragleave(value: string): Tag;
		ondragover(value: string): Tag;
		ondragstart(value: string): Tag;
		ondrop(value: string): Tag;
		ondurationchange(value: string): Tag;
		onemptied(value: string): Tag;
		onended(value: string): Tag;
		onformdata(value: string): Tag;
		ongotpointercapture(value: string): Tag;
		oninput(value: string): Tag;
		oninvalid(value: string): Tag;
		onkeydown(value: string): Tag;
		onkeypress(value: string): Tag;
		onkeyup(value: string): Tag;
		onload(value: string): Tag;
		onloadeddata(value: string): Tag;
		onloadedmetadata(value: string): Tag;
		onloadend(value: string): Tag;
		onloadstart(value: string): Tag;
		onlostpointercapture(value: string): Tag;
		onmousedown(value: string): Tag;
		onmouseenter(value: string): Tag;
		onmouseleave(value: string): Tag;
		onmousemove(value: string): Tag;
		onmouseout(value: string): Tag;
		onmouseover(value: string): Tag;
		onmouseup(value: string): Tag;
		onmousewheel  (value: string): Tag;
		onwheel(value: string): Tag;
		onpause(value: string): Tag;
		onplay(value: string): Tag;
		onplaying(value: string): Tag;
		onpointerdown(value: string): Tag;
		onpointermove(value: string): Tag;
		onpointerup(value: string): Tag;
		onpointercancel(value: string): Tag;
		onpointerover(value: string): Tag;
		onpointerout(value: string): Tag;
		onpointerenter(value: string): Tag;
		onpointerleave(value: string): Tag;
		onpointerlockchange (value: string): Tag;
		onpointerlockerror (value: string): Tag;
		onprogress(value: string): Tag;
		onratechange(value: string): Tag;
		onreset(value: string): Tag;
		onresize(value: string): Tag;
		onscroll(value: string): Tag;
		onseeked(value: string): Tag;
		onseeking(value: string): Tag;
		onselect(value: string): Tag;
		onselectstart(value: string): Tag;
		onselectionchange(value: string): Tag;
		onshow(value: string): Tag;
		onsort (value: string): Tag;
		onstalled(value: string): Tag;
		onsubmit(value: string): Tag;
		onsuspend(value: string): Tag;
		ontimeupdate(value: string): Tag;
		onvolumechange(value: string): Tag;
		ontouchcancel  (value: string): Tag;
		ontouchend  (value: string): Tag;
		ontouchmove  (value: string): Tag;
		ontouchstart  (value: string): Tag;
		ontransitioncancel(value: string): Tag;
		ontransitionend(value: string): Tag;
		ontransitionrun(value: string): Tag;
		ontransitionstart(value: string): Tag;
		onwaiting(value: string): Tag;
	}
}

Tag.prototype.onabort = function(value: string): Tag { return this.attribute('onabort', value); }
Tag.prototype.onanimationcancel  = function(value: string): Tag { return this.attribute('onanimationcancel ', value); }
Tag.prototype.onanimationend  = function(value: string): Tag { return this.attribute('onanimationend ', value); }
Tag.prototype.onanimationiteration  = function(value: string): Tag { return this.attribute('onanimationiteration ', value); }
Tag.prototype.onanimationstart  = function(value: string): Tag { return this.attribute('onanimationstart ', value); }
Tag.prototype.onauxclick  = function(value: string): Tag { return this.attribute('onauxclick ', value); }
Tag.prototype.onblur = function(value: string): Tag { return this.attribute('onblur', value); }
Tag.prototype.onerror = function(value: string): Tag { return this.attribute('onerror', value); }
Tag.prototype.onfocus = function(value: string): Tag { return this.attribute('onfocus', value); }
Tag.prototype.oncancel = function(value: string): Tag { return this.attribute('oncancel', value); }
Tag.prototype.oncanplay = function(value: string): Tag { return this.attribute('oncanplay', value); }
Tag.prototype.oncanplaythrough = function(value: string): Tag { return this.attribute('oncanplaythrough', value); }
Tag.prototype.onchange = function(value: string): Tag { return this.attribute('onchange', value); }
Tag.prototype.onclick = function(value: string): Tag { return this.attribute('onclick', value); }
Tag.prototype.onclose = function(value: string): Tag { return this.attribute('onclose', value); }
Tag.prototype.oncontextmenu = function(value: string): Tag { return this.attribute('oncontextmenu', value); }
Tag.prototype.oncuechange = function(value: string): Tag { return this.attribute('oncuechange', value); }
Tag.prototype.ondblclick = function(value: string): Tag { return this.attribute('ondblclick', value); }
Tag.prototype.ondrag = function(value: string): Tag { return this.attribute('ondrag', value); }
Tag.prototype.ondragend = function(value: string): Tag { return this.attribute('ondragend', value); }
Tag.prototype.ondragenter = function(value: string): Tag { return this.attribute('ondragenter', value); }
Tag.prototype.ondragexit = function(value: string): Tag { return this.attribute('ondragexit', value); }
Tag.prototype.ondragleave = function(value: string): Tag { return this.attribute('ondragleave', value); }
Tag.prototype.ondragover = function(value: string): Tag { return this.attribute('ondragover', value); }
Tag.prototype.ondragstart = function(value: string): Tag { return this.attribute('ondragstart', value); }
Tag.prototype.ondrop = function(value: string): Tag { return this.attribute('ondrop', value); }
Tag.prototype.ondurationchange = function(value: string): Tag { return this.attribute('ondurationchange', value); }
Tag.prototype.onemptied = function(value: string): Tag { return this.attribute('onemptied', value); }
Tag.prototype.onended = function(value: string): Tag { return this.attribute('onended', value); }
Tag.prototype.onformdata = function(value: string): Tag { return this.attribute('onformdata', value); }
Tag.prototype.ongotpointercapture = function(value: string): Tag { return this.attribute('ongotpointercapture', value); }
Tag.prototype.oninput = function(value: string): Tag { return this.attribute('oninput', value); }
Tag.prototype.oninvalid = function(value: string): Tag { return this.attribute('oninvalid', value); }
Tag.prototype.onkeydown = function(value: string): Tag { return this.attribute('onkeydown', value); }
Tag.prototype.onkeypress = function(value: string): Tag { return this.attribute('onkeypress', value); }
Tag.prototype.onkeyup = function(value: string): Tag { return this.attribute('onkeyup', value); }
Tag.prototype.onload = function(value: string): Tag { return this.attribute('onload', value); }
Tag.prototype.onloadeddata = function(value: string): Tag { return this.attribute('onloadeddata', value); }
Tag.prototype.onloadedmetadata = function(value: string): Tag { return this.attribute('onloadedmetadata', value); }
Tag.prototype.onloadend = function(value: string): Tag { return this.attribute('onloadend', value); }
Tag.prototype.onloadstart = function(value: string): Tag { return this.attribute('onloadstart', value); }
Tag.prototype.onlostpointercapture = function(value: string): Tag { return this.attribute('onlostpointercapture', value); }
Tag.prototype.onmousedown = function(value: string): Tag { return this.attribute('onmousedown', value); }
Tag.prototype.onmouseenter = function(value: string): Tag { return this.attribute('onmouseenter', value); }
Tag.prototype.onmouseleave = function(value: string): Tag { return this.attribute('onmouseleave', value); }
Tag.prototype.onmousemove = function(value: string): Tag { return this.attribute('onmousemove', value); }
Tag.prototype.onmouseout = function(value: string): Tag { return this.attribute('onmouseout', value); }
Tag.prototype.onmouseover = function(value: string): Tag { return this.attribute('onmouseover', value); }
Tag.prototype.onmouseup = function(value: string): Tag { return this.attribute('onmouseup', value); }
Tag.prototype.onmousewheel   = function(value: string): Tag { return this.attribute('onmousewheel  ', value); }
Tag.prototype.onwheel = function(value: string): Tag { return this.attribute('onwheel', value); }
Tag.prototype.onpause = function(value: string): Tag { return this.attribute('onpause', value); }
Tag.prototype.onplay = function(value: string): Tag { return this.attribute('onplay', value); }
Tag.prototype.onplaying = function(value: string): Tag { return this.attribute('onplaying', value); }
Tag.prototype.onpointerdown = function(value: string): Tag { return this.attribute('onpointerdown', value); }
Tag.prototype.onpointermove = function(value: string): Tag { return this.attribute('onpointermove', value); }
Tag.prototype.onpointerup = function(value: string): Tag { return this.attribute('onpointerup', value); }
Tag.prototype.onpointercancel = function(value: string): Tag { return this.attribute('onpointercancel', value); }
Tag.prototype.onpointerover = function(value: string): Tag { return this.attribute('onpointerover', value); }
Tag.prototype.onpointerout = function(value: string): Tag { return this.attribute('onpointerout', value); }
Tag.prototype.onpointerenter = function(value: string): Tag { return this.attribute('onpointerenter', value); }
Tag.prototype.onpointerleave = function(value: string): Tag { return this.attribute('onpointerleave', value); }
Tag.prototype.onpointerlockchange  = function(value: string): Tag { return this.attribute('onpointerlockchange ', value); }
Tag.prototype.onpointerlockerror  = function(value: string): Tag { return this.attribute('onpointerlockerror ', value); }
Tag.prototype.onprogress = function(value: string): Tag { return this.attribute('onprogress', value); }
Tag.prototype.onratechange = function(value: string): Tag { return this.attribute('onratechange', value); }
Tag.prototype.onreset = function(value: string): Tag { return this.attribute('onreset', value); }
Tag.prototype.onresize = function(value: string): Tag { return this.attribute('onresize', value); }
Tag.prototype.onscroll = function(value: string): Tag { return this.attribute('onscroll', value); }
Tag.prototype.onseeked = function(value: string): Tag { return this.attribute('onseeked', value); }
Tag.prototype.onseeking = function(value: string): Tag { return this.attribute('onseeking', value); }
Tag.prototype.onselect = function(value: string): Tag { return this.attribute('onselect', value); }
Tag.prototype.onselectstart = function(value: string): Tag { return this.attribute('onselectstart', value); }
Tag.prototype.onselectionchange = function(value: string): Tag { return this.attribute('onselectionchange', value); }
Tag.prototype.onshow = function(value: string): Tag { return this.attribute('onshow', value); }
Tag.prototype.onsort  = function(value: string): Tag { return this.attribute('onsort ', value); }
Tag.prototype.onstalled = function(value: string): Tag { return this.attribute('onstalled', value); }
Tag.prototype.onsubmit = function(value: string): Tag { return this.attribute('onsubmit', value); }
Tag.prototype.onsuspend = function(value: string): Tag { return this.attribute('onsuspend', value); }
Tag.prototype.ontimeupdate = function(value: string): Tag { return this.attribute('ontimeupdate', value); }
Tag.prototype.onvolumechange = function(value: string): Tag { return this.attribute('onvolumechange', value); }
Tag.prototype.ontouchcancel   = function(value: string): Tag { return this.attribute('ontouchcancel  ', value); }
Tag.prototype.ontouchend   = function(value: string): Tag { return this.attribute('ontouchend  ', value); }
Tag.prototype.ontouchmove   = function(value: string): Tag { return this.attribute('ontouchmove  ', value); }
Tag.prototype.ontouchstart   = function(value: string): Tag { return this.attribute('ontouchstart  ', value); }
Tag.prototype.ontransitioncancel = function(value: string): Tag { return this.attribute('ontransitioncancel', value); }
Tag.prototype.ontransitionend = function(value: string): Tag { return this.attribute('ontransitionend', value); }
Tag.prototype.ontransitionrun = function(value: string): Tag { return this.attribute('ontransitionrun', value); }
Tag.prototype.ontransitionstart = function(value: string): Tag { return this.attribute('ontransitionstart', value); }
Tag.prototype.onwaiting = function(value: string): Tag { return this.attribute('onwaiting', value); }