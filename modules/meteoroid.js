/* ----------------------------------------------------------------------------
    Main Meteoroid script.
    Exports the essential Meteor packages.
   ---------------------------------------------------------------------------- */
_ = require('underscore');

/* Package loader */
var load = function (pkg) {

  pkg = {author: pkg.split(':')[0], name: pkg.split(':')[1]};
  path = _.template('./<%= author %>/<%= name %>/<%= name %>.js')(pkg);

  return require(path);
}



/* Import various stuff */
module.exports = function (scope, p) {

  if (p === 'renderer') {
    /* Export packages */
    _.extend(scope, {
      EJSON:          load('meteor:ejson'),
      Tracker:        load('meteor:tracker'),
      ReactiveVar:    load('meteor:reactive-var'),
      ReactiveDict:   load('meteor:reactive-dict'),

      /* jQuery */
      jQuery:         require('jquery')
    });

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
