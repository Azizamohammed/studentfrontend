import React from 'react';

import './Login.css';

function Registration(){
    return(
        <div class="containers">
      <form>
      <h2>Registration form</h2>
      <div class="input-group">
        <label for="username">Username</label>
        <input type="text" id="username" required></input>
      </div>
      <div class="input-group">
        <label for="password">Registration number</label>
        <input type="password" id="registration" required></input>
       </div>
       <div class="input-group">
        <label for="username">Email</label>
        <input type="text" id="email" required></input>
        <div class="input-group">
        <label for="password">Year</label>
        <input type="password" id="phone" required></input>
       </div>
       <div class="input-group">
        <label for="password">Program</label>
        <input type="password" id="phone" required></input>
       </div>
       <div class="input-group">
        <label for="password">Gender</label>
        <input type="password" id="phone" required></input>
       </div>
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input type="password" id="password" required></input>
       </div>
       <div class="input-group">
        <label for="password">Phone number</label>
        <input type="password" id="phone" required></input>
       </div>
       
      <button type="submit"><a href='/'>Register </a> </button> 
       
    

      

    </form>
  </div>

    );
}

export default Registration;

