# Haipa (ハイパー)

Haipa is a quick little project to make writing HTML a bit quicker.
I'm sure something like this has been done before, I just couldn't find it.

It's intendend to be used with my static site builder I made for my personal website.

The whole thing is a little under 55 lines if you ignore the `data.js` file, which is really just a big array to hold the names of the html elements.

## Syntax

Haipa is just a big collection of functions which generate HTML strings.

The syntax ended up being very similar to how Elm does it's templating, so if you know that, enjoy.

The only weird quirk is that the html `class` attribute is renamed to `classes` as class is a reserved keyword.

Also, I tend to write the attributes as javascript tag function.  This is mainly just to seperate them visually from the actual elements, but they can be written either way.



## Example
```
const {div, p, h1} = require('./tags');
const {classes} = require('./attr');

const html = 
	div([classes`card card-ex`], [
		h1([], ['So, what do you think?']),
		p([], ['Kinda neat, huh?'])
	]);
```

Will produce:
```
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

Also, I'd argue Haipa code reads easier (at least for me).

## How to Install
All you have to do is take the three source files (`attr.js, data.js, tags.js`) into any folder and import them with node.

Since this was designed for my static site generator, which is built around node.js, you're going to need node installed on your machine.

I'll probably make this support normal javascript modules soon enough, it's just this whole thing was written in less than an hour.

