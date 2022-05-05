import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { TestPage } from './TestPage';

const Counter = () => {

  const value = useSelector(state => {
    return state;
  });

  const active = useSelector(state => {
    return state.vale
  })

  const enable = useSelector(state => {
    return state.enable
  })


  console.log(value)

  const dispatch = useDispatch(); 

  return (
    <div>
      <button onClick={()=> dispatch({type:"increment"})} >Add </button>
      <label>{value.value}</label>
      <button onClick={()=> dispatch ({type:"decrement"})} > Subtract </button>
      <button disabled={!enable} onClick={()=> (dispatch({type:'inactive'}),dispatch({type:'enable'})) } >Enable</button>
      <button disabled={enable} onClick={()=> dispatch({type:'active',type:'disable'})} >Disable</button>
      <TestPage />
    </div>
  )
}

export default Counter;