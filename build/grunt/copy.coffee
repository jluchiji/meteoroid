
module.exports =
  modules:
    cwd: './modules'
    src: [
      'twitter/**/*',
      'node_modules/**/*',
      'package.json',
      'meteoroid*.*'
    ]
    dest: './dist/app/modules'
    expand: yes
  app:
    cwd: './app'
    src: [
      '**/*.html',
      '**/*.js',
      '**/*.json',
      'assets/*.*'
    ]
    dest: './dist/app'
    expand: yes
