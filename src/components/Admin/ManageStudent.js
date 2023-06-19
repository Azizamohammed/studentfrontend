import Footer from "../Footer";
import React, { useEffect, useState } from "react";
import Header from "../Header";
import Navigation from "../Navigation";
import axios from "axios";


function ManageStudent(){
  const [data,setData] = useState([]);
   
  useEffect(() => {
    fatchData();
  },[] );

  const fatchData = async () => {

    try{
      const response = await axios.get("http://localhost:8080/Student/all");

      //console.log(response.data);

      setData(response.data);

    }catch(error){
      console.log(error);
    }

  };
    return(
        <><Header></Header><Navigation></Navigation><div class="content">
          <h2>Manage Student</h2>
            

  <table>
    <thead>
    <tr>
      <th>Registration number</th>
      <th>Full name</th>
      <th>Program</th>
      <th>Email</th>
      
      <th>Cumpas</th>
      <th>Gender</th>
    </tr>
    </thead>
    <tbody>
    {data.map((item) => (

<tr key={item.regnumber}>
<td>{item.regnumber}</td>
<td>{item.stuname}</td>
<td>{item.program}</td>
<td>{item.email}</td>
<td>{item.campus}</td>
<td>{item.gender}</td>


</tr>
    ) )};
    </tbody>
    
  </table>
        
        </div><Footer></Footer></>

    );
}

export default ManageStudent;