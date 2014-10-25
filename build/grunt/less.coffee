
module.exports =
  app:
    cwd: './app'
    ext: '.css'
    dest: './dist/app'
    src: [
      '**/*.less',
      '!**/*.import.less',
      '!*node_modules*'
    ]
    expand: yes
