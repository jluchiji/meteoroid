/* Import everything into the global scope! */
require('./packages/meteoroid.js')(this, 'renderer');

/* Import dependencies */



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
