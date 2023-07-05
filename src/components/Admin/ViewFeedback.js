import Footer from "../Footer";
import Header from "../Header";
import Navigation from "../Navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";

function ViewFeedback() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/Rates/all");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const countYesResponses = (question) => {
    let count = 0;
    data.forEach((item) => {
      if (
        item.feedback.question === question &&
        item.response &&
        item.response.toLowerCase() === "yes"
      ) {
        count++;
      }
    });
    return count;
  };

  const countNoResponses = (question) => {
    let count = 0;
    data.forEach((item) => {
      if (
        item.feedback.question === question &&
        item.response &&
        item.response.toLowerCase() === "no"
      ) {
        count++;
      }
    });
    return count;
  };

  return (
    <>
      <Header></Header>
      <Navigation></Navigation>
      <div className="content">
        <h2>ViewFeedback</h2>
        <table>
          <thead>
            <tr>
              <th>QNumber</th>
              <th>Question</th>
              <th>Yes</th>
              <th>No</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.rateId}>
                <td>{item.rateId}</td>
                <td>{item.feedback.question}</td>
                <td>{countYesResponses(item.rateId)}</td>
                <td>{countNoResponses(item.feedback.question)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer></Footer>
    </>
  );
}

export default ViewFeedback;
