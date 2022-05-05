import React, { useEffect, useRef, useState } from 'react';
import './SearchBar.css'

const SearchBar = ({buttonNumber,RemoveDiv,UpdateDEtails,buttonValue}) => {

    const [inputOne,setInputOne]=useState("");
    const [inputTwo,setInputTwo]=useState("");
    const myRef = useRef(0);
    const [buttonStatus,setButtonStatus] = useState(true);

    const areaSquare=inputOne*inputTwo;

    useEffect(()=> {
        UpdateDEtails(areaSquare,myRef);
        myRef.current.style.display="none"
    },[areaSquare])


    const checkRemove = () => {
      if (buttonNumber >1){
        return <button className='addButton' onClick={() => RemoveDiv(buttonNumber)}>Remove</button>
      }}

      const UpdateQuantity = () =>{
        if (areaSquare/20 < 1) return 1
        else return parseInt(areaSquare/20) 
      }


  return<div>

  <div className='inputMainDiv' style={{display:"flex",flexDirection:"column"}}>
    <div >
      <div className='areaDiv'>
      <p className='areaNUmber' >AREA {buttonNumber} </p>
        {areaSquare > 0  &&  <p className='squareFeetDiv'> = {parseFloat(areaSquare)}<span>SQ FT</span></p> } 
        {checkRemove()}
      </div> 
        <p ref={myRef} className='QuantityDiv '>{UpdateQuantity()} Quantity Required</p>
    </div>
      <div className='inputOneDiv'>
        <div className='inputOneSub'>
      <input type={"number"} onChange={e=>setInputOne(e.target.value)} placeholder='Width' className='inputOne'></input>
      <span>ft</span>
        </div>
        <div className='inputTwoDiv'>
        <input type={"number"} onChange={e=>setInputTwo(e.target.value)} placeholder='Length' className='inputTwo'></input>
      <span>ft</span>
        </div>
      </div>
  </div>
  </div> 
};

export default SearchBar;