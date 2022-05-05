import React from 'react';
import { useState } from 'react/cjs/react.development';
import SearchBarTwo from './SearchBarTwo';

const Two = ({buttonValue,areaProduct,switchView}) => {
  
    const [newComp,setNewComp]= useState(true);
    const [buttonCount,setButtonCount]= useState(2);


    const RemoveDiv = (id) => setArrayNew(arrayNew.filter (u => u.key !== id-1))
    const [arrayNew,setArrayNew]=useState([ <SearchBarTwo buttonCount={1} RemoveDiv={RemoveDiv}/> ])

    const onAddButton = (buttonCount) => {
        setArrayNew([...arrayNew,<SearchBarTwo buttonCount={buttonCount} RemoveDiv={RemoveDiv}/>])
    }

  return  <>
  <button className='addButton' onClick={()=>(setNewComp(!newComp),switchView(newComp))}>Calculate by Width and Length</button>
    {arrayNew.map(item => item)}
  <div>
  <button type="button" onClick={()=>(onAddButton(buttonCount),setButtonCount(buttonCount+1))}  className='addButton' style={{marginLeft:"20px"}}>Add another area</button>
  <button disabled={buttonValue}  className='calculateButton' onClick={()=> areaProduct()} >Calculate</button>
  </div>
  </>
}

export default Two;
