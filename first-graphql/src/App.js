import logo from './logo.svg';
import './App.css';
import { Characters } from './Characters';
import {BrowserRouter,Routes,Route,Link, useParams} from 'react-router-dom';
import { useState } from 'react';
import Home from './Home';
import CategoryRoute from './CategoryRoute';
import ProductPage from './ProductPage';
import { Back } from './Back';
import {NotFound} from './NotFound'



function App() {


  return (
    <div className="App">
      <BrowserRouter>
     <Routes>
            <Route path="/" element={<Back/>}></Route>
            <Route path='/:id' element={<Home/>}></Route>
            <Route path='/product/:id' element={<ProductPage/>}></Route>
            <Route path='/category/:id' element={<CategoryRoute/>}></Route>
            <Route path="/notfound" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// venia-bottoms
// venia-accessories
// shop-the-look
// venia-tops

// ombre-infinity-scarf
// salt-water-magazine
// augusta-trio

// venia-accessories.html
// augusta-trio.html


