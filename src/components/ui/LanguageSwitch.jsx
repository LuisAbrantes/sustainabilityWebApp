import React from 'react';
import { useLanguage } from '../../context/useLanguage';
import brazilFlag from '../../assets/flags/brazil-dark.svg';
import usaFlag from '../../assets/flags/usa-dark.svg';

const LanguageSwitch = () => {
    const { language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === 'pt-BR' ? 'en-US' : 'pt-BR');
    };

    return (
        <button
            onClick={toggleLanguage}
            className="relative flex items-center w-20 h-10 rounded-full p-1 bg-gray-800"
            aria-label={
                language === 'pt-BR'
                    ? 'Switch to English'
                    : 'Mudar para Português'
            }
        >
            {/* Moving Highlight */}
            <div
                className={`absolute top-1 w-8 h-8 rounded-full bg-green-500 shadow-lg transform transition-transform duration-300 ${
                    language === 'pt-BR' ? 'translate-x-0' : 'translate-x-10'
                }`}
            />

            {/* Flags */}
            <div className="relative flex justify-between w-full">
                <img
                    src={brazilFlag}
                    alt="Bandeira do Brasil"
                    className="w-8 h-8 z-10"
                />
                <img src={usaFlag} alt="USA Flag" className="w-8 h-8 z-10" />
            </div>
        </button>
    );
};

export default LanguageSwitch;
