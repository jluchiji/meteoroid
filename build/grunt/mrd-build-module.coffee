
module.exports =
  meteor:
    expand: yes
    cwd: './modules/meteor'
    src: ['*']
    dest: './dist/app/modules/meteor'
  meteoroid:
    expand: yes
    cwd: './modules/meteoroid'
    src: ['*']
    dest: './dist/app/modules/meteoroid'
