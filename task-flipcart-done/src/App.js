import React,{useState} from "react";
import Header from "./Header";
import Data from '../src/Data.json';
import Card from './Card';
import './Card.css';
import { Route, Routes,BrowserRouter } from "react-router-dom";
import UserCart from "./UserCart";
import ProductDetails from "./ProductDetails";

function App() {
  const [addToCart,setAddToCart] = useState([])
  const [productList, setProductList] = useState(Data)
  const setInputValue=(item) => {
    const filtered=Data.filter(product=> product.name==item);
    setProductList(filtered);
    console.log(item)
  }


  const addProduct =(item)=>{
    setAddToCart([...addToCart,item])
    console.log(addToCart)
  }
  

  return (
    <>
    <BrowserRouter>
          <Header setInputValue={setInputValue} />
           <div style={{ display: "flex", flexWrap: "wrap" }}>
            {productList.map((item) => <Card  item={item} addProduct={addProduct}/>)}
          </div>
    </BrowserRouter>
    </>
  );
}

export default App;

