//////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                          //
// Meteoroid bundler: .js file handler.                                                     //
//                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////
_     = require('underscore');
fs    = require('fs');
path  = require('path');
chalk = require('chalk');

// Processor function
module.exports = function (file, options) {

  // Import options
  var opt = {
    codeWidth: 94,    // Width of code boxes
    bare: false       // If true, there will be no closure around code
  };
  _.extend(opt, options);

  /* Utility methods */
  // Repeats the character the specified number of times.
  // Returns the resulting string.
  var repeat = function (length, char) {
    return new Array(length < 0 ? 0 : length + 1).join(char);
  };
  // Pads the string with spaces and adds a terminating character.
  // Returns the padded string.
  var pad = function (str, lineNum) {
    return str + repeat(opt.codeWidth - str.length - 2, ' ') + '//' +
      (_.isUndefined(lineNum) ? '' : ' ' + String(lineNum));
  };
  // Creates a 'boxed' comment text
  // Returns the resulting string.
  var boxComment = function (str) {
    result = [];

    // Top border of the box
    result.push(repeat(opt.codeWidth, '/'));
    result.push(pad('//'));
    // Actual text to include
    var lines = str.split('\n');
    for (var i in lines) {
      result.push(pad('// ' + lines[i]));
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
    var lineNumber = 1, lines = code.split('\n');
    for (var i in lines) {
      result.push(pad(lines[i], lineNumber++));
    }
    // Add finishing touches
    result.push(pad(''));
    result.push(repeat(opt.codeWidth, '/'));

    return result.join('\n');
  };

  /* Wrap in closure (unless opt.noClosure) */
  var codegen = ['\n']; // Leading newline
  if (!opt.bare) { codegen.push('(function () {\n'); }
  codegen.push(boxComment(file.name))
  codegen.push(boxCode(file.get()));
  if (!opt.bare) { codegen.push('\n}).call(this);'); }

  /* Push code to bundle */
  this.append('js', codegen.join('\n'));
};
