// @ts-ignore
import React from 'react';
import {ExternalLink} from "lucide-react";

const Projects = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="bg-slate-800/50 rounded-lg overflow-hidden">
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-semibold">Garage Gym Website</h3>
                                <a href="http://garagegym.htl-projekt.com"><ExternalLink
                                    className="text-slate-400 hover:text-emerald-400" size={20}/></a>
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
    );
};

export default Projects;