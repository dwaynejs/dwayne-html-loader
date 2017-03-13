var loaderUtils = require('loader-utils');
var parseDwayneHTML = require('parse-dwayne-html');

module.exports = function (source) {
  if (this.cacheable) {
    this.cacheable();
  }

  var options = loaderUtils.getOptions(this);

  return 'module.exports = ' + parseDwayneHTML(source, options);
};