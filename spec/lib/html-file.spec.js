var fs = require('fs'),
    HTMLFile = require('../../lib/html-file'),
    path = require('path'),

    file = path.join(__dirname, '../fixture/good.html');

describe('HTMLFile', function () {
  var contents,
      htmlFile;

  beforeEach(function () {
    htmlFile = new HTMLFile(file);
    contents = fs.readFileSync(file).toString();
  });

  it('should get contents', function () {
    expect(htmlFile.getContents()).toContain(contents);
  });

  it('should get lines', function () {
    expect(htmlFile.getLines().length).toBe(contents.split(/\r\n|\r|\n/).length);
  });

  it('should get filename', function () {
    expect(htmlFile.getFilename()).toBe(path.basename(file));
  });

  it('should get filepath', function () {
    expect(htmlFile.getFilepath()).toBe(file);
  });
});
