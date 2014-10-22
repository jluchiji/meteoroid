
/* Load dependencies */
Base64 = require('../base64/module.js').Base64;


/* Load Files */
require('./ejson.js')(this);
require('./stringify.js')(this);

/* Exports */
module.exports = {
  EJSON: EJSON
};
