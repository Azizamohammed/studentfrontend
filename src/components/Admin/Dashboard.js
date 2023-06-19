import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Navigation from "../Navigation";

function Dashboard(){
    return(
        <><Header></Header><Navigation></Navigation><div class="content">
            <h2>Dashboard Content</h2>
            <p>This is the main content area of the dashboard.</p>
        </div><Footer> </Footer></>
  
        );
}

export default Dashboard;