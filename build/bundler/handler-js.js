//////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                          //
// Meteoroid bundler: .js file handler.                                                     //
//                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////
_     = require('underscore');
fs    = require('fs');
path  = require('path');
chalk = require('chalk');
bundle= require('./bundle.js');

// Processor function
module.exports = {

  // Processes the file into the bundle
  process: function (bundle, file, options) {

    // Import options
    var opt = {
      codeWidth: 94,    // Width of code boxes
      noClosure: false  // If true, there will be no closure around code
    };
    _.extend(opt, options);

    /* Utility methods */
    // Repeats the character the specified number of times.
    // Returns the resulting string.
    var repeat = function (length, char) {
      return new Array(len - 1 < 0 ? 0 : len - 1).join(char);
    };
    // Pads the string with spaces and adds a terminating character.
    // Returns the padded string.
    var pad = function (str, lineNum) {
      if (_.isUndefined(lineNum)) { lineNum = -1; }
      return str + repeat(opt.codeWidth - str.length, ' ') + '//' +
        (lineNum < 0 ? '' : ' ' + lineNum);
    };
    // Creates a 'boxed' comment text
    // Returns the resulting string.
    var boxComment = function (str) {
      result = [];

      // Top border of the box
      result.push(repeat(opt.codeWidth, '/'));
      result.push(pad('//'));
      // Actual text to include
      for (var line in str.split('\n')) {
        result.push(pad('// ' + line));
      }
      // Bottom border of the box
      result.push(pad('//'));
      result.push(repeat(opt.codeWidth, '/'));

      return result.join('\n');
    };
    // Creates a 'boxed' code section with line numbers
    // Returns the resulting string
    var boxCode = function (code) {
      result = [];

      // Add leading empty line
      result.push(pad(''));
      // Add code
      var lineNumber = 1;
      for (var line in code.split('\n')) {
        result.push(pad(line, lineNumber++));
      }
      // Add finishing touches
      result.push(pad(''));
      result.push(repeat(opt.codeWidth, '/'));

      return result.join('\n');
    };

    
  }



};
