
import ReactDOM from "react-dom";
import Two from "./Two";
import { useState, createContext } from "react";

export const UserContext = createContext();


function UseContext() {
  const [user, setUser] = useState(false);

  const changeValue = () => setUser(()=> !user);

  return (
    <UserContext.Provider value={user}>
      <button onClick={changeValue}>Change</button>
      <Two />
    </UserContext.Provider>
  );
}

export default UseContext;
