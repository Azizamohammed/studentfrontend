import Footer from "../Footer";
import Header from "../Header";
import Navigation from "../Navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";

function ViewFeedback(){

    const[data,setData] =useState([]);

    useEffect(()=> {
       fetchData();
      
    },[]);
  
  const fetchData = async() =>{
    try{
      const response = await axios.get("http://localhost:8080/Rates/all");
  
      //console.log(response.data);
  
      setData(response.data);
    }catch(error){
      console.log(error);
    }
  };
  
    return(

        
        <><Header></Header><Navigation></Navigation><div class="content">
            <h2>ViewFeedback</h2>
        <table>

            <thead>
                <tr>
                    <th>QNumber</th>
                    <th>Question</th>
                    <th>Yes</th>
                    <th>No</th>

                </tr>
            </thead>
            <tbody>
            {data.map((item)=>(
        <tr key={item.rateId}>
      <td>{item.rateId}</td>
      <td>{item.question}</td> 
     <td>{item.rateId}</td>
      <td>{item.rateId}</td>
        <td><button  style={{ "background-color": "red", "width": "40px" }}><i class="fa fa-trash"></i></button>
        </td>
            
            </tr>
            ))}
            </tbody>


        </table>
        </div><Footer></Footer></>
    )


}
export default ViewFeedback;