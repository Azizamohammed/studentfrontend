import Footer from "../Footer";
import React, { useEffect, useState } from "react";
import Header from "../Header";
import Navigation from "../Navigation";
import axios from "axios";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";


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




  const handlerDelete = (id) =>{
    if(window.confirm('Are you sure want to delete?')){
      axios.delete(`http://localhost:8080/Student/delete${id}`)
      .then(() =>{
        setData(data.filter(item  => item.regnumber !== id));
        alert ("deleted success");

        //toast.success("deleted success"){
          //   className:"toast-error",
    //   position:toast.POSITION.TOP_RIGHT,
    //   autoClose:5000,}


    //});
      })
       .catch(error => console.error(error));
    }
  }
    return(
        <><Header></Header><Navigation></Navigation><div class="contentM">
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
      <th>Update</th>
      <th>Delete</th>
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
<td>
<a href={`/updatestudent/${item.regnumber}`}><button style={{"background-color" : "blue","width": "40px"}}><i class="fa fa-pencil"></i></button></a>
</td>
<td><button onClick={() => handlerDelete(item.regnumber)} style={{"background-color" : "red","width": "40px"}} ><i class="fa fa-trash"></i></button>
</td>


</tr>
    ) )}
    </tbody>
    
  </table>
        
        </div><Footer></Footer></>

    );
}


export default ManageStudent;