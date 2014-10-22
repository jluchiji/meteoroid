var load = require('../../meteoroid-load.js');

/* Load dependencies */
load(this, 'meteor:tracker');
Deps = Tracker; // Compat.

/* Declarations */
HTML = {};
IDENTITY = function (x) { return x; };
SLICE = Array.prototype.slice;

/* Load Files */
require('./visitors.js')(this);
require('./html.js')(this);

/* Exports */
module.exports = {
  HTML: HTML
};
