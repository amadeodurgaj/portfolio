// @ts-ignore
import React from 'react';
import Card from "./Card.tsx";

const About = () => {
    return (
        <section className="py-20 bg-slate-800/50">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
                    <p className="text-slate-300 mb-6 text-center leading-relaxed">
                        With over 4 years of programming experience and 1 year in backend development, I specialize in
                        building
                        robust
                        systems and interesting projects. My expertise spans across PHP ecosystems (Laravel, PHPUnit),
                        Java and
                        Kotlin solutions such
                        as Spring Boot, SwingUI and React with JS and TS.
                    </p>
                <Card />
                </div>
            </div>
        </section>
    );
};

export default About;