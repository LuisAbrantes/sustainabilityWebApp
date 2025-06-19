import React from 'react';
import { useLanguage } from '../../context/useLanguage';
import LanguageSwitch from '../ui/LanguageSwitch';

const Header = () => {
    const { language, translations } = useLanguage();
    const t = translations[language];

    return (
        <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center border-2 border-green-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-green-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.293 6.707a1 1 0 011.414-1.414L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707z" />
                        </svg>
                    </div>
                    <h1 className="text-xl font-bold text-white">
                        Projeto Escolar
                    </h1>
                </div>

                <nav className="hidden md:flex items-center space-x-6">
                    <a
                        href="#features"
                        className="text-sm font-medium text-gray-300 hover:text-green-400 transition duration-150"
                    >
                        {t.navItems.about}
                    </a>
                    <a
                        href="#contact"
                        className="text-sm font-medium text-gray-300 hover:text-green-400 transition duration-150"
                    >
                        {t.navItems.contact}
                    </a>
                </nav>

                <div className="flex items-center space-x-4">
                    <LanguageSwitch />

                    <button className="md:hidden text-white focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
