/* ----------------------------------------------------------------------------
    Heavily modified vertion of meteor/reactive-dict.js
    Package docs at <http://docs.meteor.com/>

    ReactiveDict has been pretty much redesigned from scratch to utilize the
    atom-shell remoting for data consistency.
   ---------------------------------------------------------------------------- */

/* Import necessary stuff */
_ = require('underscore');
Tracker = require('../tracker/tracker.js');
