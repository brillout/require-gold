# `require-gold`

Same as Node.js' native `require` but with added options:
 - `skipCache` - Don't use the cache. (Makes sure the module is reloaded.)
 - `useSourceMap` - Use [`source-map-support`](https://github.com/evanw/node-source-map-support).
 - `returnDefault` - Always return the default export of the module. (This is convenient for code that needs to be agnostic to whether the required module is a CommonJS module or a ES6 module.)

Usage:

~~~js
const require_ = require('@brillout/require-gold'); // npm install @brillout/require-gold
require_('./some-module', {skipCache: true, returnDefault: true, useSourceMap: true});
~~~

For a full documentation, see the source code:

~~~js
!INLINE ./require_.js
~~~
