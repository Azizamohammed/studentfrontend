import React from "react";
import Header from "../Header";
import StuNavigation from "../StuNavigation";
import Footer from "../Footer";
function Feedback(){
    return(
        <><Header></Header><StuNavigation></StuNavigation><div className="containerf">
            <form>
                <h2>Enter Feedback</h2>
            {/* <label for="feedback">Feedback:</label> */}
            <textarea id="feedback" name="feedback" placeholder="Enter your feedback" required></textarea>
            <button type="submit">Submit</button>                           
</form>

        </div><Footer>
            </Footer></>


    )
}
export default Feedback;