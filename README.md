# Readable CSS
a self contained ready to use css package to improve the readability of your contents.

## Install
The package is available on `npm`

```
npm install --save readable-css
yarn add readable-css
```

If you prefer to use it with a CDN
```
<link href="https://unpkg.com/readable-css/css/readable.css" rel="stylesheet" />
```

## Usage
Just add the `readable-content` class to the portion of page you want to be readable.

## Structure
The package has the following structure

```
- css               # compiled Sass
- examples          # example pages
- scss
  - modules         # contains all the submodules, like lists, headers, etc.
    - headers
    - lists
    - tables
    - etc.
  - main            # imports all the submodules to wrap them in the `.readable-content` scope
  - mixins          # mixins that will be used by modules
  - variables       # variables definitions, you can easily override them
  - readable        # index file that imports all the others
```

## Customize
You can easily modify the library to behave how you prefer.
Create a `SASS` file after installing the library with `npm`.

```scss
$max-width: 40em;
$baseFontSize: 1em;

@import 'node_modules/readable-css/scss/readable';
```

The library uses `em` as default unit for width, margins, paddings. You can use also different measure unit (`px` or `rem`), but it's not suggested.

Check to `_variables.scss` file for the available variables.

## Extend
The library doesn't ship with all the use cases defined, so if you need to add custom behaviours just extend it.

```scss
$max-width: 40em;
$baseFontSize: 1em;

@import 'node_modules/readable-css/scss/readable';

.readable-content {
  span {
    font-familiy: sans;
    text-decoration: underline;
  }
}
```

Remember to scope your changes inside the `readable-content` class
