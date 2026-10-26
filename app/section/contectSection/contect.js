"use client";

import React, { useState } from "react";
import "./Contect.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent successfully.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <main className="contact-page">
      <div className="contact-container">

        {/* Left Side: Contact Info */}
        <div className="contact-info">
          <span className="contact-subtitle">GET IN TOUCH</span>
          <h1 className="contact-title">Contact Me:</h1>

          <p className="contact-description">
            I&apos;m available for professional collaborations and freelance opportunities.
            Whether you have a well-defined project or an initial concept, feel free to get in touch.
            I&apos;m committed to delivering high-quality solutions that bring your ideas to life and add real value to your
            business.
          </p>

          <div className="contact-details">
            {/* Name */}
            <div className="detail-item">
              <span className="icon">👤</span>
              <span className="colon">:</span>
              <span className="text">Hamza Ansari</span>
            </div>

            {/* Phone */}
            <div className="detail-item">
              <span className="icon">📞</span>
              <span className="colon">:</span>
              <span className="text">+92 371 0313814</span>
            </div>

            {/* Email */}
            <div className="detail-item">
              <span className="icon">✉️</span>
              <span className="colon">:</span>
              <span className="text">hamza.aiet.student@gmail.com</span>
            </div>

            {/* Location */}
            <div className="detail-item">
              <span className="icon">🏠</span>
              <span className="colon">:</span>
              <span className="text">Karachi, Pakistan</span>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>

            {/* Row 1: Name & Email */}
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Row 2: Phone Number */}
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Enter Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            {/* Row 3: Message */}
            <div className="form-group">
              <textarea
                name="message"
                rows="6"
                placeholder="Enter Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-btn">
              Submit <span>→</span>
            </button>

          </form>
        </div>

      </div>
    </main>
  );
}