/* Import everything into the global scope! */
require('./packages/meteoroid.js')(this);

/* Import dependencies */



/* UI Code */
$(document).ready(function () {
  var myName = new ReactiveVar('Meteoroid');

  Tracker.autorun(function () {
    $('#greeting').text('Hello, ' + myName.get() + '!');
  });

  $('#reload').click(function () {
    document.location.reload();
  });

  $('form').submit(function (e) {
    e.preventDefault();
    var name = $('#name').val();
    if (name === '') name = 'Meteoroid';
    myName.set(name);
  });
});
