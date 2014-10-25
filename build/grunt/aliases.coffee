
module.exports =
  default: [ ]

  bootstrap: [
    'download-atom-shell',
    'shell:bootstrap',
    'shell:app'
  ]

  build: [
    'clean:app',
    'less:app',
    'mrd-build-module',
    'copy'
  ]

  run: [
    'shell:run'
  ]
