import React from 'react';
import { motion } from 'framer-motion';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import { personalInfo } from '../../data/personal';

const Hero = () => {
  const { text: typedText, isComplete } = useTypingEffect();

  return (
    <section className="min-h-screen pt-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-2">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
                  {personalInfo.preferredName}
                </span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Given name: {personalInfo.name}
              </p>
            </div>
            
            <div className="h-16 flex items-center justify-center md:justify-start">
              <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
                {typedText}
                {!isComplete && <span className="animate-blink">|</span>}
              </h2>
            </div>

            <motion.div 
              className="flex flex-wrap justify-center md:justify-start gap-2 mt-4"
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
          </motion.div>

          {/* Photo */}
          <motion.div
            className="flex-1 max-w-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/your-photo.jpg" // Add your photo to the public directory
              alt={personalInfo.preferredName}
              className="rounded-2xl shadow-2xl border-4 border-white dark:border-gray-800"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;