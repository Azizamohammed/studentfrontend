import Footer from "../Footer";
import Header from "../Header";
import Navigation from "../Navigation";
import React from "react";

function SecurityChange(){
    return(
        <><Header></Header><Navigation></Navigation><div class="containerss">
            <form>
            <p>Security Change</p>
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
               
                <button type="submit">Save</button>
                
            </form>
        </div><Footer></Footer></>

    );

}
export default SecurityChange;