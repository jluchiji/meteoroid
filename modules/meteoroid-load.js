module.exports = function (scope, pkg) {
  // Retrieve package name and author
  pkg = {author: pkg.split(':')[0], name: pkg.split(':')[1]};
  // Construct the path of the module file
  var path = _.template('./<%= author %>/<%= name %>.js')(pkg);
  // Load package
  pkg = require(path);
  // Export package contents into the specified scope
  _.extend(scope, pkg);
}
