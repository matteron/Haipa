import { h } from '../../ndex';
import { HaipaExtension } from '../extension.decorator';
import { HaipaNode } from '../../node';
import { DocumentEncoding } from '../../types/document-encoding.type';
import { ViewportWidth } from '../../types/viewport-width.type';

declare module '../../node' {
	export interface HaipaNode {
		stylesheet(file: string): HaipaNode;
		encoding(encoding?: DocumentEncoding): HaipaNode;
		viewport(width?: ViewportWidth, initialScale?: number): HaipaNode;
		font(path: string): HaipaNode;
		description(text: string): HaipaNode;
		socialDescription(text: string): HaipaNode;
		socialTitle(value: string): HaipaNode;
	}
}

export class ShortcutComponents {
	@HaipaExtension()
	stylesheet(thisArg: HaipaNode, file: string): HaipaNode {
		return thisArg.link(h()
			.rel('stylesheet')
			.href(file)
			.type('text/css')
		);
	}

	@HaipaExtension()
	encoding(thisArg: HaipaNode, encoding: DocumentEncoding = 'utf-8'): HaipaNode {
		return thisArg.meta(h().charset(encoding));
	}

	@HaipaExtension()
	viewport(thisArg: HaipaNode, width: ViewportWidth = 'device-width', initialScale: number = 1): HaipaNode {
		return thisArg.meta(h()
			.name('viewport')
			.content(`width=${width}, initial-scale=${initialScale}`)
		);
	}

	@HaipaExtension()
	font(thisArg: HaipaNode, path: string): HaipaNode {
		return thisArg.link(h()
			.rel('preload')
			.as('font')
			.type(`font/${path.split('.').pop()}`)
			.href(path)
			.crossOrigin('true')
		);
	}

	@HaipaExtension()
	description(thisArg: HaipaNode, text: string): HaipaNode {
		return thisArg.meta(h().name('description').content(text));
	}

	@HaipaExtension()
	socialDescription(thisArg: HaipaNode, text: string): HaipaNode {
		return thisArg.meta(h().name('twitter:description').content(text))
        	.meta(h().name('og:description').content(text));
	}

	@HaipaExtension()
	socialTitle(thisArg: HaipaNode, value: string): HaipaNode {
		return thisArg.meta(h().name('twitter:title').content(value))
        	.meta(h().name('og:title').content(value));
	}
}