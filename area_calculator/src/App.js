import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect, useRef } from 'react/cjs/react.development';
import react, { useState } from 'react';
import SearchBar from './SearchBar';
import './SearchBar.css';
import One from './One';
import Two from './Two';


function App() {
  const [buttonNumber,setButtonNumber]=useState(2);
  const [newComp,setNewComp]= useState(true);
  const [buttonValue,setButtonValue]= useState(true);
  const calculateBtnRef = useRef(0);
  const [area,setArea] = useState(0);
  const [ref,setRef] = useState("")



  const UpdateDEtails =(area,refDiv) => {
      setArea(area);
      setRef([...ref,refDiv]);
      if (area !== 0) setButtonValue(false)
      else setButtonValue(true)
  }


  const QuantityCalculate = () => {
    setButtonValue(true)
    ref.map(item => item.current.style.display="block");
  }

const switchView = (data) => setNewComp(data)

const RemoveDiv = (id) => {
setArray(array.filter(u => u.key !== id))
setButtonNumber(buttonNumber)
}

  const [array,setArray]=useState([<SearchBar buttonValue={buttonValue} buttonNumber={1} key={1} RemoveDiv={RemoveDiv} UpdateDEtails={UpdateDEtails}/>]);


  const onAddButtonClick = (buttonNumber) => {
  setArray([...array,<SearchBar buttonValue={buttonValue} buttonNumber={buttonNumber} key={buttonNumber} RemoveDiv={RemoveDiv} UpdateDEtails={UpdateDEtails}/>])
  }



  const renderSwicher = () => {
    
    if(newComp) {
      return(
        <One switchView={switchView} 
        array={array} 
        buttonNumber={buttonNumber} 
        onAddButtonClick={onAddButtonClick} 
        setButtonNumber={setButtonNumber} /> 
      )
    }

    return (
      <Two switchView={switchView} />
    )
  }

  return (
    <div className='mainApp' >
    <div className="App" >
      <p className='headingText' >HOW MUCH WILL <br/> YOU NEED?</p>
      <p className='textMore'>Please note: calculations are estimates using feet, and can only be made using whole numbers.</p>
      {renderSwicher()}
      <button disabled={buttonValue} ref={calculateBtnRef} className='calculateButton' onClick={()=> QuantityCalculate()}  >CALCULATE</button>
    </div>
    <div className='imageDiv'>
      <img className='imageClass' src={`${process.env.PUBLIC_URL}/HMTX.png`} />
    </div>
    </div>
  )
}

export default App;




