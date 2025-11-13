import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center bg-linear-to-r from-dark-100 via-dark-300 to-dark-100 pt-24 pb-16 px-6"
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* LEFT SECTION */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Hi, I'm <span className="text-purple">Madhu Sekhar</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 typewriter">
            Fullstack Developer
          </h2>

          <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
            I create stunning experiences with modern technologies and
            innovative design.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 justify-center md:justify-start">
            {/* Work Button */}
            <a
              href="#projects"
              className="px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 w-full sm:w-auto text-center"
            >
              View Work
            </a>

            {/* Contact Button */}
            <a
              href="#contact"
              className="px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/40 transition duration-300 w-full sm:w-auto text-center"
            >
              Contact Me
            </a>

            {/* Download Resume Button */}
            <a
              href="/Madhu-Portfolio/Resume.pdf"
              download
              className="px-6 py-3 bg-dark-300 border border-purple rounded-lg font-medium text-purple hover:bg-purple hover:text-white transition duration-300 w-full sm:w-auto text-center"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT SECTION — IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 flex items-center justify-center">
            {/* Gradient Circle Background */}
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-purple to-pink opacity-60 blur-sm" />

            {/* Floating Profile Image */}
            <motion.img
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              src={assets.ProfileImg}
              alt="Profile"
              className="relative rounded-full w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
