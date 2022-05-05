import React ,{useState} from 'react';
import './App.css';

function App() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [objects,setObjects]= useState([]);
  const [disabled,setDisabled] = useState(true);

  let nameLength = 0;
  
  const nameHandler = e => {
    setName(e.target.value);
    nameLength = name.length;
    console.log(nameLength)
  }
  // console.log(nameLength)

  const emailHandler = e => {
    setEmail(e.target.value);
  }

  const submitHandler = () => {
    setObjects([...objects,{name,email}]);
    console.log(objects);
    setName("");
    setEmail("");
  }

  return (
    <div className="App">
     <input onChange={nameHandler} value={name}/>
     <input onChange={emailHandler} value={email}/>
     <button 
     onClick={submitHandler}
     disabled={disabled}
     >Submit</button>
    </div>
  );
}

export default App;
