import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery,gql } from '@apollo/client';
import { NotFound } from './NotFound';


const ProductPage = () => {
 
    const {id} = useParams();
    

    const GET_DETAILS = gql`
{
  products(filter:{url_key:{eq:\"${id}\"}}){
    items{
      name
      image{
        url
      }
    }
  }
    
}
`

const {error,data,loading} = useQuery(GET_DETAILS);


if (loading) return <h2>Loading</h2>
if (error) return <h>Try again</h>

if (data.products.items==0) return<NotFound/>

if (data){
  return <div>
      <img src={data.products.items[0].image.url} style={{width:"200px"}} />
      <p>{data.products.items[0].name}</p>
      <Link to={"/"}><p>Home</p></Link>
  </div>;
}



};

export default ProductPage;




