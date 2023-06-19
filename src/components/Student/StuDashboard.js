import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import StuNavigation from "../StuNavigation";

function StuDashboard(){
    return(
        <><Header></Header><StuNavigation></StuNavigation><div class="content">
            <h2>Dashboard Content</h2>
            <p>This is the main content area of the dashboard.</p>
        </div><Footer></Footer></>
    );
} 

export default StuDashboard;