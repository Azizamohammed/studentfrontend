import React from 'react';
import './Login.css';

function Login(){
    return(
        <div class="container">
      <form>
      <h2>Login</h2>
      <div class="input-group">
        <label for="username">Username</label>
        <input type="text" id="username" required></input>
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input type="password" id="password" required></input>
       </div>
       <button type="submit">Login</button>
      <div>
        <p>If you  dont have an account?<a href='/reg'><span>register here</span></a> </p>
      </div>
    </form>
  </div>

    );
}

export default Login;