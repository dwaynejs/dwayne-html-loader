var loaderUtils = require('loader-utils');
var parseDwayneHTML = require('parse-dwayne-html');

module.exports = function (source) {
  if (this.cacheable) {
    this.cacheable();
  }

  var options = loaderUtils.getOptions(this);
  var parsed = parseDwayneHTML(source, options);

  return parsed.additionalJs
    + '\n\nvar '
    + parsed.funcName
    + ', '
    + parsed.tmplVar
    + ';\n\nmodule.exports = '
    + parsed.html
    + ';';
};
