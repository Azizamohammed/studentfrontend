import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import StuNavigation from "../StuNavigation";
function StuForm(){   
    return(
      <><><Header></Header><StuNavigation></StuNavigation></><><div class="containerf">

        <h2>Student opinion form</h2>
        <label for="about">Is leacture teach student for parmanent time </label>
        <br />
        <input type="radio" id="q1_option1" name="question1" value="Very satisfied" required />
        <label for="q1_option1">good</label><br />
        <input type="radio" id="q1_option2" name="question1" value="Satisfied" />
        <label for="q1_option2">very good</label><br/>
        <input type="radio" id="q1_option1" name="question1" value="Very satisfied" required />
        <label for="q1_option1">excellent</label><br />
        <input type="radio" id="q1_option2" name="question1" value="Satisfied" />
        <label for="q1_option2">bad</label>
        <br />
        <label for="about">I learn best by </label>
        <br />
        <input type="radio" id="q1_option1" name="question1" value="Very satisfied" required />
        <label for="q1_option1">good</label><br />
        <input type="radio" id="q1_option2" name="question1" value="Satisfied" />
        <label for="q1_option2">very good</label><br></br>
        <input type="radio" id="q1_option1" name="question1" value="Very satisfied" required />
        <label for="q1_option1">excellent</label><br />
        <input type="radio" id="q1_option2" name="question1" value="Satisfied" />
        <label for="q1_option2">bad</label>
        <br />
        <label for="about">I am experience some difficult in the class as the followings </label>
        <br />
        <input type="radio" id="q1_option1" name="question1" value="Very satisfied" required />
        <label for="q1_option1">good</label><br />
        <input type="radio" id="q1_option2" name="question1" value="Satisfied" />
        <label for="q1_option2">very good</label><br></br>
        <input type="radio" id="q1_option1" name="question1" value="Very satisfied" required />
        <label for="q1_option1">excellent</label><br />
        <input type="radio" id="q1_option2" name="question1" value="Satisfied" />
        <label for="q1_option2">bad</label><br></br>
        <label for="feedback">Feedback:</label>
        <textarea id="feedback" name="feedback" placeholder="Enter your feedback" required></textarea>
        <br />
        <br/>
        <button type="submit"> Submit</button>
      </div><Footer></Footer></></>
    );
}
export default StuForm;