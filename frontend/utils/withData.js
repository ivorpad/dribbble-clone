import withApollo from "next-with-apollo";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from "apollo-upload-client";
import { onError } from "apollo-link-error";

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) graphQLErrors.map(({ message }) => console.log(message));
});

// In order to handle graphql uploads we'd need to eject from apollo-boost and create
// a custom ApolloClient

function createClient({ headers }) {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: errorLink.concat(createUploadLink({ uri: `http://localhost:4000` })),
    uri: `http://localhost:4000`,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: "include"
        },
        headers
      });
    }
  });
}

export default withApollo(createClient);
