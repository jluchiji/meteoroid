/* ----------------------------------------------------------------------------
    Main Meteoroid import file.
    Exports the essential Meteor packages.
   ---------------------------------------------------------------------------- */
_ = require('underscore');

/* Import various stuff */
module.exports = function (scope) {
  _.extend(scope, {
    Tracker:        require('./tracker.js'),
    ReactiveVar:    require('./reactive-var.js')
  });
};
