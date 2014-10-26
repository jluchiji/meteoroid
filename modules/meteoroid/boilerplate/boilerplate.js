/* jQuery */
jQuery = require('jquery');
$ = jQuery;

/* Aliases */
Session = new ReactiveDict();

/* Make Meteoroid extend Meteor for convenience
 * Note that meteoroid:core is an implicit dependency here.
 */
_.extend(Meteoroid, Meteor);
