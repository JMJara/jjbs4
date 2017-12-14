jjbs4 - Jquery Funktionen für Bootstrap 4
=========================================

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
* @param {string} breakpoint
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
