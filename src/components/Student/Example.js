import React, { useState } from 'react';
import axios from 'axios';

function Example() {
  const [gender, setGender] = useState('male');
  // Add other state variables for other input fields
  
  const handleSubmit = (event) => {
    event.preventDefault();

    // Create an object with the form data
    const Example = {
      rate: gender,
      // Add other form field values to the formData object
    };

    // Make a POST request using Axios
    axios.post('http://localhost:8080/Rates/add', )
      .then(function(response) {
        // Handle the successful response
        console.log(response);
      })
      .catch(function(error) {
        // Handle the error
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={gender === 'male'}
          onChange={(event) => setGender(event.target.value)}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={gender === 'female'}
          onChange={(event) => setGender(event.target.value)}
        />
        Female
      </label>

      {/* Add other input fields here */}
      
      <button type="submit">Submit</button>
    </form>
  );
}

export default Example;
