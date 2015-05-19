Webpack Boilerplate
===================

Simple boilerplate to get up and running with a [Webpack](http://webpack.github.io/)-based build system; designed to make environment-specific configuration as easy as possible.

Table of Contents
-----------------
1. [About](#about)
1. [How to Use](#how-to-use)
1. [Troubleshooting](#troubleshooting)

About
-----
This boilerplate comes preconfigured with a development and production configuration, but you can add more more as needed by creating a `.js` file in `~/build/webpack/configs`. These files only need to export changes against the default configuration as the two will be merged before being exported to Webpack.

How to Use
----------
The default setup will configure itself based on the current `NODE_ENV`, but can be forced with the `--make` argument - e.g., `npm run compile --make test`. Doing this will modify what configuration file is used but _won't_ modify the `NODE_ENV`. This is useful because it allows you to, for example, compile the application to disk in development mode, or run the hot development server with the production configuration.

#### `npm run compile`
Runs the Webpack build with your current node environment; compiles the results to disk.

#### `npm run compile:prod`
Runs the production Webpack build with the NODE_ENV environment variable set to "production". This will by default enable functionality such as minification and dead/unused code removal.

#### `npm run dev`
Runs the Webpack development server at `http://localhost:3000` (inlined at `http://localhost:3000/webpack-dev-server/`).

#### `npm run dev:quiet`
Same as `npm run dev`, but hides verbose debugging information.

Troubleshooting
---------------
### Build error: libsass bindings not found
This error is generally caused by an out-of date (or non-existent) node-sass library. Check your global node-sass version if you already have it installed and make sure it satisfies version `^3.0.0`. If your global version meets this requirement and you're still having issues, try to install the package locally with `npm install node-sass`.

### Cannot find inlined Webpack development server
In order to access the inlined version of the development server, make sure you're including the trailing slash after "webpack-dev-server" in the url: `http://localhost:3000/webpack-dev-server/`.
