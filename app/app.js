/* Import everything into the global scope! */
Meteoroid = require('./modules/meteoroid/core.js').Meteoroid;
Meteoroid.load(this, 'meteoroid:boilerplate')

/* Import dependencies */

Meteoroid.startup(function () { Session.set('greeting', 'Startup'); });

/* UI Code */
$(document).ready(function () {
  Session.setDefault('greeting', 'Meteoroid')

  Tracker.autorun(function () {
    $('#greeting').text('Hello, ' + Session.get('greeting') + '!');
  });

  $('#reload').click(function () {
    document.location.reload();
  });

  $('form').submit(function (e) {
    e.preventDefault();
    var name = $('#name').val();
    if (name === '')
      name = 'Meteoroid';
    Session.set('greeting', name);
  });
});
