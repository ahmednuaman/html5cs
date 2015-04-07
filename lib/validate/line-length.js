var _ = require('lodash');

module.exports = function (htmlFile, config) {
  var lines = htmlFile.getLines(),
      maxLineLength = config.maxLineLength,
      results = [],
      lineLength;

  _.forEach(lines, function (line, i) {
    lineLength = line.length;

    if (lineLength > maxLineLength) {
      results.push({
        file: htmlFile.getFilename(),
        line: i,
        error: 'Line length (' + lineLength + ') is longer than `maxLineLength` of ' + maxLineLength
      });
    }
  });

  return results;
}
