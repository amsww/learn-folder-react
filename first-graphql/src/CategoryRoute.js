import CategoryPage from './CategoryPage';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery,gql } from '@apollo/client';
import { useEffect } from 'react/cjs/react.development';
import { NotFound } from './NotFound';

const CategoryRoute = () => {


    const {id} = useParams();
    const [requiredData,setRequiredData]=useState();

    const GET_PRODUCTS = gql`
  {
  categories(filters:{url_key:{eq:\"${id}\"}}){
    items {
      children{
        name
      }
    }
  }
}
`

const {error,data,loading} = useQuery(GET_PRODUCTS);



if (error){
    return <h1>Error</h1>
}
if (loading) return <h1>Loading</h1>

if (data.categories.items.length === 0){
  return <NotFound/>
}

if (data) {
  if (data.categories.items[0].children.length>0){

return <div>
  <h1>Children</h1>
  {data.categories.items[0].children.map(item => (
    <h2>{item.name}</h2>
  ))}
  <Link to={"/"}><p>Home</p></Link>
</div>
  }

  else{
    return <NotFound/>
  }
}


};

export default CategoryRoute;
