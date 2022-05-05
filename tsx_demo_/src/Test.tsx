import React from 'react';

interface ee {
    value:{name:string,age:number}[]
}



const Test:React.FC<ee> = ({value}) => {
  return (
    <div>
            {value.map(item => item.name)}
    </div>
  )
}

export default Test;
