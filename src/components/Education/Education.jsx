import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = {
    school: "Virginia Polytechnic Institute and State University",
    shortName: "Virginia Tech",
    degree: "Bachelor of Science in Computer Science",
    minor: "Minor in Mathematics",
    location: "Blacksburg, VA",
    period: "Aug '21 — May '25",
    details: [
      "Currently pursuing a Bachelor's degree with focus on computer science and mathematics",
      "Developing strong foundation in algorithms, data structures, and software engineering",
      "Participating in hands-on coding projects and collaborative development"
    ]
  };

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            My academic journey
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                  {education.shortName}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {education.school}
                </p>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  {education.period}
                </span>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-lg text-gray-800 dark:text-white font-medium">
                {education.degree}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {education.minor}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {education.location}
              </p>
            </div>

            <ul className="space-y-2">
              {education.details.map((detail, index) => (
                <li 
                  key={index}
                  className="flex items-start text-gray-600 dark:text-gray-300"
                >
                  <span className="mr-2 text-blue-500">▹</span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;