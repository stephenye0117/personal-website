import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/personal';

import './Skills.css';

const SkillSection = ({ title, items }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
        {title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {items.map((skill, index) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow
                       border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            My technical expertise and toolset
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <SkillSection title="Developer Skills" items={skills.developer} />
            <SkillSection title="Operating Systems" items={skills.systems} />
          </div>
          <div>
            <SkillSection title="Programming Languages" items={skills.languages} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;