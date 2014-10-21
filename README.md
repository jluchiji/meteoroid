# Meteoroid
**Meteoroid:** bigger than dust but smaller than an asteroid.
[Meteor][1] flavored [Atom Shell][2]. Or [Atom Shell][2] flavored [Meteor][1].

This project attempts to produce a cross between [meteor][1] and [atom-shell][2]. Wouldn't be full stack reactivity awesome for building desktop applications? I think so.

## Directory Structure
 - `app`: Boilerplate app for testing purposes
 - `build`: Gruntfile and build scripts
 - `src`: Meteoroid-specific scripts
 - `packages`: Meteor packages

## Project Goal
At this point the goal of this project is **not** porting the entire meteor to the atom-shell because it makes little sense. Meteor is a server-client framework, but atom-shell runs locally, despite it having distinct *browser* and *renderer* processes.

I believe that atom-shell is in need of a specialized, meteor-based framework that would bring in the full stack reactivity, while preserving its ability to utilize any node.js module. Therefore the framework will only contain the bare minimal of meteor packages required to establish full-stack reactivity. I do not plan to support meteor packages or make the package system modular. We kinda already have something for that, which is called `npm`.

[1]: https://github.com/meteor/meteor
[2]: https://github.com/atom/atom-shell
