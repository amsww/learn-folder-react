import logo from './logo.svg';
import './App.css';
import InputComponent from './InputComponent'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';


function App() {

  const AddNewComp = (id) => {
    dispatch({type:"increment"});
    dispatch({type:"arrayIncr",value:buttonNumber})
  }


  const buttonNumber = useSelector(state => {
    return state.buttonNumber
  })

  const array = useSelector(state => {
    return state.array
  })

  const calBtn = useSelector(state => {
    return state.calButton
  });


  const dispatch = useDispatch();

  const buttonClick = () => {
    dispatch({type:"caltrue"})
  };





  return (

    <div className='mainApp'>
      <div className="App">
      <p className='headingText' >HOW MUCH WILL <br/> YOU NEED?</p>
      <p className='textMore'>Please note: calculations are estimates using feet, and can only be made using whole numbers.</p>
      <h1 className='text-2xl mt-4'>Enter the dimensions</h1>
      <div className='w-64'>  
      {array.map(item => (
        <InputComponent buttonNumber={item.value} 
        key={item.id} />
      ))}
      </div>
     <div className='buttons flex flex-col justify-between'>
     <button className='items-center mb-3' onClick={()=> AddNewComp(buttonNumber)}>Add new Area</button>
     <button disabled={calBtn} onClick={buttonClick} className='calculateButton w-64 disabled:bg-slate-300 bg-gray-700 rounded-sm h-12 ml-7'>Calculate</button>
     </div>
      </div>
      <div className='imageDiv'>
      <img className='imageClass' src={`${process.env.PUBLIC_URL}/HMTX.png`} />
    </div>
    </div>

  );
}

export default App;