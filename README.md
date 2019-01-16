# apollo-link-log-query

# CHECKLIST
- [ ] set up compilation with Babel 7
    - [x] use [babel-preset-env](https://babeljs.io/docs/en/babel-preset-env/)
    - [ ] use [browserslist](https://babeljs.io/docs/en/babel-preset-env/#browserslist-integration) from [create-react-app](https://github.com/facebook/create-react-app/blob/96ba7bddc1600d6f5dac9da2418ee69793c22eca/packages/react-scripts/package.json#L82-L94) (the latest browsers during development and a larger range of browsers in production)
    - [x] use `watch` for development, add an npm script
    - [ ] verify that the transpiled code works both on the server and the client side
- [ ] set up type checking with TypeScript
    - [ ] see `tsconfig.json` [here](https://blogs.msdn.microsoft.com/typescript/2018/08/27/typescript-and-babel-7/#) and [here](https://iamturns.com/typescript-babel/)
- [ ] write tests (see [tests for apollo-link-http](https://github.com/apollographql/apollo-link/tree/master/packages/apollo-link-http/src/__tests__) and [this article on mocking](https://hackernoon.com/extensive-graphql-testing-57e8760f1c25))
- [x] `main` field in package.json
- [ ] `prepublish(Only)` script
- [ ] `.npmignore`