import React, { useState } from 'react';
import { useLanguage } from '../../context/useLanguage';

const ContentSection = () => {
    const { language, translations } = useLanguage();
    const t = translations[language].sections.cop30;
    const [activeCard, setActiveCard] = useState(null);

    const handleCardClick = index => {
        setActiveCard(activeCard === index ? null : index);
    };

    return (
        <section className="py-16 px-6 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">{t.title}</h2>
                    <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                        {t.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {t.cards.map((card, index) => (
                        <div
                            key={index}
                            className={`bg-gray-800 border border-gray-700 rounded-lg shadow-md overflow-hidden transition-all duration-300 cursor-pointer ${
                                activeCard === index
                                    ? 'transform scale-105 border-green-500 border-2 shadow-lg shadow-green-500/20'
                                    : 'hover:shadow-lg hover:border-green-500/50'
                            }`}
                            onClick={() => handleCardClick(index)}
                        >
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-3 text-green-400">
                                    {card.title}
                                </h3>
                                {activeCard === index && (
                                    <p className="text-gray-300 mt-2">
                                        {card.content}
                                    </p>
                                )}
                                {activeCard !== index && (
                                    <p className="text-sm text-gray-400 italic">
                                        Clique para expandir
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContentSection;
