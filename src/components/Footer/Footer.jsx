import React from 'react';
import { personalInfo } from '../../data/personal';

const Footer = () => {
  return (
    <footer className="py-6 px-4 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} {personalInfo.preferredName}
        </div>
        <a
          href={personalInfo.sourceCode}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <span className="flex items-center space-x-1">
            <span>Source Code</span>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;