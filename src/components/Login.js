// import React, { useState } from 'react';
// import './Login.css';

// function Login(){
//   const[username,usernameUpdate]=useState('');
//   const[password,passwordUpdate]=useState('');

//   const ProceedLoginconst=(e)=>{
//     e.preventDefault();
//   } 
//     return(
//         <div class="containerl">
//       <form>
//       <h2>Login</h2>
//       <div class="input-group">
//         <label for="username">Username</label>
//         <input type="text" id="username" required></input>
//       </div>
//       <div class="input-group">
//         <label for="password">Password</label>
//         <input type="password" id="password" required></input>
//        </div>
//        <button type="submit">Login</button>
//       <div>
//         <p>If you  dont have an account?<a href='/reg'><span>register here</span></a> </p>
//       </div>
//     </form>
//   </div>

//     );
// }

// export default Login;

import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Login = () => {
  const[data,setData] =useState({
    userId:"",
    password:"",
    userStatus:"",
  

  });


  const handlerChange =(event) =>{
    setData({...data,[event.target.name]: event.target.value});


  }

 
 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();
  

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (validate()){
     // alert("wow");

     fetch("http://localhost:8080/User/byId"+username).then((res)=>{
      return res.json();
     }).then((resp)=>{
     // console.log(resp);
     if(Object.keys(resp).length === 0 ){
      alert("please isert valid username");
     }else{
      if(resp.password === password){
        //alert("sussessful"+resp.userStatus);
        if(resp.userStatus === "admin"){
          history.push("/dash");
          
        }if(resp.userStatus === "student"){
            history.push("/Profile");
            //window.location.reload();
        }

        window.location.reload();

      }else{
        alert("enter valid  password");
      }
     }
     }).catch((error)=>{
      alert("error"+error);
     });
    }
    
  
    axios.post('http://localhost:8080/User/add',data)
    .then(response => {
      console.log(response.data); 
      
      alert("inserted success");
      })
      .catch((error) =>{
        console.log(error);
      }); 



    }

    const validate = () =>{
      let  result = true;
      if(username ==='' || username === null){
        result = false;
        alert("enter user name");
      }

      if(password ==='' || password === null){
        result = false;
        alert("enter password");
      }
      return result;
    }

  
  return (
    <div class="containerl">
    <form onSubmit={handleSubmit}>
    <h2>Login</h2>
      <div class="input-group">

        <label>Username:</label>
        <input
          type="text"
          name='userId'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        
        />
      </div>
      
      <div class="input-group">

        <label>Password:</label>
        <input
          type="password"
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
      <div>
         <p>If you  dont have an account?<a href='/reg'><span>register here</span></a> </p>
       </div>
    </form>
    </div>
  );
};

export default Login;
