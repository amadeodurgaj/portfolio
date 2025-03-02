//@ts-ignore
import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Contact from "./components/Contact.tsx";
import About from "./components/About.tsx";
import Projects from "./components/Projects.tsx";
import Header from './components/Header.tsx';

function App() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const roles = ['Backend Developer', 'Frontend Developer', 'Full Stack Developer'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const currentDate = new Date();
  const year = currentDate.getFullYear();


  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseDuration = 2000;
    
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      if (displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        const timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deletingSpeed);
        return () => clearTimeout(timer);
      }
    } else {
      if (displayText === currentRole) {
        const timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timer);
      }
    }
  }, [displayText, isDeleting, roleIndex, roles]);

  // @ts-ignore
  return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        {/* Hero Section */}
        <Header displayText={displayText} />

        {/* About Section */}
        <About />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer year={year} />
      </div>
  );
}

export default App;