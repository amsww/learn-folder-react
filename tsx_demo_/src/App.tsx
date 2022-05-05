import React, { useState } from 'react';
import './App.css';
// import Test from './Test'

function App() {



  const updateDetails = (x:number) => {
    if ( x== 1) console.log(2)
  }

  return (
    <div className="App" style={{marginTop:"20px"}}>
     <button onClick={()=> updateDetails(1)}> Click </button>
    </div>
  );
}

export default App;