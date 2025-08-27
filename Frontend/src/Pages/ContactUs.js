import React, { useRef, useState } from "react";    // useRef for form reference, useState for button state
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import emailjs from "@emailjs/browser";    // EmailJS library for sending emails

function ContactUs() {

  const form = useRef(); 
  const [sending, setSending] = useState(false); // State to track if email is being sent

  // ✨ Function to send email
  const sendEmail = (e) => {
     e.preventDefault(); // Prevent default form submit (page refresh)
     setSending(true);   

    emailjs
      .sendForm(
        "service_17a9nnp",    // Service ID
        "template_avwt63k",   // Template ID
        form.current,       
        "5PzYC7qX_TMWGOy2B"  // Public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Message sent successfully!");
          e.target.reset(); 
        },
        (error) => {
          console.log(error.text);
          alert("❌ Failed to send message, try again.");
        }
      ).finally(() => setSending(false)); 
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900">
            Contact KlOSET
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-600">
            We're here to help! Reach out to our support team or explore our fashion marketplace.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
          <FiMail className="text-gray-400 text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Email</h3>
          <p className="text-gray-500">support@klo-set.com</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
          <FiPhone className="text-gray-400 text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Phone</h3>
          <p className="text-gray-500">+1 (555) 123-4567</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
          <FiMapPin className="text-gray-400 text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Address</h3>
          <p className="text-gray-500">123 Fashion Ave, New York, NY</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
          <FiClock className="text-gray-400 text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Working Hours</h3>
          <p className="text-gray-500">Mon - Fri: 9:00 AM - 6:00 PM</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl shadow-lg p-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Send Us a Message</h2>
          <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="user_name"
              placeholder="Full Name"
              required
              className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-200 focus:outline-none transition"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email Address"
              required
              className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-200 focus:outline-none transition"
            />
            <input
              type="text"
              name="subject" 
              placeholder="Subject"
              required
              className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-200 focus:outline-none transition md:col-span-2"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-200 focus:outline-none transition md:col-span-2"
            ></textarea>
            <button
              type="submit"
              disabled={sending}
              className="md:col-span-2 bg-black text-white font-semibold py-4 rounded-lg transition-all"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Discover Fashion at KlOSET</h2>
        <p className="mb-6 text-gray-600 max-w-2xl mx-auto">
          Explore exclusive collections and support independent fashion sellers today.
        </p>
        <a
          href="/shop"
          className="inline-block px-8 py-3 bg-black text-white font-semibold rounded-lg transition-colors"
        >
          Start Shopping
        </a>
      </section>

      <Footer />
    </div>
  );
}

export default ContactUs;
