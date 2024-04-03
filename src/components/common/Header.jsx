import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-10 p-6 flex flex-row justify-between items-center ${isScrolled ? 'black' : 'bg-transparent'}`}>
            <div className="flex items-center">
                <Link to="/" className="flex items-center mr-8" aria-label="DO-ANTHON">
                    <img src="/header/dog-athon-logo.png" alt="Logo" style={{ height: '7.3rem', marginLeft: '3rem' }} />
                </Link>
                
                {/* Navigation Links  from https://tailwindcss.com/docs/reusing-styles as example*/}
                <nav>
                    <ul className="flex justify-center list-none m-0 p-0">
                        {['/', '/events', '/gear'].map((path, index) => (
                            <li key={index} className="mx-3 md:mx-5">
                                <Link
                                    to={path}
                                    className="text-custom-blue font-bold text-lg transition-colors duration-300 hover:text-custom-cream"
                                    style={{ textShadow: '1px 1px 0 white' }}
                                >
                                    {["HOME", "EVENTS", "GEAR"][index]}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="flex items-center">
                <Link to="/login" className="bg-custom-cream text-white font-bold py-2 px-4 rounded-md mr-4 text-lg hover:bg-custom-gold hover:text-custom-cream transition-colors duration-300">Sign In</Link>
                <Link to="/cart" className="text-custom-cream font-bold text-lg hover:text-custom-gold transition-colors duration-300">
                    <img src="/header/cart.svg" alt="Cart Icon" className="h-10 w-8 mr-6" />
                </Link>
            </div>
        </header>
    );
};

export default Nav;


