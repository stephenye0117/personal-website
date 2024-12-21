import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all"
    >
      <div className="p-6">
        {/* Project Title */}
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>

        {/* Technologies Used */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 
                         text-blue-800 dark:text-blue-300 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Highlights */}
        <ul className="space-y-2">
          {project.highlights.map((highlight, i) => (
            <li 
              key={i} 
              className="flex items-start text-gray-600 dark:text-gray-300"
            >
              <span className="mr-2 text-blue-500">▹</span>
              {highlight}
            </li>
          ))}
        </ul>

        {/* Project Links */}
        {project.links && (
          <div className="mt-4 flex gap-4">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 
                         dark:hover:text-blue-400 transition-colors"
              >
                <span className="flex items-center">
                  <span className="mr-1">📦</span> Code
                </span>
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 
                         dark:hover:text-blue-400 transition-colors"
              >
                <span className="flex items-center">
                  <span className="mr-1">🔗</span> Live Demo
                </span>
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;