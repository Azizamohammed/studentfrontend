import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Navigation from "../Navigation";
import axios from "axios";

//import {ToastContainer,toast} from "react-toastify";
//import"react-toastify/dist/ReactToastify.css";

function AddSurvey(){
const[formData, setFormData] =useState({
  question1: "",
  question2: "",
  question3:"",

});

const handleChange =(event) =>{
  setFormData({...formData,[event.target.name]: event.target.value });
};

const handleSubmit = (event) =>{
  event.preventDefault();


  axios
  .post("http://localhost:8080/Feedback/add", formData)
  .then((response) =>{
    console.log(response.data);//if success message

    alert("inserted successfull");

  //  toast.success("Data inserted  succesful",{
  //    className :"toast -success",
  //    position:toast.POSITION.TOP_RIGHT,
  //    autoClose:5000,
  //  });
  })
  .catch((error) =>{
    console.error(error);
    //handle error
    // toast.error("Data not inserred",{
    //   className:"toast-error",
    //   position:toast.POSITION.TOP_RIGHT,
    //   autoClose:5000,

    // });

  });
}


    return(
        <><Header/> <Navigation/>
        
        <div class="containerA">
        <h2>add AddSurvey</h2>
          <form onSubmit={handleSubmit}>
<div className="left">
  <div class="input-group">
    {/* <label for="input1" class="input-label">question 1:</label> */}
    <input type="text" id="input1" name="question1" value={formData.question1} placeholder="question1" onChange={handleChange} class="input-field"/>
  </div>
  
  <div className="input-group">
    {/* <label for="input2" class="input-label">question 2:</label> */}
    <input type="text" id="input2" name="question2" value={formData.question2} placeholder="question 2" onChange={handleChange} class="input-field"/>
  </div>
</div>
  <div class="input-group">
    {/* <label for="input3" class="input-label">question 3:</label> */}
    <input type="text" id="input3" name="question3" value={formData.question3} placeholder="question3" onChange={handleChange} class="input-field"/>
  </div>
    <button type="submit">submit</button>
    
  
    </form>
  </div>
  

<div>

</div>

          <Footer></Footer></>
    );
}
export default AddSurvey;
