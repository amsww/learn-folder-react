import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

const InputComponent = ({buttonNumber}) => {

  const [inputOne,setInputOne] = useState(0);
  const [inputTwo,setInputTwo] = useState(0);
  const [qtyStatus,setQtyStatus] = useState(false)
  const area = inputTwo*inputOne;

  useEffect(()=> {
    if(area>0){
      dispatch({type:"calfalse"});
      setQtyStatus(false)
    }
  },[area]);


  const calBtn = useSelector(state => {
    return state.calButton
  })

  useEffect(()=> {
    if (calBtn==true) setQtyStatus(true)
  },[calBtn])


  const array = useSelector(state => {
    return state.array
  })


  const dispatch = useDispatch();

  const checkRemove = ()=>  {
    if (buttonNumber>1) {
      return <button onClick={() => removeDiv(buttonNumber)}>Remove</button>
    }
  }

  const removeDiv = (id) =>{
    dispatch({type:"arrayRed",component:id});
    dispatch({type:"decrement"})
  };

  const areaCalculate = () => {
    if (area <= 20) return 1;
     else return parseInt(area/20);
  }



  return (<div className='w-64'>
    <div className='flex justify-between mb-2'>
      <p className='ml-6'>Area {buttonNumber || 1}  {area>0 && <span>= {area} sq.cm</span>} </p>
      {checkRemove()}
    </div>
    <div>
     {qtyStatus && area >0 && <p>Quantity Required : {areaCalculate()} Units</p>}
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

export default InputComponent;