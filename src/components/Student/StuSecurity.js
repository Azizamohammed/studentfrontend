import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import StuNavigation from "../StuNavigation";

function StuSecurity(){
    return(
        <><Header></Header><StuNavigation></StuNavigation><div class="containerss">
            <form>
                
                <div class="input-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" required></input>
                </div>
                <div class="input-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" required></input>
                </div>
                <div class="input-group">
                    <label for="password">Conferm Password</label>
                    <input type="password" id="password" required></input>
                </div>
                
                <button type="submit">Verify</button>
               
            </form>
        </div><Footer></Footer></>
        );
}
export default StuSecurity;

