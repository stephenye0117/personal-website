import { useState, useEffect } from 'react';

export const useTypingEffect = () => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const text = "Software Engineer";
    let currentIndex = 0;
    let forward = true;

    const intervalId = setInterval(() => {
      if (forward) {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          forward = false;
        }
      }
      
      if (!forward) {
        if (currentIndex >= text.length - 3) {
          currentIndex--;
          setDisplayedText(text.slice(0, currentIndex));
        } else {
          forward = true;
        }
      }
    }, 200); // Adjust speed here

    return () => clearInterval(intervalId);
  }, []);

  return displayedText;
};