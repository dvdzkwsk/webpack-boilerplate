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
This boilerplate comes preconfigured with a development and production configuration, but you can add more more as needed by creating a .js file with the same name as the targeted node environment. These files only need to export their changes against the default configuration (found in `build/webpack/configs/default`), as they will be merged into the default configuration before being exported to Webpack.

How to Use
----------
While the setup allows you to run `webpack` directly from the CLI, it's recommended to use the build scripts provided in `package.json`:

#### `npm run compile`
Runs the webpack build with your current node environment; compiles the results to disk.

#### `npm run compile:prod`
Runs the production webpack build with the NODE_ENV environment variable set to "production". This will by default enable functionality such as minification and dead/unused code removal.

#### `npm run dev`
Runs the webpack development server at `http://localhost:3000` (inlined at `http://localhost:3000/webpack-dev-server/`).

#### `npm run dev:quiet`
Same as `npm run dev`, but hides verbose debugging information.

Troubleshooting
---------------
### Build error: libsass bindings not found
This error is generally caused by an out-of date (or non-existent) node-sass library. Check your global node-sass version if you already have it installed and make sure it satisfies version `^3.0.0`. If your global version meets this requirement and you're still having issues, try to install the package locally with `npm install node-sass`.

### Cannot find inlined Webpack development server
In order to access the inlined version of the development server, make sure you're including the trailing slash after "webpack-dev-server" in the url: `http://localhost:3000/webpack-dev-server/`.
