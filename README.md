This link allows to log GraphQL queries for debugging purposes.

<h2 id="installation">Installation</h2>

```
npm install apollo-link-log-query
```

<h2 id="usage">Usage</h2>

Import and [compose](https://www.apollographql.com/docs/link/composition.html) with other links using `ApolloLink.from`:

```js
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import fetch from 'node-fetch';
import { consoleLink } from 'apollo-link-log-query';

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: ApolloLink.from([consoleLink, new HttpLink({uri: 'https://fakerql.com/graphql', fetch})]),
  cache
});
```

# CHECKLIST
- [x] update README with a descripton, installation instructions, and an example of usage
- [ ] set up compilation with Babel 7
    - [x] use [babel-preset-env](https://babeljs.io/docs/en/babel-preset-env/)
    - [x] set [browserslist](https://babeljs.io/docs/en/babel-preset-env/#browserslist-integration) according to [best practices](https://github.com/browserslist/browserslist#best-practices)
    - [x] use `watch` for development, add an npm script
    - [ ] verify that the transpiled code works both on the server and the client side
- [ ] set up type checking with TypeScript
    - [ ] see `tsconfig.json` [here](https://blogs.msdn.microsoft.com/typescript/2018/08/27/typescript-and-babel-7/#) and [here](https://iamturns.com/typescript-babel/)
- [ ] write tests (see [tests for apollo-link-http](https://github.com/apollographql/apollo-link/tree/master/packages/apollo-link-http/src/__tests__) and [this article on mocking](https://hackernoon.com/extensive-graphql-testing-57e8760f1c25))
- [x] double-check the `main` field in package.json
- [ ] set up the `prepublish(Only)` script
- [ ] add `.npmignore`
