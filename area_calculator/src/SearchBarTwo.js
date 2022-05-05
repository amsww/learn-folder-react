import React,{useState} from 'react';


const SearchBarTwo = ({buttonCount,RemoveDiv}) => {

    const [inputOne,setInputOne]=useState("");
    const checkRemove = () => {
      if (buttonCount >1){
        return <button className='addButton' onClick={() => RemoveDiv(buttonCount)}>Remove</button>
      }
    }

  return <div className='inputMainDiv' style={{display:"flex",flexDirection:"column"}}>
  <div className='areaDiv'>
        <p style={{fontSize:"20px",fontWeight:"300",margin:"0px"}}>Area {buttonCount}  </p>
       {inputOne > 0  &&  <p>= {inputOne}<span>SQ FT</span></p> }
       {checkRemove()}
  </div>
    <div className='inputOneDiv'>
      <div className='inputOneSub'>
    <input type={"number"} onChange={e=>setInputOne(e.target.value)} placeholder='Square feet' className='inputOne'></input>
    <span className='spanNew'>ft</span>
      </div>
    </div>
</div>;
};

export default SearchBarTwo;
