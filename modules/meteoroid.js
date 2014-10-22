/* ----------------------------------------------------------------------------
    Main Meteoroid script.
    Exports the essential Meteor packages.
   ---------------------------------------------------------------------------- */
_ = require('underscore');

/* Package loader */
var load = require('./meteoroid-load.js');



/* Import various stuff */
module.exports = function (scope, p) {

  if (p === 'renderer') {
    /* Export packages */
    load(scope, 'meteor:ejson');
    load(scope, 'meteor:tracker');
    load(scope, 'meteor:reactive-var');
    load(scope, 'meteor:reactive-dict');
    load(scope, 'meteor:underscore');

    /* Other packages */
    scope.jQuery = require('jquery');

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

  /* Common stuff */
  _.extend(scope, {
    Meteoroid: {
      /* On-the-fly loading */
      load: require('./meteoroid-load.js')
    }
  });

};
