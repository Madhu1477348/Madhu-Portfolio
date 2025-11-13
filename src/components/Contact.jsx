import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthProvider";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {

  const { user } = useAuth();
  const isLoggedIn = Boolean(user);

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    mobile: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      alert("Please login to send message!");
      return;
    }

    console.log("Form Submitted:", formData);
    alert("Message Sent Successfully!");
  };

  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6 max-w-6xl">

        <h2 className="text-3xl font-bold text-center mb-4">
          Contact <span className="text-purple">Me</span>
        </h2>

        {!isLoggedIn && (
          <p className="text-red-400 text-center mb-6">
            ⚠ Please login to contact me.
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT — FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-dark-400 p-8 rounded-2xl space-y-6 shadow-xl"
          >
            {/* Name */}
            <div>
              <label className="text-white text-sm">Your Name</label>
              <input
                type="text"
                name="name"
                required
                disabled={!isLoggedIn}
                value={formData.name}
                onChange={handleChange}
                className={`w-full mt-2 p-3 rounded-lg bg-dark-300 border border-dark-200 text-white outline-none ${
                  !isLoggedIn ? "opacity-50 cursor-not-allowed" : ""
                }`}
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-white text-sm">Your Email</label>
              <input
                type="email"
                name="email"
                required
                disabled={!isLoggedIn}
                value={formData.email}
                onChange={handleChange}
                className={`w-full mt-2 p-3 rounded-lg bg-dark-300 border border-dark-200 text-white outline-none ${
                  !isLoggedIn ? "opacity-50 cursor-not-allowed" : ""
                }`}
                placeholder="Enter your email"
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="text-white text-sm">Mobile Number</label>
              <input
                type="text"
                name="mobile"
                required
                disabled={!isLoggedIn}
                value={formData.mobile}
                onChange={handleChange}
                className={`w-full mt-2 p-3 rounded-lg bg-dark-300 border border-dark-200 text-white outline-none ${
                  !isLoggedIn ? "opacity-50 cursor-not-allowed" : ""
                }`}
                placeholder="Enter mobile number"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-white text-sm">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                disabled={!isLoggedIn}
                value={formData.message}
                onChange={handleChange}
                className={`w-full mt-2 p-3 rounded-lg bg-dark-300 border border-dark-200 text-white outline-none resize-none ${
                  !isLoggedIn ? "opacity-50 cursor-not-allowed" : ""
                }`}
                placeholder="Type your message..."
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={!isLoggedIn}
              className={`w-full py-3 rounded-lg text-white font-semibold transition ${
                isLoggedIn
                  ? "bg-purple hover:bg-purple-600"
                  : "bg-gray-700 opacity-40 cursor-not-allowed"
              }`}
            >
              Send Message
            </button>
          </form>

          {/* RIGHT — YOUR DETAILS */}
          <div className="bg-dark-400 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">My Contact Details</h3>

            <div className="space-y-5 text-gray-300">
              
              {/* Name */}
              <div>
                <h4 className="text-purple font-semibold">Name</h4>
                <p className="text-lg">Madhu Sekhar Chakali</p>
              </div>

              {/* Mobile */}
              <div>
                <h4 className="text-purple font-semibold">Mobile</h4>
                <p className="text-lg">+91 9603920589</p>
              </div>

              {/* Email */}
              <div>
                <h4 className="text-purple font-semibold">Email</h4>
                <p className="text-lg">madhusekhar96039@google.com</p>
              </div>

              {/* Social Icons */}
              <div>
                <h4 className="text-purple font-semibold mb-2">Follow Me</h4>

                <div className="flex items-center gap-5 text-2xl">

                  <a
                    href="https://github.com/Madhu1477348/"
                    target="_blank"
                    className="hover:text-purple transition"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/chakali-madhu-sekhar-361568348/"
                    target="_blank"
                    className="hover:text-purple transition"
                  >
                    <FaLinkedin />
                  </a>

                  <a
                    href="https://www.instagram.com/madhusekhar122/"
                    target="_blank"
                    className="hover:text-purple transition"
                  >
                    <FaInstagram />
                  </a>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
