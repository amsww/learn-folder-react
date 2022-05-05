import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

export const TestPage = () => {
    const [state,setState] = useState(false)

    const active = useSelector(state => {
        return state.active;
      });

      const dispatch = useDispatch(); 

      console.log(active)
    
  return (
    <div>
        <button disabled={active} onClick={()=> setState(!state)}>Welcome</button>
        {state && !active && <h1>Welcome All</h1>}
    </div>
  )
}
