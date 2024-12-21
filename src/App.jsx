import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import MoodPlayer from './components/MoodPlayer/MoodPlayer';
import Hero from './components/Hero/Hero';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <div className="pt-16"> {/* Space for fixed navbar */}
          <MoodPlayer />
          <main>
            <Hero />
            <Experience />
            <Education />
            <Projects />
            <Skills />
            <Contact />
          </main>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;