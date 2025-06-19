import React from 'react';
import { useLanguage } from '../../context/useLanguage';

const Hero = () => {
    const { language, translations } = useLanguage();
    const t = translations[language].sections.hero;

    return (
        <section
            className="text-white min-h-[60vh] flex flex-col justify-center items-center text-center p-6"
            style={{
                background: `linear-gradient(135deg, #113628 0%, #0c1c2c 100%)`,
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1950&auto=format&fit=crop')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    filter: 'brightness(0.5)'
                }}
            ></div>
            <div className="relative z-10 max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                    {t.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-200">{t.subtitle}</p>
            </div>
        </section>
    );
};

export default Hero;
