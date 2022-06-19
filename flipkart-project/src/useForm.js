import { useState,memo } from "react";

const  Child = ({increment})=> {

    console.log("haii")

    return <div>
        <button onClick={increment} >Increment</button>
    </div>
   
}

export default memo(Child);