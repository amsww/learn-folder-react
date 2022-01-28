import logo from './logo.svg';
import './App.css';
import { RowOne } from './RowOne';

function App() {
  const AddRow=()=>{
    return <h1>hiii</h1>
  }

  return (
    <div className="App">
      <RowOne />
      <button onClick={()=>AddRow()}>Add</button>
    </div>
  );
}

export default App;
