import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React from 'react';
import { gql, useMutation,useQuery } from '@apollo/client';
import UserPage from './UserPage';

const Submit = ({email,confirmPassword}) => {

 
  const ADD_CHECK = gql`
  mutation {
   generateCustomerToken(email:"${email}\",
   password:\"${confirmPassword}\"
   ){
     token
   }
 }
`;




     const [addTodo, { data, loading, error }] = useMutation(ADD_CHECK);
     console.log(data, loading, error )

    if (data){
        if (data.generateCustomerToken.token){
           localStorage.setItem('token', data.generateCustomerToken.token );
          }
          return <UserPage />
    }

      
      

     let input;

  return <div>
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo()}}>
        <button style={{margin:"100px"}} type="submit">Confirm Login</button>
      </form>
    </div>
  </div>;
};

export default Submit;

// import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
// import React from 'react';
// import { gql, useMutation,useQuery } from '@apollo/client';

// const UserPage = () => {


// const httpLink = createHttpLink({
//     uri: 'https://tech-demo.scandipwa.com/graphql',
//   });
  
//   const authLink = setContext((_, { headers }) => {
//     // get the authentication token from local storage if it exists
//     const token = localStorage.getItem('token');
//     // return the headers to the context so httpLink can read them
//     return {
//       headers: {
//         ...headers,
//         authorization: token ? `Bearer ${token}` : "",
//       }
//     }
//   });
  
//   const client = new ApolloClient({
//     link: authLink.concat(httpLink),
//     cache: new InMemoryCache()
//   });

     
//   const URL_CUS = gql`
//   {
//   customer{
//     firstname
//   }
//   }`



//     // const token = localStorage.getItem("token");
    
//     const sett= useQuery(URL_CUS)

    

//   return <div>
//     <h1>jooo</h1>
//   </div>;
// };

// export default UserPage;







