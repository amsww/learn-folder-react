import logo from './logo.svg';
import './App.css';
import ProductCard from './ProductCard';
import { useState ,useRef} from 'react';



function App() {

  const [user,setUser] = useState("");
  const [userField,setUserField]= useState("");
  const [userDetails,setUserDetails] = useState([]);
  const [userProducts,setUserProducts] = useState([]);
  const userRef = useRef("");



  const addProduct = (id) => {
    const exist = userProducts.find(item => item.id == id);
    if (!exist) {
      userProducts.push({id,qty:1})
    } else {
      setUserProducts(userProducts.map(item => item.id == id ? {...item, qty:item.qty+=1}:item));
    }
    setUserDetails(userDetails.map(item => item.username == user ? {...item,product:userProducts}:item))
    console.log(userProducts)
  }
  
  
  const adduser =() => {
     setUserField(user)
    const exist = userDetails.findIndex(item => item.username === user);
    userRef.current.value="";
    if (exist == -1 ){
      setUserProducts([])
      userDetails.push({username:user,key:Math.random(), product:[]});
    } else {
      setUserProducts(userDetails[exist].product)
    }
    setUserDetails(userDetails.filter(item=> item.username !== ""))
    }

    console.log(userDetails)

    const reduceQty = (id,qty) => {
      if (qty > 1){
        setUserProducts(userProducts.map(item => item.id == id ? {...item,qty:item.qty-=1}:item))
      } else {
        setUserProducts(userProducts.filter(item => item.id !== id))
      }
    }
  
    const removeItem = (id) => {
      setUserProducts(userProducts.filter(item => item.id !== id))
    }

  

  const products=[
    {id:1,price:899,name:"Bag",company:"Puma",url:`${process.env.PUBLIC_URL}/bag.png`},
    {id:2,price:100000,name:"Mobile",company:"Apple",url:`${process.env.PUBLIC_URL}/iphone.png`},
    {id:3,price:50000,name:"Laptop",company:"Dell",url:`${process.env.PUBLIC_URL}/dell.png`},
    {id:4,price:2000,name:"Fan",company:"Hawells",url:`${process.env.PUBLIC_URL}/fan.png`},
    {id:5,price:50,name:"Dishwash",company:"Prill",url:`${process.env.PUBLIC_URL}/handwash.png`},
    {id:6,price:30,name:"Water",company:"Aqua",url:`${process.env.PUBLIC_URL}/water.png`}
]


  return (<>
  <div className='inputDiv'>
    <h3>Enter the username</h3>
    <input ref={userRef}  onChange={e=> setUser(e.target.value)} className='userInput'/>
    <button onClick={adduser} className='buttonBuy'>Go</button>
  </div>
      <h3 className='hThree'>Our Products</h3>
    <div className="App">
      {products.map(item => 
        <ProductCard 
          item={item} 
          key={item.id}
          addProduct={addProduct}
        />
      )}
    </div>
      {userField && <div>
        <h2>Welcome {userField}</h2>
        {userProducts.length !== 0 && <h1>Your Cart</h1>}
        <table >
        {userProducts.map(item => (
          <tbody key={item.id}>
              <tr >
            <td>{products[item.id-1].company}</td>
            <td>--Rs. {products[item.id-1].price}--</td>
            <td> --{item.qty} Quantity -- </td>
            <td>Total Rs :{item.qty*products[item.id-1].price}</td>
            <td><button className='buttonBuy' onClick={()=>reduceQty(item.id,item.qty)}>Reduce Quanity</button></td>
            <td><button className='buttonBuy' onClick={()=>removeItem(item.id)}>Remove</button></td>
              </tr>
              </tbody>
        ))}
            </table>
    </div>}
    </>
  );
}

export default App;