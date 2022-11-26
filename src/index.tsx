import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from "@apollo/client";

import App from "./App";
import "./styles/index.scss";

const client = new ApolloClient({
  uri: "https://cors-everywhere.herokuapp.com/https://beta.pokeapi.co/graphql/v1beta",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          pokemon_v2_pokemon: {
            keyArgs: ["where"],
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            },
          },
        },
      },
    },
  }),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
);
