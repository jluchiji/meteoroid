//////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                          //
// Meteoroid asset bunde (module, app etc.) builder.                                        //
// ---------------------------------------------------------------------------------------- //
// Contains logic that builds the source directory into a module bundle.                    //
//                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////
_     = require('underscore');
fs    = require('fs');
path  = require('path');
chalk = require('chalk');
bundle= require('./bundle.js');

// Class setup
module.exports = function () {

  // Resulting bundle
  this.bundle = new bundle();

  // File type handlers
  this.handlers = { };

};
