import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-20"> {/* Increased padding-top for navbar */}
            <Hero />
            <Projects />
            <Skills />
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;