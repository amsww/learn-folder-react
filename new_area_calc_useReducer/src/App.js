import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';
import InputComponent from './InputComponent';

export const ACTIONS = {
  BTN_INC:"Increment_button",
  BTN_DEC:"decrement_button",
  ARR_ADD:"array_add_item",
  ARR_SUB:"array_subtraction",
  DIS_BTN:"button_disable",
  ENB_BTN:"button_enable"
}

function reducer(state,action){
  switch (action.type){
    case ACTIONS.BTN_INC :
      return {...state,btn:state.btn+1}
      case ACTIONS.BTN_DEC:
        return {...state,btn:state.btn-1}
        case ACTIONS.ARR_ADD:
          return {...state,array:[...state.array,{btn:state.btn,id:Math.random()}]};
          case ACTIONS.ARR_SUB:
            console.log(action.payload)
            return {...state,array:state.array.filter(item => item.btn !== action.payload)
                                              .map(item => item.btn > action.payload ? {...item,btn:item.btn-1}:item)}
          case ACTIONS.ENB_BTN: 
          return {...state,disableBtn:true};
          case ACTIONS.DIS_BTN: 
          return {...state,disableBtn:false}
          
            default:return state;
  }
}


function App() {
  const [state,dispatch] = useReducer(reducer,{btn:1,disableBtn:true,array:[{btn:1,id:Math.random()}]});
  console.log(state)

  const addComponent = () => {
    dispatch({type:ACTIONS.BTN_INC});
    dispatch({type:ACTIONS.ARR_ADD});
  }
  
  const calBtn = () => {
    dispatch({type:ACTIONS.ENB_BTN})
  }

  return (
    <div className="App">
      <div className='mainApp'>
      <div className="App">
      <p className='headingText' >HOW MUCH WILL <br/> YOU NEED?</p>
      <p className='textMore'>Please note: calculations are estimates using feet, and can only be made using whole numbers.</p>
      <h1 className='text-2xl mt-4'>Enter the dimensions</h1>
      <div className='w-64'>  
      {state.array.map(item => (
        <InputComponent dispatch={dispatch} key={item.id} btn={item.btn} disableBtn={state.disableBtn}/>
      ))}
      </div>
     <div className='buttons flex flex-col justify-between'>
     <button className='items-center mb-3' onClick={()=> addComponent()}>Add new Area</button>
     <button disabled={state.disableBtn} onClick={calBtn} className='calculateButton w-64 disabled:bg-slate-300 bg-gray-700 rounded-sm h-12 ml-7'>Calculate</button>
     </div>
      </div>
      <img className='imageClass' src={`${process.env.PUBLIC_URL}/HMTX.png`} />
    </div>
    </div>
  );
}

export default App;
