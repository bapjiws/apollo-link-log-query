---
title: apollo-link-log-query
description: Log GraphQL queries.
---

This link allows to log (selected) GraphQL queries for debugging purposes.

<h2 id="usage">Usage</h2>

Import and initialize this link in just two lines:

```js
import { createLogQueryLink } from "apollo-link-log-query";

const link = createLogQueryLink({ compact: true });
```

<h2 id="options">Options</h2>

Log query link takes an object with some options on it to customize the behavior of the link. The options you can pass are outlined below:

* `compact`: strip insignificant whitespace, defaults to false (uses RegExp from `normalize` helper from [graphql-tag](https://github.com/apollographql/graphql-tag/blob/master/src/index.js#L7))
