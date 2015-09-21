Webpack Boilerplate
===================

[![Build Status](https://travis-ci.org/davezuko/webpack-boilerplate.svg?branch=master)](https://travis-ci.org/davezuko/webpack-boilerplate/)

**NOTE**: This project has been moved to my [React-Redux-Starter-Kit](https://github.com/davezuko/react-redux-starter-kit) which is actively supported and much more feature complete. If this works for you, awesome, if not go check that out :).

Simple boilerplate to get up and running with a [Webpack](http://webpack.github.io/)-based build system; designed to make environment-specific configuration as easy as possible. This boilerplate is the result of multiple iterations and lessons I've learned over time, from Jake to Grunt to Gulp, and now on to Webpack. Will it be something new tomorrow? Probably, but this boilerplate has stayed with me longer than any I've used prior, and I've tried to keep it as flexible as possible to accommodate inevitable changes.

Table of Contents
-----------------
1. [About](#about)
1. [Features](#features)
1. [Why Webpack](#why-webpack)
1. [How to Use](#how-to-use)
1. [Creating Unit Tests](#creating-unit-tests)
1. [Troubleshooting](#troubleshooting)

About
-----
This boilerplate comes preconfigured with a development and production configuration, but you can add more more as needed by following the pattern in `~/build/webpack/configs/client`, where `client` is the name of the bundle. This setup gives you a standardized default configuration with the ability to create multiple bundles and update them on a per-environment basis. If you add more bundles, don't forget to update `webpack.config.js`!.

Features
--------

For recruiters:
 * Babel (ES6, JSX)
 * React
 * Sass
 * Karma w/ Mocha, Chai, and PhantomJS
 * ESLint with Babel-lint
 * Webpack w/ Webpack-dev-server

For everyone else:

* Babel-loader to transform ES6 and JSX for all `.js` and `.jsx` files
  * Pre-configured to include the babel-runtime and support optional transformations
* Development and production modes out of the box
  * Development: enables Webpack's dev server and React hot-loader
  * Production: minification and css extraction
* Sass Loader with autoprefixer and local aliases
* Easy environment configuration on a per-webpack-entry-point basis
* Configurable vendor bundle to split application code from 3rd-party dependencies
* Unit testing with Karma, PhantomJS, Mocha, and the Chai assertion library
* ESLint with a sample configuration
  * Production build configured by default to fail on errors
* Aliases for common local requires
* Pre-configured NPM scripts for common tasks

Why Webpack?
------------

If you haven't already hopped on the Webpack bandwagon, here's a brief introduction to its awesomeness. It's configuration based, so in that sense it's closer to Grunt than to Gulp, but that configuration is much more powerful with Webpack. Just out of the box, with just Webpack and its dev server companion, you get bundle splitting, cache busting, hot module replacement (think of livereload but per file/chunk, meaning its possible to refresh _only what changed_), and even the ability to `require` non-JS assets. Cool, huh?

How to Use
----------

### Directory Structure

It's pretty simple, and all you'll probably end up caring about is the `~/src` directory, which contains the `index.html` file that Webpack bakes during `npm run compile` or uses as the base in development mode. In `~/src/entry-points` you'll find a `client` folder, which is the main entry point for the sample Webpack configuration in `~/build/webpack/client`.

### Available Scripts

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

#### `npm run test:e2e`
Similar to `npm run test`, but only runs E2E tests. (NOT YET AVAILABLE)

Creating Unit Tests
-------------------

Karma's unit test entry file is `~/karma.entry.js` which scans the `~/src` directory for all files matching `.spec.js`, so creating a unit test is as easy as creating that file. The chai assertion library will be available to you from within this file, no requires necessary, so you can just get to testing!

Troubleshooting
---------------

### Cannot find inlined Webpack development server
In order to access the inlined version of the development server, make sure you're including the trailing slash after "webpack-dev-server" in the url: `http://localhost:3000/webpack-dev-server/`.
