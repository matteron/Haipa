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

For the Attributes themselves, you 

The syntax ended up being very similar to how Elm does it's templating, so if you know that, enjoy.

### Quirks

1. The `class` attribute is called using `classes`.  Class is a reserved keyword and can not be used in JavaScript.
2. `Kebab-Case` attributes are instead written in `camelCase`.
	EX: `stroke-width` becomes `strokeWidth`.
3. If you want to pass variables into template strings, you must use the standard function syntax and not the tag syntax.
	ex: ❌ `` classes`btn ${foo ? foo : bar}` ``
	ex: ✔️ `` classes(`btn ${foo ? foo : barr}`) ``

## Example

```JavaScript
const {div, p, h1} = require('./tags');
const {classes} = require('./attr');

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
All you have to do is take the three source files (`attr.js, data.js, tags.js, svg.js`) into any folder and import them with node.

If you don't plan on using svg in your site, I recomend you delete it from your folder and edit the data file accordingly.  It's a lot of extra attributes and elements that would be wasting memory.

Since this was designed for my static site generator, which is built around node.js, you're going to need node installed on your machine.

I'll probably make this support normal javascript modules soon enough, it's just this whole thing was written in less than an hour.

## TODO
- [x] Support every element and attribute (Just kinda got lazy on this)
	* I think I got everything, though I'm not 100 % sure.
- [x] Support attributes with dashes in the name
	* ~~For now Just pass the full thing as a string.
		ex: `p(['test-attr="sad"'], [...])`~~
	* See [Quirks](#quirks) to see how (Hint: it's just `camelCase`).
- [ ] Maybe: Support open header tags. (Using `<link>` by itself works in the head of a page normally.)
- [ ] Support ES6 Modules (Currently only support Node modules)