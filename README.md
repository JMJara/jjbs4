jjbs4 - Functions for Bootstrap 4 (JQuery)
==========================================

Classes:
--------
### Breakpoint Class in HTML TAG
This class change on Window Resize 
```html
<html class="xs">
or
<html class="sm">
or
<html class="md">
or
<html class="lg">
or
<html class="xl">
```

Variables:
----------
### currentBreakpoint
contains the current breakpoint
```js
$(document).ready(function () {
    console.log( currentBreakpoint ); // Contains the Breakpoint: 'xs','sm','md','lg' or 'xl'
});
```

Functions:
----------
### getCurrentBreakpoint()
Get the current breakpoint,
* @returns {string} 'xs','sm','md','lg' or 'xl'
```js
$(document).ready(function () {
    console.log( getCurrentBreakpoint() ); // Return the Breakpoint: 'xs','sm','md','lg' or 'xl'
});
```

### isBreakpoint(breakpoint)
Check if given breakpoint is in this moment true or false
* @param {string} breakpoint 'xs','sm','md','lg' or 'xl'
* @returns {boolean}

```js
$(document).ready(function () {
    console.log( isBreakpoint('xs') ); // Return boolean
    console.log( isBreakpoint('sm') ); // Return boolean
    console.log( isBreakpoint('md') ); // Return boolean
    console.log( isBreakpoint('lg') ); // Return boolean
    console.log( isBreakpoint('xl') ); // Return boolean
});
```

Events:
-------
### resizeEnd
Call a function after window resize
```js
$( window ).on( "resizeEnd" , function() {
    console.log('resizeEnd');
});
```

### breakpointHasChanged
Call a function  if the Breakpoint has changed
```js
$( window ).on( "breakpointHasChanged" , function() {
    console.log(currentBreakpoint);
});

// on load and breakpointHasChanged:
$( window ).on( "load breakpointHasChanged" , function() {
    console.log(currentBreakpoint);
});
```

Utilities
---------

### Update of IMG src after Page Load
```html
<img src="bild-pre.jpg" data-jjbs4-src="bild-large.jpg" >
```

### Responsive update of IMG src after Page Load 
define at least two breakpoints
```html
<img src="bild-pre.jpg" data-jjbs4-src="bild-xs.jpg  xs, bild-sm.jpg  sm, bild-md.jpg  md, bild-lg.jpg  lg, bild-xl.jpg  xl" >
```

