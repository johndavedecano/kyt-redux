# Universal React-Redux starter-kyt

This starter-kyt should serve as the base for an advanced, server and client-rendered React app.


## Installation

1. Create a new directory and install [kyt](https://github.com/NYTimes/kyt)
2. `kyt-cli setup -r https://github.com/johndavedecano/kyt-redux.git`

## Tools

The following are some of the tools included in this starter-kyt:

- [Express](https://expressjs.com/) - Server-side rendering
- [React](https://facebook.github.io/react/) - Component library
- [Redux](https://github.com/reactjs/redux) - Server and client rendering
- [React Router](https://github.com/reactjs/react-router) with [React Router Redux](https://github.com/reactjs/react-router-redux) - Server and client routing
- [Sass Modules](https://github.com/css-modules/css-modules) - CSS Modules with a Sass pre-processor for styles
- [Enzyme](https://github.com/airbnb/enzyme) - React component testing
- [Redux DevTools](https://github.com/gaearon/redux-devtools)
- [Redux Thunk](https://github.com/gaearon/redux-thunk)
- [Redux Logger](https://github.com/evgenyrodionov/redux-logger)
- [Redux Redux Router](https://github.com/reactjs/react-router-redux)
- [React Helmet](https://github.com/nfl/react-helmet)
- [Reselect](https://github.com/reactjs/reselect)
- [Normalizr](https://github.com/paularmstrong/normalizr)
- [ImmutableJS](https://github.com/indexiatech/redux-immutablejs)
- [Axios](https://github.com/mzabriskie/axios)

NOTE: kyt doesn't copy devDependencies, which include redux-devtools, so make sure to install these after setup

## TODO
- Example of redux reducer, preferably with a thunk + fetch

## Notes on implementation

- As a performance optimization, React Router routes are loaded dynamically and chunked separately using the ES2015 `System.import` directive. See more about  [Webpack 2 support](https://gist.github.com/sokra/27b24881210b56bbaff7#code-splitting-with-es6) and [dynamic routing](https://github.com/reactjs/react-router/blob/master/docs/guides/DynamicRouting.md).

## How To Contribute
Want to build your own starter-kyt?
See directions [here](https://github.com/NYTimes/kyt/blob/master/docs/Starterkyts.md).