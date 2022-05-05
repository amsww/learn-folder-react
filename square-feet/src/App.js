import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import Counter from './Counter'
import { useState } from 'react';

function App() {


  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>
     
    </div>
  );
}

export default App;
