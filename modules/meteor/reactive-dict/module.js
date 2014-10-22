var load = require('../../meteoroid-load.js');

/* Load dependencies */
load(this, 'meteor:tracker');
load(this, 'meteor:ejson');

/* Load Files */
require('./reactive-dict.js')(this);

/* Exports */
module.exports = {
  ReactiveDict: ReactiveDict
};
