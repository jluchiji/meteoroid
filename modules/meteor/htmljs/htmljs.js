Deps = require('../tracker/tracker.js').Tracker;

HTML = {};

IDENTITY = function (x) { return x; };
SLICE = Array.prototype.slice;

require('./visitors.js')(this);
require('./html.js')(this);

module.exports = {HTML: HTML};
