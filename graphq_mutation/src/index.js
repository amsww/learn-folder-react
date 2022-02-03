import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloClient, ApolloProvider,InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri:"https://tech-demo.scandipwa.com/graphql",
  fetchOptions: {
    mode: 'no-cors',
  },
  cache:new InMemoryCache()
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


// import { useQuery } from "react-query";
// import { GraphQLClient, gql } from "graphql-request";

// const API_URL = `https://tech-demo.scandipwa.com/graphql`;

// const graphQLClient = new GraphQLClient(API_URL, {
//   headers: {
//     Authorization: `Bearer bjw3721ua5lni7lin902bcpnrohubu3w`
//   }
// });

// function App() {
//   return useQuery("get-posts", async () => {
//     const { getPostList } = await graphQLClient.request(gql`
//       {
//   customer{
//     firstname
//     date_of_birth
//   }
// }
//     `);
//     return getPostList;
//   });
// }

// export default App;