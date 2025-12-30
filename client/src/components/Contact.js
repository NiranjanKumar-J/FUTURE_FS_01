import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      // --- CHANGE IS HERE (Updated to Render Link) ---
      const response = await fetch('https://future-fs-01-3b7t.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      // -----------------------------------------------

      if (response.ok) {
        setStatus('Message Sent Successfully! ✅');
        setFormData({ name: '', email: '', message: '' }); 
      } else {
        setStatus('Failed to send message. ❌');
      }
    } catch (error) {
      console.error(error);
      setStatus('Server Error. Is Backend running?');
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-black text-white relative">
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-purple-900/20 to-transparent"></div>

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">
          Contact <span className="text-purple-500">Me</span>
        </h2>
        
        <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-800">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-4 bg-black border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none text-white transition"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-4 bg-black border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none text-white transition"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message (Start-up ideas? Internship offers?)"
              value={formData.message}
              onChange={handleChange}
              className="p-4 bg-black border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none text-white transition"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-purple-600 text-white py-4 rounded-lg font-bold hover:bg-purple-700 transition transform hover:scale-105"
            >
              {status ? status : "Send Message 🚀"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;