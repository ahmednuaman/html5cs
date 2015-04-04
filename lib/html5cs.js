var _ = require('lodash'),
    chalk = require('chalk'),
    glob = require('glob'),
    HTMLFile = require('./html-file'),
    pluralize = require('pluralize'),
    Promise = require('promise'),
    validator = require('./validator');

module.exports = function (src, config) {
  return new Promise(function (resolve, reject) {
    var error,
        results;

    if (_.isEmpty(files)) {
      error = 'No files found in: ' + src;
      console.log(chalk.red(error));

      return reject(error);
    } else {
      results = [];

      _.forEach(_.isArray(src) ? src : [src], function (file) {
        results.push(validator(new HTMLFile(file)));
      });

      if (_.isEmpty(results)) {
        resolve(results.length + ' ' + pluralize('file is', results.length) + ' free of code style errors');
      } else {
        reject(results);
      }
    }
  });
};
