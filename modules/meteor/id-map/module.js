var load = require('../../meteoroid-load.js');

/* Load dependencies */
load(this, 'meteor:ejson');

/* Load module files */
require('./id-map.js')(this);

/* Exports */
module.exports = {
  IdMap: IdMap
}
