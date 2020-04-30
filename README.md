# Haipa (ハイパー)

Haipa is a quick little project to make writing HTML a bit faster and less painful.

I'm sure something like this has been done before, I just couldn't find it.

It's intended to be used with my static site builder I made for my personal website, not at all to be used in live DOM operations.

## Syntax 
Note: Haipa syntax is very different now in version 2, if you somehow were using haipa for anything (why?), be aware of this.  You can read about it [below](#Complete-Rewrite).

### Basic Example
```JavaScript
const temp = h().html(h()
	.head(h()
		.title(h().txt('Hello World'))
	)
	.body(h()
	.header(h().id('header-id')
			.h1(h().id('h1-id')
				.txt('Hello World')
			)
		)
	)
)
```

Will generate:

```HTML
<!DOCTYPE html>
<html>
	<head>
		<title>Hello World</title>
	</head>
	<body>
		<header id="header-id">
			<h1 id="h1-id">Hello World</h1>
		</header>
	</body>
</html>
```

Haipa is just a big collection of functions with generate HTML strings.  You always start by calling the main haipa function 'h' to generate a new node.  You call all your related functions on it to start building out the tree.  

There's two types of basic functions, an element, and an attribute.

### Elements
Elements are typically tags which optionally take another haipa node as a parameter.

```JavaScript
.tagName(childNode)
```

### Attributes
Attributes are simpler functions that just take strings.

```JavaScript
.attributeName(string)
```

As you can see in the [basic example](#Basic-Example), calling attribute functions like 'id' on a haipa node will pass that attribute onto the parent.

> It's important to note, any sort of kebab cased attribute is written in camel case.

## Quirks

### Components
For haipa 2, I've also included a few commonly used patterns when building an HTML document.

For example there is `.stylesheet(href)` which is shortcut for linking a stylesheet without having to write the typical link with attribute syntax.

You can see all of the ones I've made so far [here]()

### Txt
In the [basic example](#Basic-Example), you will have seen use of the `.txt(string)` function.  This is how you pass plain text string to the inside of an html tag.

For example: `.div(h().txt('ugly')) === <div>ugly</div>`

I'm not very content with this solution, but it'll have to do for now.  The problem came about due to namespace collision.  The fact that there's both a title element and attribute means element methods can't be overloaded with string parameters.  I have considered allowing it in non-colliding elements, but I don't think it's a good idea to introduce inconsistencies like that.

### Enums / Types
Finally, since I was using TypeScript for this library, I figured i'd leverage enums and custom types to aid in "type safety" so to speak.  Certain functions will take these enums instead of typical strings when using TypeScript files.  If you are using JavaScript, you can just as easily pass the string representation instead.

For a very basic example, there is the `.encoding(DocumentEncoding)` attribute which takes the `DocumentEncoding` enum.

All of the enums / types are available to view [here]().

### Kebab Case
As mentioned in the [attributes section](#Attributes), kebab case attributes such as `stroke-width` become strokeWidth.

## Complete Rewrite

As of version 2.0.0, Haipa has been completely rewritten, including a completely new syntax.  As I was using Haipa more and more for side projects, I quickly found a two glaring pain points I wasn't happy with.

If you'd like to read the original readme from version 1, [here ya go]().

### Problem 1. Imports
In Haipa 1, everything was a loose function you imported by destructuring either from the base haipa import.  For example:

```JavaScript
const { tags, attr } = require('haipa');
const { html, head, body, div } = tags;
const { classes, id } = attr;
```

As you can see, these imports quickly blow up in size when making a pretty standard template and I hated it.  For version 2, I switched to importing a complete haipa function once, with all of the related functions internally.  This was something I was deliberately trying to avoid with the design of version 1 as I thought it'd be cumbersome, but combined with the syntax changes I'll go over below, the *flow* of writing haipa code improved quite a bit.

### Problem 2. Syntax
Brackets!  Haipa's basic tag structure was a function that took two arrays.

Ex: `div([], [])`

This means there are brackets littered absolutely everywhere, which I quickly found out was both a pain to write and read.  In Haipa 2, everything is just function call on a base haipa object that you pass into a parent tag.

For example:
```JavaScript
const temp = h().html(h()
	.body(h()
		.id('test')
		.div()
	)
)
```

In this example, we create a very basic html document, with a body that has the id, 'test', and an internal div child.  The order actually doesn't matter either, putting the div before the id call will still result in the same structure (Order of child tags is still preserved).  However, that's mainly an accidental result of implementation and I don't think it should typically used.

## Changelog

- 2.0.0
	- Complete rewrite with new, streamlined syntax.
- 1.0.4
	- Added global event handlers
- 1.0.3
	- ~~Added custom 'isFor' attribute to avoid name space collision with reserved keyword 'for'~~.  In haipa 2 onwards, this isn't a problem anymore, for can be used.
- 1.0.2
	- Added Aria Attributes
- 1.0.1
	- Made native imports available.

## TODO
- [ ] Handle boolean attributes correctly (disabled, etc)
- [ ] Add enums / correct types for everything to match html spec (big for svg)
- [ ] Add more components for common situations.
- [ ] Correctly space the resulting string with tabs.
- [ ] I might switch text only elements to taking strings directly instead of having to call `.txt()`.  (Ex: p, b)
- [ ] Figure out how to move all the aria attributes into an aria sub property to keep things clean.