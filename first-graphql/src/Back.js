import React, { useRef, useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import validator from 'validator'
import { useEffect } from 'react/cjs/react.development';
import Submit from './Submit';



export const Back = () => {

  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
  const [radio,setRadio]=useState(false);
  const [signinButton,setSigninButton]=useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  


    const ADD_TODO = gql`
    mutation {
    createCustomer(input:{firstname:\"${firstName}\",
    lastname:\"${lastName}\",
    email:\"${email}\",
    password:\"${confirmPassword}\"
    }){
      customer{
        __typename
      }
    }
    }
    `;

  
  const validate = (value) => {
  
    if (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setErrorMessage('Is Strong Password');
      setSigninButton(false);
    } else {
      setErrorMessage('Is Weak Password');
      setSigninButton(true);
    }
  }



  let input;

  const [addTodo, { data, loading, error }] = useMutation(ADD_TODO);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  if (data){
    if (data.createCustomer.customer.__typename == "Customer"){
     return (
     <Submit email={email} confirmPassword={confirmPassword}/>
     )
    }
  }

  return (
    <div>
      <form onSubmit={e => {e.preventDefault();addTodo({ variables: { text: input.value } });input.value = '';}}>

 <div>
    <div className='signUp'>
      <h2>Sign Up</h2>
      <p>First Name 
        <input ref={node => {input = node}} type={"text"} onChange={(e)=>setFirstName(e.target.value)} ></input>
        </p>
        <p>Last Name 
        <input type={"text"} onChange={(e)=>setLastName(e.target.value)}></input>
        </p>
        <p>Email 
        <input type={"mail"} onChange={(e)=>setEmail(e.target.value)}></input>
        </p>
        <pre>
        <span>Enter Password: </span><input type="password"
          onChange={(e) => (validate(e.target.value),setPassword(e.target.value))}></input> <br />
        <span style={{fontWeight: 'bold'}}>{errorMessage}</span>
      </pre>
        <p>Confirm
        <input type={"password"} onChange={(e)=>setConfirmPassword(e.target.value)} ></input>
        </p>
        <p>Subscription<input onClick={()=> setRadio(!radio)} type={"radio"}></input></p>
        <button  >Sign Up</button>
        </div>
    <div className='signIn'></div>
  </div>
    </form>
  </div>
    );
  }



  // disabled={!(password == confirmPassword && signinButton==false)}
  // 
// npm install validator