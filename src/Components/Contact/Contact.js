import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('All fields are required!');
      setTimeout(() => setErrorMessage(''), 3000); 
      return;
    }

    setIsLoading(true);

  
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: formData.email,
          contact_number: Math.floor(Math.random() * 1000000) 
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        setShowAlert(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setShowAlert(false), 3000); 
      })
      .catch((error) => {
        setIsLoading(false);
        console.error('Email send failed:', error);
        setErrorMessage('Failed to send message. Please try again.');
        setTimeout(() => setErrorMessage(''), 3000); 
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d1b2a] via-[#1b263b] to-[#415a77] relative overflow-auto flex justify-center items-center">
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-600 blur-3xl opacity-30 rounded-full"></div>

      {showAlert && (
        <div className="fixed top-16  bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 animate-fade-in-down">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>Message sent successfully!</span>
        </div>
      )}

      
      {errorMessage && (
        <div className="fixed top-16 bg-red-500 z-10 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 animate-fade-in-down">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="relative w-full max-w-md px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-6 ml-16">
          Contact Us
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          We'd love to hear from you! Reach out with any questions or feedback.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 bg-gray-800/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 bg-gray-800/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 bg-gray-800/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            rows="4"
          ></textarea>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full px-6 py-3 ${
              isLoading ? 'bg-gray-400' : 'bg-cyan-500 hover:bg-cyan-600'
            } text-black font-semibold rounded-lg shadow-md transition duration-300`}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}
