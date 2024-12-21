import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../../data/personal';

const ExperienceCard = ({ role, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
            {role.title}
          </h3>
          <p className="text-blue-600 dark:text-blue-400">{role.company}</p>
        </div>
        <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
          {role.period}
        </span>
      </div>
      
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {role.location}
      </p>

      <ul className="space-y-2">
        {role.description.map((item, i) => (
          <li 
            key={i}
            className="flex items-start text-gray-600 dark:text-gray-300"
          >
            <span className="mr-2 text-blue-500">▹</span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            My professional journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experience.map((role, index) => (
            <ExperienceCard key={role.company} role={role} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;