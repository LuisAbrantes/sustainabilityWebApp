import React, { useState } from 'react';
import { useLanguage } from '../../context/useLanguage';
import brazilFlag from '../../assets/flags/brazil.svg';
import brazilFlagDark from '../../assets/flags/brazil-dark.svg';
import usaFlag from '../../assets/flags/usa.svg';
import usaFlagDark from '../../assets/flags/usa-dark.svg';
import { useNavigate } from 'react-router-dom';

const LanguageSwitch = () => {
    const { language, setLanguage } = useLanguage();
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const switchLanguage = newLang => {
        if (newLang === language) return;

        setLanguage(newLang);

        // Atualiza a URL para refletir o idioma selecionado
        const currentPath = window.location.pathname;
        const newPath = currentPath.replace(
            /^\/(pt|en)/,
            `/${newLang === 'pt-BR' ? 'pt' : 'en'}`
        );
        navigate(newPath);
    };

    return (
        <div
            className="relative flex items-center justify-center rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-1 gap-2 transition-all duration-300 hover:bg-gray-700/60 hover:border-gray-600"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <button
                onClick={() => switchLanguage('pt-BR')}
                className={`relative flex items-center justify-center w-10 h-10 rounded-full overflow-hidden transition-all duration-300 ${
                    language === 'pt-BR'
                        ? 'bg-green-500/20 ring-2 ring-green-500 scale-110'
                        : 'hover:bg-gray-700'
                }`}
                aria-label="Mudar para Português"
                title="Português"
            >
                <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                        language === 'pt-BR' || isHovered
                            ? 'opacity-100'
                            : 'opacity-70'
                    }`}
                >
                    <img
                        src={language === 'pt-BR' ? brazilFlag : brazilFlagDark}
                        alt="Bandeira do Brasil"
                        className={`w-8 h-8 transition-transform duration-300 ${
                            language === 'pt-BR' ? 'scale-100' : 'scale-90'
                        }`}
                    />
                </div>
            </button>

            <button
                onClick={() => switchLanguage('en-US')}
                className={`relative flex items-center justify-center w-10 h-10 rounded-full overflow-hidden transition-all duration-300 ${
                    language === 'en-US'
                        ? 'bg-green-500/20 ring-2 ring-green-500 scale-110'
                        : 'hover:bg-gray-700'
                }`}
                aria-label="Switch to English"
                title="English"
            >
                <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                        language === 'en-US' || isHovered
                            ? 'opacity-100'
                            : 'opacity-70'
                    }`}
                >
                    <img
                        src={language === 'en-US' ? usaFlag : usaFlagDark}
                        alt="USA Flag"
                        className={`w-8 h-8 transition-transform duration-300 ${
                            language === 'en-US' ? 'scale-100' : 'scale-90'
                        }`}
                    />
                </div>
            </button>
        </div>
    );
};

export default LanguageSwitch;
