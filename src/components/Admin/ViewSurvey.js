import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Navigation from "../Navigation";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import axios from "axios";

function ViewSurvey(){

  const[data,setData] =useState([]);

  useEffect(()=> {
     fetchData();
    
  },[]);

const fetchData = async() =>{
  try{
    const response = await axios.get("http://localhost:8080/Feedback/all");

    //console.log(response.data);

    setData(response.data);
  }catch(error){
    console.log(error);
  }
};

//handler to delete data


const handlerDelete =(feedbackId) =>{
  if(window.confirm('are you sure you want to delete')){
    axios.delete(`http://localhost:8080/Feedback/ById${feedbackId}`)
    .then(()=>{
      setData(data.filter(item => item.feedbackId !== feedbackId));
      alert('deleted success ');

    })
  
  .catch(error => console.error(error));

  }
}


    return(
        <><><Header></Header><Navigation></Navigation></><div class="content">
           
           <h2>Student System</h2>

           
  <table>
    
      <thead>
      <tr>
      <th>QNumber</th>
      <th>Question</th>
      <th>Update</th>
      <th>Delete</th>

      </tr>
      </thead>
    <tbody>
      {data.map((item)=>(
        <tr key={item.feedbackId}>
      <td>{item.feedbackId}</td>
      <td>{item.question}</td>

      <td>
      <a href={`/update/${item.feedbackId}`}><button style={{"background-color" : "blue","width": "40px",}}><i class="fa fa-pencil"></i></button></a>
</td>
<td><button onClick={() =>handlerDelete(item.feedbackId) } style={{"background-color" : "red","width": "40px"}}><i class="fa fa-trash"></i></button>
</td>      
       
    </tr>
     ))}
    </tbody>
  </table>
 
        </div><Footer></Footer></>
      
    )
}

export default ViewSurvey;