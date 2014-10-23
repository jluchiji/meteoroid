_ = require 'underscore'
path = require 'path'
fs = require 'fs'
chalk = require 'chalk'


fence = '/* ============================================================ */'

module.exports = (grunt) ->

  grunt.registerMultiTask 'mrd-build-module', 'Builds Meteoroid modules.', ->

    # Function to compile the module into its final form
    buildModule = (dir, output) ->
      # Read module info
      info = grunt.file.readJSON path.join dir, 'module.json'
      # Log the package name so that we can see the progress
      grunt.log.write 'Building ' + chalk.red(info.name) + '...'
      # Generated code goes here
      generated = []
      # Push comments
      generated.push fence
      generated.push '/* This file is automatically generated by Meteoroid build task */'
      generated.push '/* For more info, see <https://github.com/jluchiji/meteoroid>   */'
      generated.push fence + '\n\n'
      # Load Meteoroid tools
      generated.push fence
      generated.push '/* Import Meteoroid package loader */'
      generated.push fence
      generated.push 'var load = require(\'../meteoroid-load.js\');'
      # Load dependencies
      generated.push '\n\n' + fence
      generated.push '/* Import dependencies */'
      generated.push fence
      # Always load meteoroid:core module
      generated.push 'load(this, \'meteoroid:core\');'
      for dep in (info.use ? [ ]) # Allow undefined dependencies
        generated.push 'load(this, \''  + dep + '\');'
      # Load module files
      for file in info.files
        generated.push '\n\n' + fence
        generated.push '/* Included file: '+ path.basename(file) + ' */'
        generated.push fence
        generated.push grunt.file.read path.join(dir, file)
      # Handle exports
      generated.push '\n\n' + fence
      generated.push '/* Exports */'
      generated.push fence
      generated.push 'module.exports = {'
      for exp in _.initial(info.export)
        generated.push '  \'' + exp + '\': ' + exp + ','
      generated.push '  \'' + _.last(info.export) + '\': ' + _.last(info.export) + '\n};'
      # Write the resulting file
      #grunt.file.write path.join(output, 'module.js'), generated.join '\n'
      grunt.file.write output + '.js', generated.join '\n'
      # Log build completion
      #grunt.log.writeln chalk.green(output + '.js')
      grunt.log.writeln chalk.green('OK!')

    # Compile each module
    @files.forEach (filePair) ->
      isExpandedPair = filePair.orig.expand

      filePair.src.forEach (src) ->
        buildModule src, filePair.dest
