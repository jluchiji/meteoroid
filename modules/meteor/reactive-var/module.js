
/* Load dependencies */
Tracker = require('../tracker/module.js').Tracker;

/* Load Files */
require('./reactive-var.js')(this);

/* Exports */
module.exports = {
  ReactiveVar: ReactiveVar
};
