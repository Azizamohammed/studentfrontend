import React, { useState } from 'react';

import './Login.css';
import axios from 'axios';

function Registration(){

  const[data,setData] =useState({
    stuname:"",
    email:"",
    program:"",
    gender:"",
    password:"",
    campus:"",

  });


  const handlerChange =(event) =>{
    setData({...data,[event.target.name]: event.target.value});


  }

  const handleSubmit =(event) =>{
    event.preventDefault();
    axios.post('http://localhost:8080/Student/add',data)
    .then(response => {
      console.log(response.data); 
      
      alert("inserted success");
      })
      .catch((error) =>{
        console.log(error);
      }); 


  }

  
    return(
        <div class="containers">
      <form onSubmit={handleSubmit}>
      <h2>Registration form</h2>
      <div class="input-group">
        {/* <label for="username">Username</label> */}
        <input name='stuname' type="text" id="username" value={data.stuname} onChange={handlerChange} placeholder='name' required></input>
      </div>
    
       <div class="input-group">
        {/* <label for="username">Email</label> */}
        <input name='email' type="text" id="email" value={data.email} onChange={handlerChange} placeholder='email' required></input>
        </div>
        <div class="input-group">
        {/* <label for="password">Year</label> */}
        <input name='password' type="password" id="pasword" onChange={handlerChange} value={data.password} placeholder='password' required></input>
       </div>
        <div class="input-group">
        {/* <label for="password">Gender</label> */}
        <input name='gender' type="text" id="phone" onChange={handlerChange}  value={data.gender}placeholder='gender' required></input>
       </div>
      
       <div class="input-group">
        {/* <label for="password">Phone number</label> */}
        <input name='campus' type="text" id="phone" onChange={handlerChange} placeholder='campus' value={data.campus} required></input>
       </div>

       <div class="input-group">
        {/* <label for="password">Phone number</label> */}
        <input name='program' type="text" id="phone"onChange={handlerChange} placeholder='program' value={data.program} required></input>
       </div>
       
      <button type="submit"><a href='/'>Register </a> </button> 
       
    

      

    </form>
  </div>

    );
}

export default Registration;

