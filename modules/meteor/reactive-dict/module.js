
/* Load dependencies */
Tracker = require('../tracker/module.js').Tracker;
EJSON = require('../ejson/module.js').EJSON;

/* Load Files */
require('./reactive-dict.js')(this);

/* Exports */
module.exports = {
  ReactiveDict: ReactiveDict
};
