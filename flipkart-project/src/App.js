import React,{useState} from "react";
import Header from "./Header";
import {Data} from './Data';
// import Card from './Card';
// import './Card.css';


function App() {
  // const [addToCart,setAddToCart] = useState([])
  // const [productList, setProductList] = useState(Data)
  // const setInputValue=(item) => {
  //   const filtered=Data.filter(product=> product.name==item);
  //   setProductList(filtered)
  // }

  // const addProduct =(item)=>{
  //   setAddToCart([...addToCart,item])
  //   console.log(addToCart)
  // }
  

  return (
    <>
    <Header/>
  
          {/* <Header setInputValue={setInputValue} /> */}
          {/* <div style={{ display: "flex", flexWrap: "wrap" }}>
            {productList.map((item) => <Card  item={item} addProduct={addProduct}/>)}
          </div> */}
    </>
  );
}

export default App;