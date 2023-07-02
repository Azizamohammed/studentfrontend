import React, { useEffect, useState } from "react";
import Header from "../Header";
import Navigation from "../Navigation";
import Footer from "../Footer";
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";



function UpdateSudent(){


    const[data, setData]  =useState({
        //regnumber:"",
        stuname:"",
        email:"",
        program:"",
        campus:"",
        gender:"",
    }) ;
    

    const handleChange = (event) => {
        const {name,value} = event.target;
        setData({...data,[name]:value});
    };


    const handleSubmit =(event) =>{
        event.preventDefault();
        axios.put('http://localhost:8080/Student/byId'+regnumber,data)
        .then(response =>{
            console.log(response);
        })
        .catch(error =>{
            console.log(error);
        });

        alert("updated successfull");
    
    };

                                                                                                                     
    const {regnumber} = useParams();
    useEffect(()=>{
        const fetchData = async() =>{
            try{
                const response = await axios.get('http://localhost:8080/Student/byId'+regnumber);
                setData(response.data);
            }catch(error ){
                console.log(error);
            }
        };
        fetchData();
    },{regnumber});
    return(
        <><Header /><Navigation /><div class="containerUp">
            <form onSubmit={handleSubmit}>
                <h3>Update form</h3>
                {/* <div class="input-group">
                    <label for="username">Registration number</label>
                    <input type="text" name="regnumber" id="username" value={data.question} required></input>
                </div>
                <div class="input-group">
                    <label for="username">Full name</label>
                    <input type="text" name="fullname" id="username" value={data.question} required></input>
                </div>
                <div class="input-group">
                    <label for="username">Program</label>
                    <input type="text" name="program" id="username" value={data.question} required></input>
                </div>

                <div class="input-group">
                    <label for="username">Email</label>
                    <input type="text" name="email" id="username" value={data.question} required></input>
                </div>

                <div class="input-group">
                    <label for="username">Cumpas</label>
                    <input type="text" name="campus" id="username" value={data.question} required></input>
                </div>

                <div class="input-group">
                    <label for="username">Gender</label>
                    <input type="text" name="gender" id="username" value={data.question} required></input>
                </div>
 */}



            <input onChange={handleChange} type="text"  name="stuname" value={data.stuname} />
            <br/>
            <br/>
            <input onChange={handleChange} type="text" name="email" value={data.email}/>
            <br/>
            <br/>
            <input onChange={handleChange} type="text" name="program" value={data.program} />
            <br/>
            <br/>
            <input onChange={handleChange} type="text" name="campus" value={data.campus}/>
            <br/>
            <br/>
            <input onChange={handleChange} type="text" name="gender" value={data.gender}/>
            <br/>
            <br/>




                <button type="submit">Update </button>

            </form>
        </div><Footer /></>
    );

}

export default UpdateSudent;