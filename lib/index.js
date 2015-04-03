var chalk = require('chalk'),
    glob = require('glob');

module.exports = function (src, options) {
  var files = glob.sync(src);

  if (files.length) {
    return require('./html5cs')(files, options);
  } else {
    console.log(chalk.red('No files found in: ' + src));
  }
};
