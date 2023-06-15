import React from 'react';
import { useState } from 'react';
import './App.css'
import Form from './Components/Form';
import UserList from './Components/List';
import Errorcard from './Components/ErrorCard';
function App() {

  const [flag , SetFlag] = useState(true);
  const [userArr , SetuserArr] = useState([]); 

  const AddUser = (name,age)=>{
    const temp = {name:name,age:age};
    SetuserArr((prev) =>{
      return[...prev , temp]
    })
    console.log(userArr)
  }
  const ErrorHandler = ()=>{
    console.log("erroroccured")
    SetFlag(false)
  }
  const ActivateForm = ()=>{
    SetFlag(true)
  }

  return (
    <div className={`app-container`}>
      <Form adduser ={AddUser} isactive ={flag} errorhandler ={ErrorHandler}  ></Form>   
      <UserList data={userArr}></UserList>   
      {flag == false ? <Errorcard activate ={ActivateForm}></Errorcard>:""}
    </div>
  );
}

export default App;
