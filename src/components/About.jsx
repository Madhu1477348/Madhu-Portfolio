import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      className="py-20 bg-dark-200 px-6"
    >
      <div className="container mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          About <span className="text-purple">Me</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Get to know more about my background and passion
        </p>

        {/* Image + Content */}
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* IMAGE */}
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full h-72 sm:h-96 md:h-[600px] object-cover rounded-xl"
              src={assets.ProfileImg}
              alt="Profile"
            />
          </div>

          {/* TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-1/2"
          >
            <div className="rounded-2xl p-4 sm:p-6">
              <h3 className="text-3xl md:text-5xl font-semibold mb-6">
                My Journey
              </h3>

              <p className="text-gray-300 mb-6 text-base sm:text-lg leading-relaxed">
                I'm a passionate full-stack developer. My journey started with
                simple HTML & CSS websites and grew into building modern
                web applications using frameworks like{" "}
                <b>Bootstrap, Tailwind, React.js, Django</b>.
              </p>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                I believe in continuous learning and always pushing the boundaries
                of what’s possible on the web.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default About;
