import React from 'react';
import { motion } from 'framer-motion';
import { skillSet } from '../assets/assets.js';  // correct import

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="skills"
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-purple">Skills</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Technologies I Know
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">

          {skillSet.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-dark-400 rounded-2xl p-6 transition duration-300 cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">

                {/* Skill Icon */}
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-16 h-16 mb-4"
                />

                {/* Skill Name */}
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>

                {/* Skill Description */}
                <p className="text-gray-400 text-sm">{skill.description}</p>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
