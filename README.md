# var-parser
Simple in string variable replacement.
 - Case-insensitive.
 - Point delimiter, eg, .var.

Usage:

> var vp = require('var-parser');
> vp('a .a. c',{a:'b'});
< 'a b c'

