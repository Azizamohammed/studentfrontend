import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Navigation from "../Navigation";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import axios from "axios";

function Update(){

                                 const [data ,setData] =  useState({
        question:"",

    });

    const handleChange = (event) =>{
        const{name,value} =event.target;
        setData({...data,[name]:value});

    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.put('http://localhost:8080/Feedback/update'+feedbackId,data)
        .then(response =>{
            console.log(response);
        })
        .catch(error =>{
            console.log(error);
        });

        alert("updated successfull");
    };
    const {feedbackId} = useParams();

    useEffect(() =>{
        const fetchData = async () =>{
            try{
                const response = await axios.get('http://localhost:8080/Feedback/ById'+ feedbackId);
                setData(response.data);
            }
            catch(error ){
                console.log(error);
            }

        };
        fetchData();
        
    },{feedbackId});
      
    return(
        <><Header /><Navigation /><div class="containerU">
            <form onSubmit={handleSubmit}>
                <h2>Update form</h2>
                <div class="input-group" >
                    <label for="username">Question</label>
                    <input onChange={handleChange} type="text" name="question" id="username" value={data.question} required></input>
                </div>

                <button type="submit">Update </button>

            </form>
        </div><Footer /></>
                    );
                    }

                    export default Update;