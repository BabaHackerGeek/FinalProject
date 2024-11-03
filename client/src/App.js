// import {useState, useEffect} from "react";
// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   const [data, setData] = useState(null);
//   const [name, setName] = useState(null);
//   const BASE_URL = process.env.REACT_APP_BASE_URL;
//   const send = () => {
//    if(name){
//     fetch(`/api/${name}`)
//       .then((res) => {
//         console.log("res", res);
//         return res.json();
//       })
//       .then((data) => {
//         console.log("data", data);
//         setData(data.message);
//       })
//       .catch((e) => console.log(e));
//     }
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>{!data ? "write your name..." : data}</p>
//         <input onChange={(e)=>setName(e.target.value)}/>
//         <button onClick={()=>send()}>Send</button>
//       </header>
//     </div>
//   );
// }

// export default App;


// client/src/App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    eventDate: '',
    eventCity: '',
    email: '',
    phone: '',
    serviceType: '',
    guestCount: '',
    eventDetails: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        console.log(data.message);
        alert('Form submitted successfully');
      } else {
        console.error(data.message);
        alert('Failed to submit form');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting form');
    }
  };

  return (
    <div className="App">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>First Name</label>
        <input 
          type="text" 
          name="firstName" 
          value={formData.firstName} 
          onChange={handleChange} 
          required 
        />

        <label>Last Name</label>
        <input 
          type="text" 
          name="lastName" 
          value={formData.lastName} 
          onChange={handleChange} 
          required 
        />

        {/* Other form fields */}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
