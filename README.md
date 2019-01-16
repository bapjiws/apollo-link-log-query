# apollo-link-log-query

# CHECKLIST
- [ ] set up compilation with Babel 7
    - [x] use [babel-preset-env](https://babeljs.io/docs/en/babel-preset-env/)
    - [x] set [browserslist](https://babeljs.io/docs/en/babel-preset-env/#browserslist-integration) according to [best practices](https://github.com/browserslist/browserslist#best-practices)
    - [x] use `watch` for development, add an npm script
    - [ ] verify that the transpiled code works both on the server and the client side
- [ ] set up type checking with TypeScript
    - [ ] see `tsconfig.json` [here](https://blogs.msdn.microsoft.com/typescript/2018/08/27/typescript-and-babel-7/#) and [here](https://iamturns.com/typescript-babel/)
- [ ] write tests (see [tests for apollo-link-http](https://github.com/apollographql/apollo-link/tree/master/packages/apollo-link-http/src/__tests__) and [this article on mocking](https://hackernoon.com/extensive-graphql-testing-57e8760f1c25))
- [x] `main` field in package.json
- [ ] `prepublish(Only)` script
- [ ] `.npmignore`