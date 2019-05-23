# `require-gold`

Same as Node.js' native require but with 3 added options:
 - `skipCache` - Don't use the cache. (Make sure the module is reloaded.)
 - `useSourceMap` - Install the [`source-map-support`](https://github.com/evanw/node-source-map-support)` module. (To add source map support.)
 - `returnDefault` - Always return the default export of the module. (Which is convenient for code that need to be agnostic to whether the module is a CommonJS module or a ES6 module.)

Usage:

~~~js
const require_ = require('@brillout/gold-require'); // npm install @brillout/gold-require
const defaultExport = require_('./myModule', {skipCache: true, returnDefault: true, useSourceMap: true});
~~~

See the source code for a full documentation:

~~~js
!INCLUDE ./require_.js
~~~
