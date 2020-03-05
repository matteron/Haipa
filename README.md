# Haipa (ハイパー)

Haipa is a quick little project to make writing HTML a bit faster and less painful.

I'm sure something like this has been done before, I just couldn't find it.

It's intendend to be used with my static site builder I made for my personal website.

The whole thing is just 55 lines if you ignore the `data.js` file, which is really just two big arrays to hold the names of the html elements and attributes.

## Syntax

Haipa is just a big collection of functions which generate HTML strings.

Typically the pattern for elements is `tagName([*attributes*], [*internal elements*])`

To make a self closing tag, just omit the internal elements array.
	ex: `link([]) = <link/>`

For the Attributes themselves, the pattern is `` attrName`value` ``.

The syntax ended up being very similar to how Elm does it's templating, so if you know that, enjoy.

### Quirks

1. Some functions are named differently in order to avoid name space collisions with reserved keywords.  The following table lists all of them.

	| Type      | Original | Haipa   |
	|-----------|----------|---------|
	| Attribute | class    | classes |
	| Attribute | for      | isFor   |

2. `Kebab-Case` attributes are instead written in `camelCase`.
	EX: `stroke-width` becomes `strokeWidth`.
3. If you want to pass variables into template strings, you must use the standard function syntax and not the tag syntax.

	ex: ❌ `` classes`btn ${foo ? foo : bar}` ``

	ex: ✔️ `` classes(`btn ${foo ? foo : barr}`) ``

## Example

```JavaScript
const haipa = require('haipa');
const { div, h1, p } = haipa.tags;
const { classes } = haipa.attr;
const html = 
	div([classes`card card-ex`], [
		h1([], ['So, what do you think?']),
		p([], ['Kinda neat, huh?'])
	]);
```

Will produce:
```HTML
<div class="card card-ex">
	<h1>
		So, what do you think?
	</h1>
	<p>
		Kinda neat, huh?
	</p>
</div>
```

So kind of a bad example at first glance, as they're the same number of lines in the end.

However, if you look closer, you'll probably notice that the actual, legible Haipa code produces equivalent HTML in half the lines.  It adds up.

I find that writing Haipa is quicker and reads easier with large documents (at least for me), even if it does seem a bit messy at first.

If you want a bigger example, my personal site is now using Haipa as a static site template.  You can find that [here](https://github.com/matteron/mattia.id/blob/master/src/template/template.js).

## How to Install

### NPM

If you're using npm, the process is pretty easy.

```BASH
npm i --save haipa
```

Then just import it and select your tags and attribtues.
```JavaScript
const haipa =  require('haipa');
const { div, p, a } = haipa.tags;
const { classes, id, href} = haipa.attr;
```

### Native

If you're just trying to include Haipa in a script tag, add either `haipa.js` or `haipa.min.js` to your project and import them in a script tag.

```HTML
<script src="pathToHaipa/haipa.min.js"></script>
```

This will add a `haipa` variable to the global space, then you can use it like so.

```Javascript
const { tags, attr } = haipa();
const { div, p, a } = tags;
const { classes, id, href} = attr;
```

## Changelog

- 1.0.4
	- Added global event handlers
- 1.0.3
	- Added custom 'isFor' attribute to avoid name space collision with reserved keyword 'for'
- 1.0.2
	- Added Aria Attributes
- 1.0.1
	- Made native imports available.

## TODO
- [x] Support every element and attribute (Just kinda got lazy on this)
	* I think I got everything, though I'm not 100 % sure.
- [x] Support attributes with dashes in the name
	* ~~For now Just pass the full thing as a string.
		ex: `p(['test-attr="sad"'], [...])`~~
	* See [Quirks](#quirks) to see how (Hint: it's just `camelCase`).
- [ ] Maybe: Support open header tags. (Using `<link>` by itself works in the head of a page normally.)
- [x] Support in browser javascript (not sure why you'd want this)
- [x] NPM module