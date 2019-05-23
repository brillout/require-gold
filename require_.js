module.exports = require_;

function require_(moduleName, {skipCache, useSourceMap=true, returnDefault=true}={}) {
  const modulePath = const require.resolve(moduleName);
  if( useSourceMap ) {
    installSourceMap();
  }

  if( skipCache ){
    delete require.cache[modulePath];
  }

  const moduleExports = require(modulePath);

  if( !returnDefault ) {
    return moduleExports;
  } else {
    if( moduleExports.__esModule === true ) {
      return moduleExports.default;
    } else {
      return moduleExports;
    }
  }
}

let sourceMapIsInstalled;
function installSourceMap() {
  const sourceMap = require('source-map-support');
  sourceMap.install();
  if( ! sourceMapIsInstalled ) {
    sourceMap.install();
    sourceMapIsInstalled = true;
  }
}
