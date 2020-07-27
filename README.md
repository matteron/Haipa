# Haipa (ハイパー)

Haipa is a quick little project to make writing HTML templates a bit faster and less painful.

I'm sure something like this has been done before, I just couldn't find it.

It's designed to be used with static site generators, not at all to be used in live DOM operations.  Please do not try and use this for live DOM operations and then complain it does a bad job at that.

## Basic Syntax
```JavaScript
const temp = h().doctype().html(h()
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
).render();
```

The `temp` variable will contain:

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

Haipa is just a big collection of functions that generate HTML strings.  You always start by calling the main haipa function 'h' to generate a new node, then call element or attribute functions on it to build out a tree.

### Elements
Elements are typically tags which optionally take another haipa node as a parameter.
```JavaScript
.tagName(childNode)
```
### Attributes
Attributes are similar functions that instead either take a string or a boolean value for boolean attributes such as `disabled`.  As you can see in the [basic example](#Basic-Syntax), any attribute calls on a node, get passed on the parent node.
```JavaScript
.attributeName(string | boolean)
```
> It's important to note, any sort of kebab cased attribute is written in camel case.
### Render

Finally, call `.render()` on the outer most element to render all the nodes out to a string.

## Advanced Features
Please refer to the [wiki](https://github.com/matteron/Haipa/wiki) for information on all the advanced features and quirks.
