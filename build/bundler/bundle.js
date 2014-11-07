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

// File class (may represent either text content or a file path)
module.exports.File = function (src, type) {

  // Assign variables
  this.src = src;
  this.type = type; // 'file' | 'text'

  // Functions
  this.get = function () {
    if (type === 'text') {
      return this.src;
    } else if (type === 'file') {
      return fs.readFileSync(this.src, {encoding: 'utf8'});
    }
  };

  return this;
};

// Bundle class
module.exports.Bundle = function () {

  // HTML and JS
  this.js = [];
  this.head = [];
  this.body = [];

  // Assets files that are moved into app/assets folder
  this.assets = [];

  // Source file list
  this.src = [];

  return this;
}

// Class methods
