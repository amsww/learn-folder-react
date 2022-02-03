import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ApolloClient,InMemoryCache,ApolloProvider,useQuery,gql} from "@apollo/client";
import { Back } from './Back';



// const client = new ApolloClient({
//   uri:"https://venia.magento.com/graphql",
//   fetchOptions: {
//     mode: 'no-cors',
//   },
//   cache:new InMemoryCache()
// })

const client = new ApolloClient({
  uri:"https://tech-demo.scandipwa.com/graphql",
  fetchOptions: {
    mode: 'no-cors',
  },
  cache:new InMemoryCache()
})


ReactDOM.render(
  <React.StrictMode>
    {/* <ApolloProvider client={client}>
    <App />
    </ApolloProvider> */}
    <ApolloProvider client={client}>
    <Back />
    </ApolloProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// useEffect(()=>{
//     if (data){
//         const qq=data.products.items.filter(item => {
//            if (item.name==id){
//                return true
//            }
//            else setRequiredData(undefined)
//            return false
//        })
//        setRequiredData(qq)

//    }
// },[data])