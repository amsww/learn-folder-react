import React from 'react';
import {useQuery,gql } from '@apollo/client';
import {Products} from './Products.js';




const GET_CHARACTERS = gql`
{
 products(filter:{price:{from:"0",to:"9999"}}){total_count
  items {
    image{
      url
    }
    name 
    url_key
  }
}
}
` 


export const Characters = ({dataFetch}) => {

  
  const {error,data,loading} = useQuery(GET_CHARACTERS);
  dataFetch(data);

    return <></>
};


