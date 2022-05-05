import React from 'react';
import {createStore} from 'redux';

const initialValue = {value:0,active:true,enable:true}


function AppReducer (prevState=initialValue,action) {
    switch(action.type) {
        case 'increment': return {...prevState,value:prevState.value+1}
        case 'decrement': return {...prevState,value:prevState.value-1}
        case 'active': return {...prevState,active:prevState.active=true}
        case 'inactive': return {...prevState,active:prevState.active=false}
        case 'enable': return {...prevState,enable:prevState.enable=false};
        case 'disable': return {...prevState,enable:prevState.enable=true}
        default: return prevState;
    }
}

const store =  createStore(AppReducer)

export default store;
