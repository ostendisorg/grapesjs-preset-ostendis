# GrapesJS Ostendis Preset

This preset configures GrapesJS to be used with some unique features and blocks for the [Ostendis E-Recrui­ting sys­tem](https://www.ostendis.com/en)

## Summary

TODO

## Download

Download using one of the options:

* `npm i grapesjs-preset-ostendis`
* Latest release link https://github.com/DNUbyOstendis/grapesjs-preset-ostendis/releases/latest


## Usage

```html
<link href="path/to/grapes.min.css" rel="stylesheet"/>
<link href="path/to/grapesjs-preset-ostendis.css" rel="stylesheet"/>

<script src="path/to/grapes.min.js"></script>
<script src="path/to/grapesjs-preset-ostendis.min.js"></script>

<div id="gjs"></div>
<script type="text/javascript">
  var editor = grapesjs.init({
      container : '#gjs',
      plugins: ['gjs-preset-ostendis'],
      pluginsOpts: {
        'gjs-preset-ostendis': {
          modalTitleImport: 'Import template',
          // ... other options
        }
      }
  });
</script>
```


## Development

Clone the repository

```sh
$ git clone https://github.com/DNUbyOstendis/grapesjs-preset-ostendis.git
$ cd grapesjs-preset-ostendis
```

Install dependencies

```sh
$ npm i
```

The plugin relies on GrapesJS via `peerDependencies`, so you have to install it manually (without adding it to package.json)

```sh
$ npm i grapesjs --no-save
```

Start the dev server

```sh
$ npm start
```

To install publishing dependency
```sh
$ npm install --global np
```

## Release

Publish the package

```sh
$ npm run release
```
**ONLY** workes with package:
https://www.npmjs.com/package/np

## License

BSD 3-Clause

Based on: [GrapesJS Newsletter Preset](http://grapesjs.com/demo-newsletter-editor.html)
Copyright (c) 2016, [Artur Arseniev](https://github.com/artf)
All rights reserved.
