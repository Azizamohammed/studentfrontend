import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import StuNavigation from "../StuNavigation";


function Profile(){
    return(
    <><><Header></Header><StuNavigation></StuNavigation></><><div class="content">
            <h2>Profile Content</h2>
            <p>This is the main content area of the Profile.</p>
        </div><Footer></Footer></></>
    );
}
export  default Profile;