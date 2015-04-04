var fs = require('fs'),
    path = require('path');

var HTMLFile = function (filepath) {
  this._filename = path.basename(filepath);
  this._filepath = filepath;

  this._loadLines();
};

HTMLFile.prototype = {
  _loadLines: function () {
    var contents = fs.readFileSync(this._filepath).toString();
    
    this._lines = contents.split(/\r\n|\r|\n/);
  },

  getLines: function () {
    return this._lines;
  },

  getFilename: function () {
    return this._filename;
  },

  getFilepath: function () {
    return this._filepath;
  }
};

module.exports = HTMLFile;
