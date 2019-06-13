module.exports = require_;

function require_(
    moduleName,
    {
      skipCache=false,
      useSourceMap=true,
      returnDefault=true,
    }={}
  ){
  const modulePath = require.resolve(moduleName);

  if( useSourceMap ){
    installSourceMap();
  }

  if( skipCache ){
    delete require.cache[modulePath];
  }

  const moduleExports = require(modulePath);

  if( returnDefault ) {
    if( moduleExports.__esModule === true ) {
      return moduleExports.default;
    } else {
      return moduleExports;
    }
  }

  return moduleExports;
}

let sourceMapIsInstalled;
function installSourceMap() {
  if( sourceMapIsInstalled ) return;
  sourceMapIsInstalled = true;
  const sourceMap = require('source-map-support');
  sourceMap.install();
}
