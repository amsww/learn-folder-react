import React, { useCallback, useState } from 'react';
import Child from './useForm'

const AppNew = () => {

    const [value,setValue] = useState(0);

    const increment = useCallback(() => {
        setValue(x => x +1 );
    },[setValue])


  return (
    <div>
        <h1>{value}</h1>
        <Child increment={increment} />
    </div>
  )
}

export default AppNew