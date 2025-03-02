//@ts-expect-error
import React from 'react';

// @ts-ignore
const Footer = ( { year } ) => {
    return (
        <>
            <footer className="py-8 text-center text-slate-400">
                <div className="container mx-auto px-4">
                    <p>© {year} Amadeo Durgaj. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;