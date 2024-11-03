import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Add form submission logic here (e.g., API call)
  };

  return (
    <div className="contact-container">
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

        <label>Event Date</label>
        <input 
          type="date" 
          name="eventDate" 
          value={formData.eventDate} 
          onChange={handleChange} 
          required 
        />

        <label>City where the event will take place</label>
        <input 
          type="text" 
          name="eventCity" 
          value={formData.eventCity} 
          onChange={handleChange} 
          required 
        />

        <label>Email Address</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />

        <label>Phone Number (without spaces)</label>
        <input 
          type="tel" 
          name="phone" 
          value={formData.phone} 
          onChange={handleChange} 
          pattern="\d*" 
          required 
        />

        <label>You would like to use our services for:</label>
        <select 
          name="serviceType" 
          value={formData.serviceType} 
          onChange={handleChange} 
          required
        >
          <option value="">Select an option</option>
          <option value="wedding">Wedding</option>
          <option value="private-event">Private Event</option>
          <option value="professional-event">Professional Event</option>
        </select>

        <label>Estimated Number of Guests</label>
        <input 
          type="number" 
          name="guestCount" 
          value={formData.guestCount} 
          onChange={handleChange} 
          min="1" 
          required 
        />

        <label>About Your Event - Tell Us About Your Dream in More Detail...</label>
        <textarea 
          name="eventDetails" 
          value={formData.eventDetails} 
          onChange={handleChange} 
          rows="10" 
          required 
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
