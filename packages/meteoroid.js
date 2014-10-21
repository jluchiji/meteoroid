/* ----------------------------------------------------------------------------
    Main Meteoroid import file.
    Exports the essential Meteor packages.
   ---------------------------------------------------------------------------- */
_ = require('underscore');

/* Import various stuff */
module.exports = function (scope) {
  _.extend(scope, {
    Tracker:        require('./meteor:tracker/tracker.js'),
    ReactiveVar:    require('./meteor:reactive-var/reactive-var.js')
  });
};
