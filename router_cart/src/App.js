import { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import './App.css';
import One from './Routes/One';
import Two from './Routes/Two';
import Three from './Routes/Three';
import Four from './Routes/Four';
import Five from './Routes/Five';
import Six from './Routes/Six'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {

  const [cartItems,setCartItems]=useState([]);
  const totalCost = cartItems.reduce((acc,cur) => acc+cur.price*cur.qty,0);
 


  const products=[
    {id:1,price:899,name:"Bag",company:"Puma",url:`${process.env.PUBLIC_URL}/bag.png`},
    {id:2,price:100000,name:"Mobile",company:"Apple",url:`${process.env.PUBLIC_URL}/iphone.png`},
    {id:3,price:50000,name:"Laptop",company:"Dell",url:`${process.env.PUBLIC_URL}/dell.png`},
    {id:4,price:2000,name:"Fan",company:"Hawells",url:`${process.env.PUBLIC_URL}/fan.png`},
    {id:5,price:50,name:"Dishwash",company:"Prill",url:`${process.env.PUBLIC_URL}/handwash.png`},
    {id:6,price:30,name:"Water",company:"Aqua",url:`${process.env.PUBLIC_URL}/water.png`}
]

  const addToCart = id => {
    const exist = cartItems.find(item => item.id == id);
    const productItem = products.find(item => item.id == id)
    if (exist)  setCartItems(cartItems.map(item => item.id == id ? {...item,qty:item.qty+=1}:item))
     else  setCartItems([...cartItems,{...productItem,qty:1}])
  }

  const remove = (id,qty) => {
    if (qty == 1) setCartItems(cartItems.filter(item => item.id !== id))
    else setCartItems(cartItems.map(item => item.id == id  ? {...item,qty:item.qty-=1}:item))
  }

  return (<>
    <div className="App">
                  <BrowserRouter>
      <div className="subOne">
          <h2>Our products</h2>
          <table>
                  <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>company</th>
                </tr>
                  </thead>
                {products.map(item => 
               <ProductList 
               key={item.id} item={item} addToCart={addToCart} />
                )}
            </table>
        </div>
            <Routes>
                <Route exact path="/1" element={<One imgSrc={products[0].url}/>} />
                <Route exact path="/2" element={<Two imgSrc={products[1].url} />} />
                <Route exact path="/3" element={<Three imgSrc={products[2].url}/>} />
                <Route exact path="/4" element={<Four imgSrc={products[3].url}/>} />
                <Route exact path="/5" element={<Five imgSrc={products[4].url}/>} />
                <Route exact path="/6" element={<Six imgSrc={products[5].url}/>} />
            </Routes>
        </BrowserRouter>
        </div>
        {cartItems.length === 0 ? 
          <div className='emptyCart'> Your Cart is empty </div>
          :<h2>Your Orders, TotalCost=Rs.{totalCost}</h2>}
       <div className='mainCartDiv'>
        {cartItems.map(item => 
          <Cart 
          key={item.id}
          cartItems={item}
          remove={remove}
          />
        )}
       </div>
    </>
  );
}

export default App;
