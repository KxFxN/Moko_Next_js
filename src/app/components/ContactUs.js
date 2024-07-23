"use client";
import React, { useEffect, useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          surname: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form
      id="send_contact"
      className="pt-14 rounded-lg"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2 2xl:gap-20">
        <div className="form-group mb-4">
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Name"
            className="w-full p-2 border-b border-gray-300 bg-transparent focus:outline-none focus:border-[#008E7A]"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-4">
          <input
            type="text"
            id="surname"
            name="surname"
            required
            placeholder="Surname"
            className="w-full p-2 border-b border-gray-300 bg-transparent focus:outline-none focus:border-[#008E7A]"
            value={formData.surname}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-4">
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="Phone Number"
            className="w-full p-2 border-b border-gray-300 bg-transparent focus:outline-none focus:border-[#008E7A]"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-4">
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email"
            className="w-full p-2 border-b border-gray-300 bg-transparent focus:outline-none focus:border-[#008E7A]"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group mb-6 md:my-5 2xl:my-20">
        <textarea
          id="message"
          name="message"
          required
          placeholder="Message"
          className="w-full p-2 border-b border-gray-300 bg-transparent focus:outline-none focus:border-[#008E7A] resize-none"
          rows="3"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-[#008E7A] text-white py-3 rounded-lg font-medium hover:bg-[#007a69] transition-colors xl:w-1/3 xl:h-14 2xl:w-1/3 2xl:h-20 2xl:text-3xl"
      >
        Send
      </button>
    </form>
  );
}

export default ContactUs;
