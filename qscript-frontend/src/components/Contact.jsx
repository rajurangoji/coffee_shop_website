import React, { useEffect, useState } from 'react'
import axios from 'axios'
import background from '../assets/background.png'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    number: ''
  });

  useEffect(() => {
    // console.log(formData);
  }, [formData]);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the backend with the form data
      console.log(formData)
      const response = await axios.post('http://localhost:4545/userModel/data', formData);
      console.log('Response:', response.data);
// Log the response from the backend
    } catch (error) {
      console.error('Error:', error);
    }
  };



  return (
    <div className='contact'>
      <div className="about-us-head">
        <h1>Contact Us</h1>
      </div>
      <div className='form-container'>
        <img src={background} alt="" />
        <div className="container">
          <div className='inputs'>
            <input
              type="text"
              name="name"
              id="name"
              placeholder='Name'
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder='Email'
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input name="message"
              id="message"
              placeholder='Message'
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}>

            </input>
            <input type="number"
              name="number"
              id="number"
              placeholder='Phone Number'
              value={formData.number}
              onChange={(e) => setFormData({ ...formData, number: e.target.value })}
            />
            <button onClick={onSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
