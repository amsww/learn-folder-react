import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useQuery,gql } from '@apollo/client';
import ProductPage from './ProductPage';
import { NotFound } from './NotFound';

const Home = () => {

    const {id} = useParams();
    const navigate=useNavigate();
    

    const GET_DETAILS = gql`
    {
  urlResolver(url:\"${id}\"){
    type
  }
}
`

const slicedId=id.slice(0,id.length-5);

const {error,data,loading} = useQuery(GET_DETAILS);


if (loading) return <h2>Loading</h2>

if (error) return <h2>Error</h2>


if (data){

  if (data.urlResolver==null)  {
    navigate('/notfound')
    return <NotFound/>
  }

  if (data.urlResolver.type == "PRODUCT"){
    navigate(`/product/${slicedId}`)
  }

  if (data.urlResolver.type == "CATEGORY"){
    navigate(`/category/${slicedId}`)

  }
  return<></>



}
navigate('/notfound')
return <NotFound/>
 
};

export default Home;
