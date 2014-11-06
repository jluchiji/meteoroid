//////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                          //
// Meteoroid asset bunde (module, app etc.)                                                 //
// ---------------------------------------------------------------------------------------- //
// Represents the built asset bundle whose output is included in the Meteoroid app.         //
//                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////
_     = require('underscore');
fs    = require('fs');
path  = require('path');
chalk = require('chalk');

// Constructor and class setup
Bundler = function () {

  // HTML and JS
  this.js = [];
  this.head = [];
  this.body = [];

  // Assets files that are moved into app/assets folder
  this.assets = [];

  // Source file list
  this.src = [];
}
module.exports = Bundler;

// Class methods
