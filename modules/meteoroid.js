/* ----------------------------------------------------------------------------
    Main Meteoroid script.
    Exports the essential Meteor packages.
   ---------------------------------------------------------------------------- */
_ = require('underscore');

/* Package loader */
var load = function (scope, pkg) {

  pkg = {author: pkg.split(':')[0], name: pkg.split(':')[1]};
  var path = _.template('./<%= author %>/<%= name %>/<%= name %>.js')(pkg);
  pkg = require(path);

  _.extend(scope, pkg);
}



/* Import various stuff */
module.exports = function (scope, p) {

  if (p === 'renderer') {
    /* Export packages */
    load(scope, 'meteor:ejson');
    load(scope, 'meteor:tracker');
    load(scope, 'meteor:reactive-var');
    load(scope, 'meteor:reactive-dict');
    
    /* Other packages */
    scope.jQuery = require('jquery');
    scope._ = require('underscore');

    /* Add aliases */
    _.extend(scope, {
      $:              scope.jQuery,
      Session:        new scope.ReactiveDict()
    });

    /* Meteoroid object */
    _.extend(scope, {
      Meteoroid: {
        isRenderer: true,
        isBrowser: false
      }
    });
  }

  if (p === 'browser') {
    _.extend(scope, {
      Meteoroid: {
        isRenderer: false,
        isBrowser: true
      }
    });


  }

};
