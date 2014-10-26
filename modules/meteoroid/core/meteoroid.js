_    = require('underscore');
path = require('path');

Meteoroid = {
  /* Root of the module directory */
  moduleRoot: '../',

  /* Loads the specified module into the specified scope */
  load: function (scope, pkg) {
    // Retrieve package name and author
    pkg = {
      author: pkg.split(':')[0],
      name: pkg.split(':')[1]
    };
    // Construct the path of the module file
    var p = path.join(
      this.moduleRoot,
      _.template('<%= author %>/<%= name %>.js')(pkg)
    );
    // Load package
    pkg = require(p);
    // Export package contents into the specified scope
    _.extend(scope, pkg);
  }


}
