import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Server, Coffee, Database, Code2, Cpu, BookOpen, ExternalLink } from 'lucide-react';

function App() {
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

  return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        {/* Hero Section */}
        <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500 leading-relaxed py-2">
                Amadeo Durgaj
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8 h-8">
                <span className="border-r-2 border-emerald-400 pr-1">{displayText}</span>
                <span className="animate-blink">|</span>
              </p>
              <div className="flex justify-center gap-6 mb-12">
                <div className="flex justify-center gap-6 mb-12">
                  <a href="https://github.com/amadeodurgaj"
                     className="text-slate-300 hover:text-emerald-400 transition-colors">
                    <Github size={24}/>
                  </a>
                  <a href="https://www.linkedin.com/in/amadeo-durgaj-b1a132256/"
                     className="text-slate-300 hover:text-emerald-400 transition-colors">
                    <Linkedin size={24}/>
                  </a>
                  <a href="mailto:amadeodurgaj@gmail.com"
                     className="text-slate-300 hover:text-emerald-400 transition-colors">
                    <Mail size={24}/>
                  </a>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
              <span
                  className="px-4 py-2 bg-slate-800/50 rounded-full text-red-400 border border-red-400/30">React</span>
                  <span
                      className="px-4 py-2 bg-slate-800/50 rounded-full text-yellow-400 border border-yellow-400/30">Python</span>
                  <span
                      className="px-4 py-2 bg-slate-800/50 rounded-full text-emerald-400 border border-emerald-400/30">PHP</span>
                  <span
                      className="px-4 py-2 bg-slate-800/50 rounded-full text-blue-400 border border-blue-400/30">Java</span>

                  <span
                      className="px-4 py-2 bg-slate-800/50 rounded-full text-purple-400 border border-purple-400/30">Kotlin</span>
                </div>
              </div>
            </div>
        </header>

  {/* About Section */}
  <section className="py-20 bg-slate-800/50">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <p className="text-slate-300 mb-6 text-center leading-relaxed">
          With over 4 years of programming experience and 1 year in backend development, I specialize in building
          robust
          systems and interesting projects. My expertise spans across PHP ecosystems (Laravel, PHPUnit), Java and
          Kotlin solutions such
          as Spring Boot, SwingUI and React with JS and TS.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 bg-slate-700/30 rounded-lg">
            <Server className="text-emerald-400 mb-4" size={32}/>
            <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
            <p className="text-slate-400">CI/CD Pipeline Development, Automation and Unit Testing</p>
          </div>
          <div className="p-6 bg-slate-700/30 rounded-lg">
            <Database className="text-blue-400 mb-4" size={32}/>
            <h3 className="text-xl font-semibold mb-2">Database Design</h3>
            <p className="text-slate-400">Optimizing database schemas and query performance</p>
          </div>
          <div className="p-6 bg-slate-700/30 rounded-lg">
            <Coffee className="text-purple-400 mb-4" size={32}/>
            <h3 className="text-xl font-semibold mb-2">API Development</h3>
            <p className="text-slate-400">Creating robust programs that work with APIs</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Projects Section */
  }
  <section className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-800/50 rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Garage Gym Website</h3>
                  <a href="http://garagegym.htl-projekt.com"><ExternalLink  className="text-slate-400 hover:text-emerald-400" size={20} /></a>
                </div>
                <p className="text-slate-300 mb-4">
                  High-performance e-commerce backend for a gym in Albania
                </p>
                <div className="flex gap-2">
                  <span className="text-sm px-3 py-1 bg-slate-700/50 rounded-full">PHP</span>
                  <span className="text-sm px-3 py-1 bg-slate-700/50 rounded-full">Laravel</span>
                  <span className="text-sm px-3 py-1 bg-slate-700/50 rounded-full">JQuery</span>
                  <span className="text-sm px-3 py-1 bg-slate-700/50 rounded-full">MySQL</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/50 rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Discord Python Bot</h3>
                  <a href="https://github.com/amadeodurgaj/AntarticBot">
                    <ExternalLink
                      className="text-slate-400 hover:text-emerald-400" size={20}
                    />
                  </a>
                </div>
                <p className="text-slate-300 mb-4">
                   Discord Bot with Ticket System and Moderation Commands
                </p>
                <div className="flex gap-2">
                  <span className="text-sm px-3 py-1 bg-slate-700/50 rounded-full">Python</span>
                  <span className="text-sm px-3 py-1 bg-slate-700/50 rounded-full">Discord Python Framework</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
            <p className="text-slate-300 mb-4">
              Interested in working together? Feel free to reach out for collaborations or just a friendly chat.
            </p>
            <a
              href="mailto:amadeodurgaj@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 transition-colors rounded-lg font-semibold"
            >
              <Mail size={20} />
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-400">
        <div className="container mx-auto px-4">
          <p>© {year} Amadeo Durgaj. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;