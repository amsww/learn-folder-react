import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = ({item,addToCart}) => {
  return (
    <tbody  key={item.id}>
    <tr>
      <td>{item.id}</td>
      <td><Link to={`/${item.id}`}>{item.name}</Link></td>
      <td>{item.price}</td>
      <td>{item.company}</td>
      <td>
        <button className='buttonBuy' onClick={()=> addToCart(item.id)}>Add</button>
      </td>
    </tr>
  </tbody>
  )
}

export default ProductList