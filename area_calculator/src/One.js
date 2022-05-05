import React from 'react';
import { useState } from 'react/cjs/react.development';

const One = ({array,buttonNumber,onAddButtonClick,setButtonNumber,switchView}) => {
  
    const [newComp,setNewComp]= useState(false);

    const updateDetails= () => {
      setNewComp(!newComp)
      switchView(newComp)
    }
    
    const AddFunction = () => {
      onAddButtonClick(buttonNumber)
      setButtonNumber(buttonNumber+1)
    }


  return  <>
  <button className='addButton oneButton' onClick={()=>updateDetails()}>Calculate by Square Footage</button>
  {array.map(item => item )}
  <div>
  <button type="button" onClick={()=>AddFunction()}  className='addButton'>Add another area</button>
  </div>
  </>
}

export default One;
