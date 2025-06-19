import React, { createContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { defaultValues } from './languageData';

const LanguageContext = createContext(defaultValues);

export const LanguageProvider = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [language, setLanguage] = useState(() => {
        // Definir idioma baseado na URL atual
        const path = location.pathname;
        if (path.startsWith('/en')) {
            return 'en-US';
        }
        if (path.startsWith('/pt')) {
            return 'pt-BR';
        }
        // Se não há especificação de idioma na URL, usar o padrão
        return defaultValues.language;
    });

    const changeLanguage = newLanguage => {
        setLanguage(newLanguage);

        // Atualizar a URL com base no idioma
        const currentPath = location.pathname;
        let newPath;

        // Remover prefixos de idioma existentes
        let pathWithoutLang = currentPath;
        if (currentPath.startsWith('/pt') || currentPath.startsWith('/en')) {
            const parts = currentPath.split('/');
            parts.splice(1, 1);
            pathWithoutLang = parts.join('/') || '/';
        }

        // Adicionar novo prefixo de idioma
        if (newLanguage === 'en-US') {
            newPath = pathWithoutLang === '/' ? '/en' : `/en${pathWithoutLang}`;
        } else {
            newPath = pathWithoutLang === '/' ? '/pt' : `/pt${pathWithoutLang}`;
        }

        navigate(newPath);
    };

    // Atualizar a URL quando o componente é montado
    useEffect(() => {
        const currentPath = location.pathname;

        // Se a URL não começa com um prefixo de idioma, adicionar o prefixo do idioma atual
        if (!currentPath.startsWith('/pt') && !currentPath.startsWith('/en')) {
            const prefix = language === 'en-US' ? '/en' : '/pt';
            const newPath =
                currentPath === '/' ? prefix : `${prefix}${currentPath}`;
            navigate(newPath, { replace: true });
        }
    }, [language, location.pathname, navigate]);

    const value = {
        language,
        setLanguage: changeLanguage,
        translations: defaultValues.translations
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export { LanguageContext };
