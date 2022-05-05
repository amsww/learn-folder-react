import { createStore } from "redux";

const initialValue = {buttonNumber:2,array:[{value:1,id:parseInt(Math.random(2)*10000)}],calButton:true}
const appDetails = (prevState=initialValue,action) => {

    
switch(action.type){
    case "increment": {
        return {...prevState,buttonNumber:prevState.buttonNumber+1}
    }
    case "decrement": {
        return {...prevState,buttonNumber:prevState.buttonNumber-1}
    }
    case "arrayIncr":{
        return {...prevState,array:[...prevState.array,{value:action.value,id:parseInt(Math.random(2)*10000)}]} 
    }

    case "arrayRed" : {
        return {...prevState,array:prevState.array.filter(item => item.value !== action.component)
        .map(item => item.value > action.component ? {...item,value:item.value-1} :item)} 
    }
    case "calfalse":{
        return {...prevState,calButton:false}
    }
    case "caltrue":{
        return {...prevState,calButton:true}
    }
    default : return prevState
}
}

const store = createStore(appDetails)
export default store;