import React from 'react';
import { motion } from 'framer-motion';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import { personalInfo } from '../../data/personal';

const Hero = () => {
  const typedText = useTypingEffect();

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-white dark:bg-gray-900">
      <motion.div 
        className="text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {personalInfo.name}
        </motion.h1>
        
        <div className="h-16 flex items-center justify-center">
          <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
            {typedText}
            <span className="animate-blink">|</span>
          </h2>
        </div>

        <motion.div 
          className="flex flex-wrap justify-center gap-2 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {personalInfo.status.map((status, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
            >
              {status}
            </span>
          ))}
        </motion.div>

        {/* Rest of the Hero component remains the same */}
      </motion.div>
    </section>
  );
};

export default Hero;