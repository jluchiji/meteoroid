var load = require('../../meteoroid-load.js');

/* Load dependencies */
load(this, 'meteor:tracker');

/* Load Files */
require('./reactive-var.js')(this);

/* Exports */
module.exports = {
  ReactiveVar: ReactiveVar
};
