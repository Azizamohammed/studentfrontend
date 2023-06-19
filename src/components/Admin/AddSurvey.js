import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Navigation from "../Navigation";

function AddSurvey(){
    return(
        <><Header></Header><Navigation></Navigation><div>

            <table className="add">
                <thead>
                    <tr><th>Questions no</th>
                        <th>Questions</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Question 1</td>
                        <td>What  i like about this class is</td>

                    </tr>
                    <tr>
                        <td>Question 2</td>
                        <td>i learn best by</td>

                    </tr>
                    <tr>
                        <td>Question 3</td>
                        <td>i am experience some difficult in the class as the followings</td>

                    </tr>
                    <tr>
                        <td>Question 4</td>
                        <td>Feedback</td>

                    </tr>

                </tbody>
            </table>
        </div><Footer></Footer></>
    );


}
export default AddSurvey;
    