import { Tag } from '../tag';
import { h } from '../index';
import { DocumentEncoding } from '../enums/documentEncoding';
import { ViewportWidth } from '../enums/viewportWidth';

declare module '../tag' {
	export interface Tag {
        stylesheet(file: string): Tag;
        encoding(encoding?: DocumentEncoding): Tag;
        viewport(width?: ViewportWidth, initialScale?: number): Tag;
        // font(path: string): Tag;
	}
}

Tag.prototype.stylesheet = function(file: string): Tag {
    return this.link(h()
        .rel('stylesheet')
        .href(file)
        .type('text/css')
    );
};

Tag.prototype.encoding = function(encoding: DocumentEncoding = DocumentEncoding.utf8): Tag {
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

// Tag.prototype.font = function(path: string): Tag {
//     return this.link(h()
//         .rel('preload')
//         .as('font')
//         .type(``)
//     );
// }