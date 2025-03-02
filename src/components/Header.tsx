// @ts-ignore
import React from 'react';
import {Github, Linkedin, Mail} from "lucide-react";

// @ts-ignore
const Header = ( {displayText} ) => {
    return (
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

    );
};

export default Header;