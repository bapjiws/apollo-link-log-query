import { ApolloLink } from 'apollo-link';
import { print } from 'graphql/language/printer';

export const consoleLink = new ApolloLink((operation, forward) => {
    console.log(`Query: ${print(operation.query)}`);
    return forward(operation);
});