var config = require('../../../lib/default-config'),
    fs = require('fs'),
    HTMLFile = require('../../../lib/html-file'),
    lineLength = require('../../../lib/validate/line-length'),
    path = require('path'),

    badFile = new HTMLFile(path.join(__dirname, '../../fixture/bad.html')),
    goodFile = new HTMLFile(path.join(__dirname, '../../fixture/good.html'));

describe('lineLength', function () {
  it('should return errors', function () {
    expect(lineLength(badFile, config)).toEqual([{
      file: 'bad.html',
      line: 3,
      error: 'Line length (888) is longer than `maxLineLength` of 120'
    }]);
  });
});
