path = require 'path'
os = require 'os'

module.exports = (grunt) ->

  # Load grunt tasks
  require('load-grunt-config')(grunt)
  grunt.loadTasks './tasks'

  # Set root to the project root for convenience
  grunt.file.setBase path.resolve '..'
