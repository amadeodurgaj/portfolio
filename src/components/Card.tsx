// @ts-ignore
import React from 'react';
import {Coffee, Database, Server} from "lucide-react";

const Card = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 bg-slate-700/30 rounded-lg">
                <Database className="text-blue-400 mb-4" size={32}/>
                <h3 className="text-xl font-semibold mb-2">Database Design</h3>
                <p className="text-slate-400">Optimizing database schemas and query performance</p>
            </div>
            <div className="p-6 bg-slate-700/30 rounded-lg">
                <Server className="text-emerald-400 mb-4" size={32}/>
                <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
                <p className="text-slate-400">CI/CD Pipeline Development, Automation and Unit Testing</p>
            </div>
            <div className="p-6 bg-slate-700/30 rounded-lg">
                <Coffee className="text-purple-400 mb-4" size={32}/>
                <h3 className="text-xl font-semibold mb-2">API Development</h3>
                <p className="text-slate-400">Creating robust programs that work with APIs</p>
            </div>
        </div>
    );
};

export default Card;