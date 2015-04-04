var glob = require('glob');

module.exports = function (src, config) {
  return require('./html5cs')(glob.sync(src), config);
};
