var html5cs = require('../lib/'),
    path = require('path'),

    htmlbad = path.join(__dirname, 'fixture/bad.html'),
    htmlgood = path.join(__dirname, 'fixture/good.html');

describe('html5cs', function () {
  it('should be happy with good.html', function (done) {
    var bad = jasmine.createSpy(),
        good = jasmine.createSpy();

    html5cs(htmlgood)
      .then(good, bad)
      .then(done);

    expect(good).toHaveBeenCalledWith('1 file is free of code style errors');
    expect(bad).not.toHaveBeenCalled();
  });

  xit('should complain about bad.html', function (done) {
    done();
  });
});
