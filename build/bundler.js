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

// File Class
// File class (may represent either text content or a file path)
File = function (src, type, name) {

  // Assign variables
  this.src = src;
  this.type = type; // 'file' | 'text'

  // Set up display name
  if (type === 'file') { this.name = path.basename(src); }
  else if (type === 'text') { this.name = _.isUndefined(name) ? 'Untitled' : name; }
};

File.prototype.get = function () {
  if (this.type === 'text') {
    return this.src;
  } else if (this.type === 'file') {
    return fs.readFileSync(this.src, {encoding: 'utf8'});
  }
};

// Class setup
Bundler = function (info) {

  // Get the root folder of the module source
  this.root = path.dirname(info);

  // Load the configuration file
  this.info = JSON.parse(fs.readFileSync(info, {encoding: 'utf8'}));

  // HTML and JS
  this.js = [];
  this.head = [];
  this.body = [];

  // Assets files that are moved into app/assets folder
  this.assets = [];

  // File type handlers
  this.handlers = {
    '.js': require('./handlers/javascript.js')
  };

};

// Functions
Bundler.prototype.addFile = function (path) {
  this.files.push(path);
};

Bundler.prototype.build = function (output) {

  // Start processing
  for (var i in this.info.files) {
    var ext = path.extname(this.info.files[i]),
        resolved = path.resolve(this.root, this.info.files[i]);

    // If there is a processor, get it
    if (this.handlers[ext]) {

      this.handlers[ext].call(this, new File(resolved, 'file'));
    } else { // If there is no processor for this file, it is treated like an asset
      this.assets.push(resolved);
    }

    // Output


  }

};

// Exports
module.exports = Bundler;
