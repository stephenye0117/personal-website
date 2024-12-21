import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/personal';

const ContactCard = ({ icon, title, value, link, newTab }) => {
  const Component = link ? 'a' : 'div';
  const props = link ? {
    href: link,
    target: newTab ? '_blank' : undefined,
    rel: newTab ? 'noopener noreferrer' : undefined
  } : {};

  return (
    <Component
      {...props}
      className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all"
    >
      <span className="text-2xl mr-4">{icon}</span>
      <div className="text-left">
        <p className="text-sm text-gray-600 dark:text-gray-400">{title}</p>
        <p className="text-gray-800 dark:text-gray-200">{value}</p>
      </div>
    </Component>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Feel free to reach out for opportunities or just to say hi!
          </p>
        </motion.div>

        <motion.div 
          className="max-w-md mx-auto space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Email */}
          <ContactCard
            icon="📧"
            title="Email"
            value={personalInfo.email}
            link={`mailto:${personalInfo.email}`}
          />

          {/* Phone */}
          <ContactCard
            icon="📱"
            title="Phone"
            value={personalInfo.phone}
            link={`tel:${personalInfo.phone}`}
          />

          {/* LinkedIn */}
          <ContactCard
            icon="💼"
            title="LinkedIn"
            value="Connect with me"
            link={personalInfo.linkedin}
            newTab={true}
          />

          {/* GitHub */}
          <ContactCard
            icon="📦"
            title="GitHub"
            value="Check out my repositories"
            link={personalInfo.github}
            newTab={true}
          />

          {/* Location */}
          <ContactCard
            icon="📍"
            title="Location"
            value={personalInfo.location}
          />

          {/* Status */}
          <div className="flex flex-wrap gap-2 justify-center">
            {personalInfo.status.map((status, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
              >
                {status}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;