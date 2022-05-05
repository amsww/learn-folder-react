import './App.css';
import { useEffect, useState } from 'react';
import Users from './Users';
import Deleted from './Deleted';
import Archive from './Archive';

function App() {
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => setData(json))
  },[])

  const [data,setData] = useState([]);
  const [deleted,setDeleted] = useState([]);
  const [archive,setArchive] = useState([]);
  
  const deleteData = (id) => {
    const deletedDatas = data.filter(item => {
      if (item.id !== id) {
        return true
      }
      else {
        setDeleted([...deleted,item]);
        return false;
      }
    })
    setData(deletedDatas)
  }

  const archieveData = (id) => {
    const archivedData = deleted.filter(item => {
      if (item.id !== id){
        return true;
      }
      else {
        setArchive([...archive,item])
      }
    })
    setDeleted(archivedData)
  }

  const onArchive = (id) => {
    const ww = archive.filter(item => {
      if (item.id !== id){
        return true;
      }
      else {
        setData([...data,item])
         returfalse
      }
    })
    setArchive(ww)
  }

  

  return (
    <div className="App">
      <div>
      <h1>Users Data</h1>
       <table>
            <tbody>
      {data.map(item =>
          <Users key={item.id} users={item} deleteData={deleteData} />
        )}
          </tbody>
        </table>
      </div>
      <div>
      <h1>Deleted Data</h1>
       <table>
            <tbody>
      {deleted.map(item =>
          <Deleted key={item.id} users={item} archieveData={archieveData} />
        )}
          </tbody>
        </table>
      </div>
      <div>
      <h1>Archived Data</h1>
       <table>
            <tbody>
      {archive.map(item =>
          <Archive key={item.id} users={item} onArchive={onArchive} />
        )}
          </tbody>
        </table>
      </div>
     
    </div>
  );
}

export default App;