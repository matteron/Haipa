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
		.title(h('Hello World'))
	)
	.body(h()
		.header(h().id('header-id')
			.h1(h('Hello World')
				.id('h1-id')
			)
			.txt('This comes after the h1 tag')
		)
	)
).render()
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
			This comes after the h1 tag
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

### Render

Finally, call `.render()` on the outer most element to render render all the nodes to a string.

## Quirks / Features

### Txt / Inner Text
In the [basic example](#Basic-Example), strings were passed into the `h()` function calls inside tags in order to set the inner text of the elements.  This will set the inner text before every other tag, so if you'd like to compose plain text after other tags, use the `.txt()` call.

To illustrate this example:
```JavaScript
const textBefore = h().div(h()
	.p(h('Inner Text')
		.b('Bold Text')
	)
);

const textAfter = h().div(h()
	.p(h()
		.b('Bold Text')
		.txt('Inner Text')
	)
);
```

Produces the following:
```HTML
	<!-- Text Before -->
	<div>
		<p>Inner Text<b>Bold Text</b></p>
	</div>

	<!-- Text After -->
	<div>
		<p><b>Bold Text</b>Inner Text</p>
	</div>
```

### Components
For haipa 2, I've also included a few commonly used patterns when building an HTML document.

For example there is `.stylesheet(href)` which is shortcut for linking a stylesheet without having to write the typical link with attribute syntax.

You can see all of the ones I've made so far [here](https://github.com/matteron/Haipa/blob/master/src/extensions/components.ts)

### Loops
I found that I kept making extensions to loop through lists of items, so I finally got fed up and added them to haipa.  The basic syntax is the following:

```JavaScript
h().forEach(array, (tag, value, index, array) => {})
```

It's fairly similar to the native `Array.forEach` function, except that the first argument is the array you wish to loop through and the first parameter passed into the callback function is the tag, not the value.  The tag is the same tag which you called the `forEach` function on, so you do all your modifications on the tag.  I think a simple example explains everything far better than I can, so here ya go:

```JavaScript
h().ul(h()
	.forEach(arr, (tag, n, i) => {
		tag.li(h().txt(n));
	})
);
```

### Enums / Types
Finally, since I was using TypeScript for this library, I figured i'd leverage enums and custom types to aid in "type safety" so to speak.  Certain functions will take these enums instead of typical strings when using TypeScript files.  If you are using JavaScript, you can just as easily pass the string representation instead.

For a very basic example, there is the `.encoding(DocumentEncoding)` attribute which takes the `DocumentEncoding` enum.

All of the enums / types are available to view [here](https://github.com/matteron/Haipa/tree/master/src/enums).

### Kebab Case
As mentioned in the [attributes section](#Attributes), kebab case attributes such as `stroke-width` become strokeWidth.

## Complete Rewrite

As of version 2.0.0, Haipa has been completely rewritten, including a completely new syntax.  As I was using Haipa more and more for side projects, I quickly found a two glaring pain points I wasn't happy with.

If you'd like to read the original readme from version 1, [here ya go](https://github.com/matteron/Haipa/blob/ad2e040aa18cfc551d07fc68b8aff5199c191336/README.md).

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

## TODO
- [ ] Handle boolean attributes correctly (disabled, etc)
- [ ] Add enums / correct types for everything to match html spec (big for svg)
- [ ] Add more components for common situations.
- [ ] Correctly space the resulting string with tabs.
- [x] ~~I might switch text only elements to taking strings directly instead of having to call `.txt()`.  (Ex: p, b)~~ Passing a string into a `h()` call will make it call `.txt()` on itself.
- [ ] Figure out how to move all the aria attributes into an aria sub property to keep things clean.