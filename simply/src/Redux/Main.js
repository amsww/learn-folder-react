import React from 'react';
import { useDispatch,useSelector } from 'react-redux';

const Main = () => {

    const value = useSelector(state => {
        return state.value
    });
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch({type:"increment"})
    }

  return (
    <>
    <button onClick={incrementHandler}>Add 1</button>
    <h1>{value}</h1>
    </>
  )
}

export default Main