
/* Load dependencies */
Deps = require('../tracker/module.js').Tracker;

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
