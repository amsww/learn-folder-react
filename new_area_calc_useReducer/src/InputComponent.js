import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react';
import { ACTIONS } from './App';

const InputComponent = ({btn,dispatch,disableBtn}) => {

    const [inputOne,setInputOne] = useState();
    const [inputTwo,setInputTwo] = useState();
    const [qtyStatus,setQtyStatus] = useState(false)

    const area = inputTwo*inputOne;

    useEffect(()=> {
      if (area >0) {
        dispatch({type:ACTIONS.DIS_BTN});
        setQtyStatus(false)
      }
    },[area])

    useEffect(() => {
      if (disableBtn == true && area >0) setQtyStatus(true)
    },[disableBtn])

    const checkRemove = ()=>  {
        if (btn>1) {
          return <button onClick={() => removeDiv(btn)}>Remove</button>
        }
      }

      const quantityCalculate = () => {
        if (area < 20) return 1;
        else return parseInt(area/20)
      }

      const removeDiv = () => {
        dispatch({type:ACTIONS.ARR_SUB,payload:btn});
        dispatch({type:ACTIONS.BTN_DEC})
      }

  return (
    <div className='w-64'>
    <div className='flex justify-between mb-2'>
      <p className='ml-6'>Area {btn}  {area>0 && <span>= {area} sq.cm</span>} </p>
      {checkRemove()}
    </div>
    <div>
     { qtyStatus && area>0 && <p>Quantity Required : {quantityCalculate()} Units</p>}
    </div>
    <div className='flex justify-between ml-5'>
      <div className='flex flex-row justify-between border-2 h-10'>
      <input onChange={e => setInputOne(e.target.value)} className='pl-2 w-24 outline-none' placeholder='Width' />
      <p className='pr-4 mt-2'>cm</p>
      </div>
      <div className='flex flex-row justify-between border-2 ml-5 h-10 mb-3'>
      <input onChange={e => setInputTwo(e.target.value)} className='pl-2 w-24 outline-none' placeholder='Length' />
      <span className='pr-4 mt-2'>cm</span>
      </div>
    </div>
    </div>
  )
}

export default InputComponent