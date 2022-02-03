import React, { useState } from 'react';
import './SearchBar.css'

const SearchBar = () => {

    const [inputOne,setInputOne]=useState("");
    const [inputTwo,setInputTwo]=useState("");

  return <div className='inputMainDiv'>
      <div className='inputOneDiv'>
      <input type={"number"} onChange={e=>setInputOne(e.target.value)} placeholder='Lenth' className='inputOne'></input>
      <span>ft</span>
      </div>
      <div>
      <input type={"number"} onChange={e=>setInputTwo(e.target.value)} placeholder='Lenth' className='inputTwo'></input>
      </div>
  </div>;
};

export default SearchBar;