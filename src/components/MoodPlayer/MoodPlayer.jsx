import React from 'react';
import { motion } from 'framer-motion';
import SpotifyNowPlaying from '../SpotifyNowPlaying/SpotifyNowPlaying';

const MoodPlayer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-center gap-4">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Currently vibing to:
          </span>
          <SpotifyNowPlaying />
        </div>
      </div>
    </motion.div>
  );
};

export default MoodPlayer;