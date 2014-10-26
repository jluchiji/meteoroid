os   = require 'os'
path = require 'path'

cliRun = switch os.platform()
  when 'linux' then path.resolve '../dist/atom-shell/atom'
  when 'darwin' then path.resolve '../dist/Atom.app/Contents/MacOS/Atom'
  when 'win32' then path.resolve '../atom-shell/atom.exe'
  else grunt.fail 'OS not supported...'

module.exports =
  bootstrap:
    command: 'cd modules && npm install'
  app:
    command: 'cd app && npm install'
  run:
    command: cliRun + ' ./dist/app'
