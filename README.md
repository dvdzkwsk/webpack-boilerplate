Webpack Boilerplate
===================

Simple boilerplate to get up and running with a webpack-based build system. The webpack configuration is built based on the current node environment, e.g. "development" and "production". This works because `webpack.config.js` calls `build/webpack/make.js` internally, which then dispatches to `build/webpack/configs/${process.env.NODE_ENV}`, with the default set to "development".

The boilerplate comes preconfigured with a development and production configuration, but you can add more more as needed by creating a .js file with the same name as the targeted node environment. Environment-specific configuration files only need to export their changes against the default configuration (found in `build/webpack/configs/default`), as the two will be merged before being exported to webpack. If you need to reference properties from the default configuration, simply require it via `const config = require ('../make');`.

How to Use
----------

While the setup allows you to run vanilla `webpack` from the CLI, it's recommended to use the build scripts provided in `package.json`. These include:

### `npm run build`
Runs the webpack build with your current node environment.

### `npm run build:prod`
Runs the production webpack build with the NODE_ENV environment variable set to "production". This will by default enable functionality such as minificatio and dead/unused code removal.

### `npm run dev`
Runs the webpack development server at `http://localhost:3000` (inlined at `http://localhost:3000/webpack-dev-server/`).

### `npm run dev:quiet`
Same as `npm run dev`, but hides verbose debugging information.

TODO
----
* [ ] Feature overview
* [ ] Server/port configuration file to maintain consistency between webpack-dev-server and app entry point.
