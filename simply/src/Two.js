import { useContext } from "react";
import { UserContext } from "./useContext";


function Two() {

    const user1 = useContext(UserContext);
  
    return (
      <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user1} again!`}</h2>
      </>
    );
  }

  export default Two;
  
  