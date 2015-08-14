# var-parser
Simple in string variable replacement.
 * Case-insensitive.
 * Point delimiter, eg, .var.

### Usage:

```sh
> var vp = require('var-parser');
> vp('a .point. .INSENSITIVE.',{point:'b',insensitive: 'c'});
< 'a b c'
```

