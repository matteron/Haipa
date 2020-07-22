import { Tag } from '../tag';
import { h } from '../index';
import { DocumentEncoding } from '../types/document-encoding.type';
import { ViewportWidth } from '../types/viewport-width.type';

declare module '../tag' {
	export interface Tag {
        stylesheet(file: string): Tag;
        encoding(encoding?: DocumentEncoding): Tag;
        viewport(width?: ViewportWidth, initialScale?: number): Tag;
        font(path: string): Tag;
        socialTitle(value: string): Tag;
        description(text: string): Tag;
        socialDescription(text: string): Tag;
	}
}

Tag.prototype.stylesheet = function(file: string): Tag {
    return this.link(h()
        .rel('stylesheet')
        .href(file)
        .type('text/css')
    );
};

Tag.prototype.encoding = function(encoding: DocumentEncoding = 'utf-8'): Tag {
    return this.meta(h()
        .charset(encoding)
    );
}

Tag.prototype.viewport = function(width: ViewportWidth = 'device-width', initialScale: number = 1): Tag {
    return this.meta(h()
        .name('viewport')
        .content(`width=${width}, initial-scale=${initialScale}`)
    )
}

// Setups font to preload 
Tag.prototype.font = function(path: string): Tag {
    return this.link(h()
		.rel('preload')
		.as('font')
		.type(`font/${path.split('.').pop()}`)
		.href(path)
		.crossOrigin('true')
	);
}

Tag.prototype.socialTitle = function(value: string): Tag {
    return this.meta(h().name('twitter:title').content(value))
        .meta(h().name('og:title').content(value));
}

Tag.prototype.description = function(text: string): Tag {
    return this.meta(h().name('description').content(text));
}

Tag.prototype.socialDescription = function(text: string): Tag {
    return this.meta(h().name('twitter:description').content(text))
        .meta(h().name('og:description').content(text));
}
