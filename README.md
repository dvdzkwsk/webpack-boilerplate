Webpack Boilerplate
===================

[![Build Status](https://travis-ci.org/davezuko/webpack-boilerplate.svg?branch=master)](https://travis-ci.org/davezuko/webpack-boilerplate/)

Simple boilerplate to get up and running with a [Webpack](http://webpack.github.io/)-based build system; designed to make environment-specific configuration as easy as possible.

Table of Contents
-----------------
1. [About](#about)
1. [Features](#features)
1. [How to Use](#how-to-use)
1. [Troubleshooting](#troubleshooting)

About
-----
This boilerplate comes preconfigured with a development and production configuration, but you can add more more as needed by creating a `.js` file in `~/build/webpack/configs`. These files only need to export changes against the default configuration as the two will be merged before being exported to Webpack.

Features
--------

For recruiters:
 * Babel (ES6, JSX)
 * React
 * PostCSS
 * ESLint
 * Webpack w/ Webpack-Dev-Server

For everyone else:

* Babel-loader to transform ES6 and JSX for all `.js` and `.jsx` files
  * Pre-configured to include the babel-runtime and support optional transformations
* Development and production modes out of the box
  * Development: enables Webpack's dev server and React hot-loader
  * Production: minification and css extraction
* PostCSS loader to support `.css` requires and transformations
* Easy environment configuration on a per-webpack-entry-point basis
* Configurable vendor bundle to split application code from 3rd-party dependencies
* Unit testing with Karma, PhantomJS, Mocha, and the Chai assertion library
* ESLint with a sample configuration
  * Production build configured by default to fail on errors
* Aliases for common local requires
* Pre-configured NPM scripts for common tasks

How to Use
----------

#### `npm run compile`
Runs the Webpack build with your current node environment; compiles the results to disk.

#### `npm run dev`
Runs the Webpack development server at `http://localhost:3000` (inlined at `http://localhost:3000/webpack-dev-server/`).

#### `npm run dev:quiet`
Same as `npm run dev`, but hides verbose debugging information.

#### `npm run test`
Runs all tests (both unit and E2E) for the application. Will run in live (watch) mode when the active `NODE_ENV` is development, and only once in production. Coverage reports are also built to `~/dist/coverage` when tests are run in production mode.

#### `npm run test:unit`
Similar to `npm run test`, but only runs unit tests.

Troubleshooting
---------------

### Cannot find inlined Webpack development server
In order to access the inlined version of the development server, make sure you're including the trailing slash after "webpack-dev-server" in the url: `http://localhost:3000/webpack-dev-server/`.
