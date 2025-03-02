// @ts-ignore
import React from 'react';
import {Mail} from "lucide-react";

const Contact = () => {
    return (
        <section className="py-20 bg-slate-800/50">
            <div className="container mx-auto px-4">
                <div className="max-w-xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
                    <p className="text-slate-300 mb-4">
                        Interested in working together? Feel free to reach out for collaborations or just a friendly
                        chat.
                    </p>
                    <a
                        href="mailto:amadeodurgaj@gmail.com"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 transition-colors rounded-lg font-semibold"
                    >
                        <Mail size={20}/>
                        Get in Touch
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;