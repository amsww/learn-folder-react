import { ApolloClient, createHttpLink, InMemoryCache,gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


function App() {


  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://furtados.codilar.in/graphql",
    fetchOptions: {
      mode: 'no-cors',
    },
  });
  

  const httpLink = createHttpLink({
    uri: 'https://furtados.codilar.in/graphql',
    fetchOptions: {
    mode: 'no-cors',
  },
  });
  
const MY_QUERY=gql`
{
  customer{
    firstname
    date_of_birth
  }
}
`


  client.query({
    query: MY_QUERY,
    // context: {
    //   headers: {
    //     authorization:`Bearer 7adgxzwgbv1l5plymotv5ywnu52sl0cp`,
    //   }
    // }
  });
  
 
  
 
    return <div>
      <h2>Hii</h2>
     </div>
}

export default App;


// const httpLink = new HttpLink({uri: 'https://tech-demo.scandipwa.com/graphql'});
// authorization: `Bearer bjw3721ua5lni7lin902bcpnrohubu3w`,
 