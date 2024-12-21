import { useState, useEffect } from 'react';

export const useTypingEffect = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const fullText = "Software Engineer";

  useEffect(() => {
    if (isComplete) return;

    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsComplete(true);
        clearInterval(intervalId);
      }
    }, 100); // Adjust speed here

    return () => clearInterval(intervalId);
  }, [isComplete]);

  return { text: displayedText, isComplete };
};