import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([{
    type: 'system',
    content: 'Welcome to Stephen\'s Terminal! Type "help" for available commands.'
  }]);
  const terminalRef = useRef(null);

  const commands = {
    help: {
      description: 'Show available commands\n',
      action: () => ({
        type: 'system',
        content: `Available commands:\n
          • about - Learn more about me\n
          • skills - View my technical skills\n
          • projects - List my projects\n
          • contact - Get my contact information\n
          • experience - View my work experience\n
          • education - View my education\n
          • resume - Download my resume\n
          • clear - Clear the terminal\n
          • github - Open my GitHub profile\n
          • linkedin - Open my LinkedIn profile\n
          Type any command to execute.\n`
      })
    },
    about: {
      description: 'Learn about me',
      action: () => ({
        type: 'info',
        content: `Hi! I'm Stephen Ye, a Computer Science student at Virginia Tech.
          I'm passionate about software development and problem-solving.
          Currently focusing on full-stack development and AI/ML.
          I'm open to remote work and relocation opportunities.`
      })
    },
    skills: {
      description: 'View technical skills\n',
      action: () => ({
        type: 'info',
        content: `Technical Skills:\n
          • Languages: Java, C, Python, MATLAB, HTML, SQL, Swift\n
          • Development: Software Development, Algorithm Design, Data Structures, Debugging\n
          • Analysis: Data Analysis, Data Visualization, Analytics\n
          • Tools: Git, Linux, Mac OS, IOS, Windows PowerShell\n
          • Areas: Web Development, Information Systems, Mobile Operating Systems\n`
      })
    },
    projects: {
      description: 'List my projects',
      action: () => ({
        type: 'info',
        content: `Projects:\n
          • Postal Scanner (C)\n
            - Geographical information processing for locations\n
            - Features: postal code lookup, distance calculations\n
            - GitHub: https://github.com/stephenye0117/postal-scanner\n
          
          • Time Efficient Sorting (Java)\n
            - Binary data file sorting with optimized algorithms\n
            - Features: Quicksort, Insertion sort, buffer pool management\n
            - GitHub: https://github.com/stephenye0117/time-efficient-sorting\n
          
          • Seminar Search\n
            - Complex search system using Binary Search Trees\n
            - Features: multiple search parameters, tree traversals\n
            - GitHub: https://github.com/stephenye0117/seminar-search\n`
      })
    },
    experience: {
      description: 'View work experience\n',
      action: () => ({
        type: 'info',
        content: `Work Experience:\n
          • Teacher @ B3 Bricks, Bots, and Beakers (Jun '24 - Aug '24)\n
            - Instructed students in CS fundamentals\n
            - Led interactive coding projects\n
          
          • Intern @ Shanghai Zhangjiang Institute (Dec '23 - Mar '24)\n
            - Developed AI-driven mental health screening\n
            - Implemented data cleaning algorithms\n
          
          • Paralegal @ Chan & Associates PLLC (Jun '23 - Aug '23)\n
            - Managed legal documentation\n
            - Handled client communications\n`
      })
    },
    education: {
      description: 'View education\n',
      action: () => ({
        type: 'info',
        content: `Education:\n
          • Virginia Tech (Aug '21 - May '25)\n
            - Bachelor of Science in Computer Science\n
            - Minor in Mathematics\n
            - Location: Blacksburg, VA\n`
      })
    },
    contact: {
      description: 'Get contact information\n',
      action: () => ({
        type: 'info',
        content: `Contact Information:\n
          • Email: step4enye@gmail.com\n
          • Phone: +13476546744\n
          • Location: Blacksburg, Virginia\n
          • LinkedIn: /in/stephenye210/\n
          • GitHub: /stephenye0117\n`
      })
    },
    clear: {
      description: 'Clear terminal\n',
      action: () => {
        setHistory([]);
        return null;
      }
    },
    github: {
      description: 'Open GitHub profile\n',
      action: () => {
        window.open('https://github.com/stephenye0117', '_blank');
        return {
          type: 'system',
          content: 'Opening GitHub profile...'
        };
      }
    },
    linkedin: {
      description: 'Open LinkedIn profile\n',
      action: () => {
        window.open('https://www.linkedin.com/in/stephenye210/', '_blank');
        return {
          type: 'system',
          content: 'Opening LinkedIn profile...'
        };
      }
    }
  };

  const handleCommand = (cmd) => {
    const commandLower = cmd.toLowerCase().trim();
    
    // Add command to history
    setHistory(prev => [...prev, {
      type: 'command',
      content: `$ ${cmd}`
    }]);

    // Execute command
    if (commands[commandLower]) {
      const result = commands[commandLower].action();
      if (result) {
        setHistory(prev => [...prev, result]);
      }
    } else {
      setHistory(prev => [...prev, {
        type: 'error',
        content: `Command not found: ${cmd}. Type "help" for available commands.`
      }]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <section id="terminal" className="py-20 bg-white dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto p-4"
      >
        <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl">
          {/* Terminal Header */}
          <div className="flex items-center px-4 py-2 bg-gray-800">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="mx-auto text-gray-400 text-sm">stephen.dev terminal</div>
          </div>

           {/* Terminal Body */}
           <div 
            ref={terminalRef}
            className="p-4 h-[600px] overflow-y-auto font-mono text-sm"
          >
            {history.map((entry, index) => (
              <div 
                key={index} 
                className={`mb-2 whitespace-pre-wrap ${
                  entry.type === 'error' ? 'text-red-400' :
                  entry.type === 'system' ? 'text-blue-400' :
                  entry.type === 'command' ? 'text-green-400' :
                  'text-gray-300'
                }`}
                style={{ lineHeight: '1.5' }}
              >
                {entry.content}
              </div>
            ))}
            
            <form onSubmit={handleSubmit} className="flex items-center">
              <span className="text-green-400 mr-2">$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent outline-none text-gray-300"
                autoFocus
              />
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Terminal;