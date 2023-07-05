// import React, { useEffect, useState } from "react";
// import Footer from "../Footer";
// import Header from "../Header";
// import StuNavigation from "../StuNavigation";
// import axios from "axios";
// function StuForm(){  
//   const[questions, setQuestions]= useState([]);

//   useEffect(() =>{
//     fetchQuestions();
//   },[]);

//   const fetchQuestions =async() =>{
//     try{
//       const response = await axios.get("http://localhost:8080/Feedback/all");
//       setQuestions(response.data);
//     }catch(error){
//       console.error('error',error);
//     }
//   };

// const handleSubmit =async(e) =>{
//   e.preventDefault();

//   try{
//     const answers = [];

//     for(let question of questions){
//       const answer = {
//         feedbackId: question.id,
//         rateStatus: e.target[question.id].value,
//       };
//       answers.push(answer);
//     }
//     await axios.post("http://localhost:808/Rates/add",answers);
//     alert("insert susccefull");
//   }catch(error){
//     console.error("error",error);
  
//   }

// };

//   return(
//         <><><Header></Header><StuNavigation></StuNavigation></><><div class="containerf">

// <form onSubmit={handleSubmit}>
//       {questions.map((question) => (
//         <div key={question.id}>
//           <label htmlFor={question.id}>{question.question}</label>
//           <div>
//             <input type="radio" id={question.id} name={question.id} value="yes" />
//             <label htmlFor={question.id}>Yes</label>
//           </div>
//           <div>
//             <input type="radio" id={question.id} name={question.id} value="no" />
//             <label htmlFor={question.id}>No</label>
//           </div>
//         </div>
//       ))}
//       <button type="submit">Submit</button>
//     </form>

        
//       </div><Footer></Footer></></>
//     );
// }
// export default StuForm;



import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import StuNavigation from "../StuNavigation";
import axios from "axios";

function StuForm() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get("http://localhost:8080/Feedback/all");
      setQuestions(response.data);
    } catch (error) {
      console.error('error', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const answers = [];

      const userId = 1;
  
      for (let question of questions) {
        const answer = {
          feedbackId: userId, // Assuming userId is the ID of the current user
          rateStatus: e.target.elements[question.id].value,
        };
        answers.push(answer);
      }
  
      await axios.post("http://localhost:808/Rates/add", answers);
      alert("Insert successful");
    } catch (error) {
      console.error("error", error);
    }
  };
  
  return (
    <>
      <Header />
      <StuNavigation />
      <div className="containerf">
        <form onSubmit={handleSubmit}>
          {questions.map((question) => (
            <div key={question.id}>
              <label htmlr={question.id}>{question.question}</label>
              <div>
                <input
                  type="radio"
                  id={question.id}
                  name={question.id}
                  value={question.value}
                />
                <label htmlFor={question.id}>Yes</label>
              </div>
              <div>
                <input
                  type="radio"
                  id={question.id}
                  name={question.id}
                  value={question.value}
                />
                <label htmlFor={question.id}>No</label>
              </div>
          </div>
          

            
          ))}
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default StuForm;
