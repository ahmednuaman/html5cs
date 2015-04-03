var _ = require('lodash'),
    chalk = require('chalk'),
    glob = require('glob'),
    HTMLFile = require('./html-file');

module.exports = function (src, config) {
  var files = [];
  
  _.forEach(src, function (file) {
    console.log(file);
  });
};
