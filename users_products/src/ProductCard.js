import React from 'react';
import "./ProductCard.css";


const ProductCard = ({item:{id,name,price,company,url},addProduct}) => {

    
  return (
    <div>
        <div >
            <img className="card__image" src={url}/>
        </div>
        <div className="productDet">
        <div className="card__details">
            <div>
            <span className="spaceRequired">{name}</span>
            <button 
                onClick={() => addProduct(id)}
                className='buttonBuy'>Buy</button>
            </div>
            <span className="span1">₹{price}</span>
            <span className="span2">{company}</span>
            <br/>
          </div>
          <div className="card__size">
          </div>
        </div>
    </div>
  )
}

export default ProductCard