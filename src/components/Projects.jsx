import React from "react";
import { motion } from "framer-motion";
import { projectsDetails } from "../assets/assets.js";

const Projects = () => {
  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      className="py-20 bg-dark-400"
    >
      <div className="container mx-auto px-6">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-purple">Projects</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          A collection of my web development work using modern technologies.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {projectsDetails.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-dark-400 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 shadow-lg"
            >
              
              {/* Project Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6 flex flex-col">

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-1 text-purple">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-dark-300 rounded-full text-xs text-gray-200 border border-dark-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-1 text-purple">Features:</h4>
                  <ul className="list-disc list-inside text-gray-400 text-sm">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-4">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    className="px-4 py-2 rounded-lg bg-purple text-white text-sm hover:bg-purple-600 transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.sourceCode}
                    target="_blank"
                    className="px-4 py-2 rounded-lg bg-dark-300 border border-dark-200 text-sm text-gray-200 hover:bg-dark-200 transition"
                  >
                    Source Code
                  </a>
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
