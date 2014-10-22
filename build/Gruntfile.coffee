path = require 'path'
os = require 'os'

module.exports = (grunt) ->

  # Load grunt tasks
  grunt.loadNpmTasks 'grunt-download-atom-shell'
  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks 'grunt-contrib-less'
  grunt.loadNpmTasks 'grunt-shell'

  grunt.loadTasks './tasks'

  # Set root to the project root for convenience
  grunt.file.setBase path.resolve '..'

  # Figure out platform-specific commands
  cliRun = switch os.platform()
    when 'linux' then path.resolve './dist/atom-shell/atom'
    when 'darwin' then path.resolve './dist/Atom.app/Contents/MacOS/Atom'
    when 'win32' then path.resolve './atom-shell/atom.exe'
    else grunt.fail 'OS not supported...'



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
      modules:
        expand: yes
        cwd: './modules'
        src: ['**/*', '!meteor/*']
        dest: './dist/app/modules'
      app:
        expand: yes
        cwd: './app'
        src: ['**/*.html', '**/*.js', '**/*.css', '**/*.json', 'assets/*.*']
        dest: './dist/app'
    'less':
      app:
        expand: yes
        cwd: './app'
        src: ['**/*.less', '!**/*.import.less', '!*node_modules*']
        dest: './dist/app'
        ext: '.css'
    'shell':
      bootstrap:
        command: 'cd modules && npm install'
      app:
        command: 'cd app && npm install'
      run:
        command: cliRun + ' ./dist/app'
    'mrd-build-module':
      meteor:
        expand: yes
        cwd: './modules/meteor'
        src: ['*']
        dest: './dist/app/modules/meteor'



  # Register tasks
  grunt.registerTask 'bootstrap', ['download-atom-shell', 'shell:bootstrap', 'shell:app']
  grunt.registerTask 'build', ['clean:app', 'less:app', 'mrd-build-module', 'copy']
  grunt.registerTask 'run', ['shell:run']
