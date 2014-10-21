/* ----------------------------------------------------------------------------
    Main Meteoroid script.
    Exports the essential Meteor packages.
   ---------------------------------------------------------------------------- */
_ = require('underscore');

/* Import various stuff */
module.exports = function (scope) {

  /* Export meteor packages */
  _.extend(scope, {
    Tracker:        require('./meteor/tracker/tracker.js'),
    ReactiveVar:    require('./meteor/reactive-var/reactive-var.js'),
    ReactiveDict:   require('./meteor/reactive-dict/reactive-dict.js'),

    /* jQuery */
    jQuery:         require('./jquery/jquery/jquery.min.js'),
    $:              require('./jquery/jquery/jquery.min.js')
  });

  /* Add aliases */
  _.extend(scope, {
    $:              scope.jQuery,
    Session:        new scope.ReactiveDict()
  });



};
