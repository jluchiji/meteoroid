path = require 'path';

module.exports = (grunt) ->

  # Load grunt tasks
  grunt.loadNpmTasks 'grunt-download-atom-shell'
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-shell'

  # Set root to the project root for convenience
  grunt.file.setBase path.resolve '..'

  # Project configuration
  grunt.initConfig
    'clean':
      atom: ['./dist/Atom*']
      app: ['./dist/app']
    'download-atom-shell':
      version: '0.17.2'
      outputDir: './dist'
      reuild: yes
    'copy':
      packages:
        expand: yes
        cwd: './packages'
        src: ['**/*.*']
        dest: './dist/app/packages'
      app:
        expand: yes
        cwd: './app'
        src: ['**/*.html', '**/*.js', '**/*.css', '**/*.json']
        dest: './dist/app'
    'shell':
      run:
        command: './dist/Atom.app/Contents/MacOS/Atom ./dist/app'


  # Register task
  grunt.registerTask 'download-atom', ['download-atom-shell']
  grunt.registerTask 'build', ['clean:app', 'copy']
