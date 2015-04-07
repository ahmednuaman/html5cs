var validators = {
  lineLengthValidator: require('./validate/line-length')
};

module.exports = function (htmlFile, config) {
  var results = {};

  results[htmlFile.getFilepath()] = _.forEach(validators, function (func, validator) {
    return func.call(htmlFile, config);
  }).flatten();
  
  return results;
};
