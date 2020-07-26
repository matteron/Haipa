import { HaipaNode } from "../node";

export type LinkType = 'alternate' | 'archives' | 'author' | 'bookmark'
	| 'canonical' | 'dns-prefetch' | 'external' | 'first' | 'help' | 'icon'
	| 'import' | 'last' | 'license' | 'manifest' | 'modulepreload' | 'next'
	| 'nofollow' | 'noopener' | 'noreferrer' | 'opener' | 'pingback'
	| 'preconnect' | 'prefetch' | 'preload' | 'prerender' | 'prev' | 'search'
	| 'shortlink' | 'stylesheet' | 'tag' | 'up';

export type LinkTypeAttribute = (linkType: LinkType) => HaipaNode;