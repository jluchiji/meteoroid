//_    = require('underscore');
path = require('path');

Meteoroid = {
  /* Root of the module directory */
  moduleRoot: '../',

  /* Loads the specified module into the specified scope */
  load: function (scope, pkg) {

    /* A subset of underscore to remove the dependency */
    var isObject = function (obj) {
      var type = typeof obj;
      return type === 'function' || type === 'object' && !!obj;
    };
    var extend = function (obj) {
      if (!isObject(obj)) return obj;
      var source, prop;
      for (var i = 1, length = arguments.length; i < length; i++) {
        source = arguments[i];
        for (prop in source) {
          if (source.hasOwnProperty(prop)) {
              obj[prop] = source[prop];
          }
        }
      }
      return obj;
    };

    // Retrieve package name and author
    pkg = {
      author: pkg.split(':')[0],
      name: pkg.split(':')[1]
    };
    // Construct the path of the module file
    var p = path.join(
      this.moduleRoot,
      //_.template('<%= author %>/<%= name %>.js')(pkg)
      pkg.author,
      pkg.name + '.js'
    );
    // Load package
    pkg = require(p);
    // Export package contents into the specified scope
    extend(scope, pkg);
  }


}
