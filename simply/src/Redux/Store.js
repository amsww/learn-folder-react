import { createStore } from "redux";

function AppReducer( prevState={value:0},action)  {
    switch(action.type){
        case "increment" : 
        return {
            ...prevState,value:prevState.value+1
        }
    }
};

const reduxStore = createStore(AppReducer);
const prevState= reduxStore.getStore();

export default reduxStore;