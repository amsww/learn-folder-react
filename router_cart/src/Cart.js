import React from 'react';
import './App.css'

const Cart = ({cartItems,remove}) => {

    const {name,id,company,price,qty} = cartItems;

  return (
    <>
        <div className='cartDiv'>
                <div className='insideCart'>
                    <h4>{name}</h4>
                    <h4>company:{company}</h4>
                    <h4>Unit Price:{price}</h4>
                    <h4>Quantity:{qty}</h4>
                    <h4>Total:Rs : {qty*price}</h4>
                    <button className='buttonBuy' onClick={()=>remove(id,qty)}>Remove</button>
                </div>
        </div>
    </>
  )
}

export default Cart