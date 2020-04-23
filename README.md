
[![npm version](https://img.shields.io/npm/v/apollo-link-log-query.svg)](https://www.npmjs.com/package/apollo-link-log-query)

This link allows to log GraphQL queries for debugging purposes. So far it has been tested on the server and on the client side using a [repo](https://github.com/bapjiws/apollo-playground-for-fakerql) talking to https://fakerql.com/. Local tests are to come.

<h2 id="installation">Installation</h2>

```
npm install apollo-link-log-query
```

<h2 id="usage">Usage</h2>

Import and [compose](https://www.apollographql.com/docs/link/composition.html) with other links using `ApolloLink.from`. 

On the **server** side, go like this:

```js
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import fetch from 'node-fetch';
import { consoleLink } from 'apollo-link-log-query';

const client = new ApolloClient({
  link: ApolloLink.from([consoleLink, new HttpLink({uri: 'https://fakerql.com/graphql', fetch})]),
  cache: new InMemoryCache()
});

client.query({query: gql`
  query Users {
	allUsers(count: 1) {
	  id
	  firstName
	  lastName
	}
  }
`})
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

On the **client** side, go like this:

```js
import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider, Query } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import fetch from 'node-fetch';
import { consoleLink } from 'apollo-link-log-query';

const client = new ApolloClient({
  link: ApolloLink.from([consoleLink, new HttpLink({uri: 'https://fakerql.com/graphql', fetch})]),
  cache: new InMemoryCache()
});

const Users = () => (
  <Query
	query={gql`
	  query Users {
		allUsers(count: 1) {
		  id
		  firstName
		  lastName
		}
	  }
	`}
  >
	{({ loading, error, data }) => {
	  if (loading) return <p>Loading...</p>;
	  if (error) return <p>Error :(</p>;

	  return data.allUsers.map(({ id, firstName, lastName }) => (
	  <div key={id}>
	    <p>{firstName} {lastName}</p>
	  </div>
	  ));
	}}
  </Query>
);

const App = () => (
  <ApolloProvider client={client}>
	<>
	  <h2>My cool Apollo app! 🚀</h2>
	  <Users/>
	</>
  </ApolloProvider>
);

render(<App />, document.getElementById("root"));
```

<h2 id="checklist">CHECKLIST</h2>

- [x] update README with a descripton, installation instructions, and an example of usage
- [x] set up compilation with Babel 7
    - [x] use [babel-preset-env](https://babeljs.io/docs/en/babel-preset-env/)
    - [x] set [browserslist](https://babeljs.io/docs/en/babel-preset-env/#browserslist-integration) according to [best practices](https://github.com/browserslist/browserslist#best-practices)
    - [x] use `watch` for development, add an npm script
    - [x] verify that the transpiled code works on the server side
    - [x] verify that the transpiled code works on the client side
- [ ] set up type checking with TypeScript
    - [ ] see `tsconfig.json` [here](https://blogs.msdn.microsoft.com/typescript/2018/08/27/typescript-and-babel-7/#) and [here](https://iamturns.com/typescript-babel/)
- [ ] write tests (see [tests for apollo-link-http](https://github.com/apollographql/apollo-link/tree/master/packages/apollo-link-http/src/__tests__) and [this article on mocking](https://hackernoon.com/extensive-graphql-testing-57e8760f1c25))
- [x] double-check the `main` field in package.json
- [x] set up the `prepublish(Only)` script
- [x] add `.npmignore`
