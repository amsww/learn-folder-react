import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React from 'react';
import { gql, useMutation,useQuery } from '@apollo/client';

const UserPage = () => {

    const httpLink = createHttpLink({
        uri: 'https://tech-demo.scandipwa.com/graphql',
      });
      
      
      let client = new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache(),
        headers: {
              ...headers,
              authorization: getToken() || null,
            },
      });

      const URL_CUS = gql`
{
customer{
  firstname
}
}`


const getToken = () => {
    const token = localStorage.getItem('token');
    return token ? `Bearer ${token}` : '';
  };

    // const token = localStorage.getItem("token");
    
    const sett= useQuery(URL_CUS)

    // if (loading) return "Loading";
    // if (error) return `error :${error}`
    
    // console.log(data,loading,error);

    const updateGraphqlHeaders = ()=>{
      const authLink = setContext((_, { headers }) => {
        return {
            headers: {
              ...headers,
              authorization: getToken() || null,
            },
          };
    })
    client.setLink(authLink.concat(httpLink))
    
    updateGraphqlHeaders()
    }

  return <div>
    <h1>jooo</h1>
  </div>;
};

export default UserPage;
