## Changelog

`3.0.0`

- Another full rewrite.
	- Package size is almost halved.
	- 2.X syntax is compatible, except for extensions. Minimal change require to port extensions.
	- Logic is a lot simpler and more straight forward. (No more bugs)
- New `@HaipaExtension()` decorator for typescript users.  Simplifies syntax to create extensions.
- New link type for use with the `rel` attribute.
- Fixed bug where the outermost node would only output render the last element.
- Extensions should now be made against `HaipaNode` type instead of `Tag`.

`2.2.5`

- Added an if function for conditional rendering.
- Added Language type for strongly typed lang attributes.
- Added description, social title and description components.

`2.2.0`

- Passing strings into `h()` will call `.txt` on it.  Makes it easier to pass inner text.

`2.1.1`

- Added a `.font` component to easily include a preloaded font

`2.1.0`

- Added the `.forEach` function to loop. 

`2.0.2`

- Removed .npmignore

`2.0.1`
	
- Wasted an npm version by accidentally publishing nothing

`2.0.0`

- Complete rewrite with new, streamlined syntax.  Please read the readme for more info.

`1.0.4`

- Added global event handlers

`1.0.3`

- ~~Added custom 'isFor' attribute to avoid name space collision with reserved keyword 'for'~~.  In haipa 2 onwards, this isn't a problem anymore, for can be used.

`1.0.2`

- Added Aria Attributes

`1.0.1`

- Made native imports available.
