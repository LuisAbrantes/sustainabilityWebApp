import React, { useState } from 'react';
import { useLanguage } from '../../context/useLanguage';

const Pillars = () => {
    const { language, translations } = useLanguage();
    const t = translations[language].sections.pillars;
    const [activeTab, setActiveTab] = useState('environmentalEducation');

    const renderContent = () => {
        switch (activeTab) {
            case 'sustainability':
                return (
                    <div id="content-sustainability">
                        <h3 className="text-2xl font-bold mb-6 text-center">
                            {t.content.sustainability.title}
                        </h3>
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="mx-auto w-16 h-16 rounded-full bg-green-900 flex items-center justify-center mb-3 text-3xl">
                                    🌿
                                </div>
                                <h4 className="text-xl font-bold mb-2">
                                    {
                                        t.content.sustainability.pillars
                                            .environmental.title
                                    }
                                </h4>
                                <p className="text-sm text-gray-400">
                                    {
                                        t.content.sustainability.pillars
                                            .environmental.text
                                    }
                                </p>
                            </div>
                            <div>
                                <div className="mx-auto w-16 h-16 rounded-full bg-blue-900 flex items-center justify-center mb-3 text-3xl">
                                    👥
                                </div>
                                <h4 className="text-xl font-bold mb-2">
                                    {
                                        t.content.sustainability.pillars.social
                                            .title
                                    }
                                </h4>
                                <p className="text-sm text-gray-400">
                                    {
                                        t.content.sustainability.pillars.social
                                            .text
                                    }
                                </p>
                            </div>
                            <div>
                                <div className="mx-auto w-16 h-16 rounded-full bg-yellow-900 flex items-center justify-center mb-3 text-3xl">
                                    💰
                                </div>
                                <h4 className="text-xl font-bold mb-2">
                                    {
                                        t.content.sustainability.pillars
                                            .economic.title
                                    }
                                </h4>
                                <p className="text-sm text-gray-400">
                                    {
                                        t.content.sustainability.pillars
                                            .economic.text
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                );
            case 'fiveRs':
                return (
                    <div id="content-5rs">
                        <h3 className="text-2xl font-bold mb-6 text-center">
                            {t.content.fiveRs.title}
                        </h3>
                        <div className="space-y-2 max-w-md mx-auto">
                            {t.content.fiveRs.rs.map((r, index) => (
                                <div
                                    key={r}
                                    className={`p-3 rounded-lg shadow font-bold text-center text-white`}
                                    style={{
                                        backgroundColor: `rgba(56, 102, 65, ${
                                            1 - index * 0.15
                                        })`
                                    }}
                                >
                                    {index + 1}. {r}
                                </div>
                            ))}
                        </div>
                        <p className="text-center mt-6 text-gray-400 italic">
                            {t.content.fiveRs.caption}
                        </p>
                    </div>
                );
            case 'environmentalEducation':
            default:
                return (
                    <div id="content-ea">
                        <h3 className="text-2xl font-bold mb-4 text-center">
                            {t.content.environmentalEducation.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            {t.content.environmentalEducation.text}
                        </p>
                    </div>
                );
        }
    };

    return (
        <section id="pilares" className="py-16 md:py-24 bg-gray-900 text-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {t.title}
                    </h2>
                    <p className="text-lg text-gray-400">{t.subtitle}</p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="border-b border-gray-700 mb-6">
                        <div className="flex flex-wrap -mb-px justify-center">
                            <button
                                className={`tab-button text-lg font-semibold py-3 px-6 transition ${
                                    activeTab === 'environmentalEducation'
                                        ? 'text-green-400 border-b-2 border-green-400'
                                        : 'text-gray-400 hover:text-green-400'
                                }`}
                                onClick={() =>
                                    setActiveTab('environmentalEducation')
                                }
                            >
                                {t.tabs.environmentalEducation}
                            </button>
                            <button
                                className={`tab-button text-lg font-semibold py-3 px-6 transition ${
                                    activeTab === 'sustainability'
                                        ? 'text-green-400 border-b-2 border-green-400'
                                        : 'text-gray-400 hover:text-green-400'
                                }`}
                                onClick={() => setActiveTab('sustainability')}
                            >
                                {t.tabs.sustainability}
                            </button>
                            <button
                                className={`tab-button text-lg font-semibold py-3 px-6 transition ${
                                    activeTab === 'fiveRs'
                                        ? 'text-green-400 border-b-2 border-green-400'
                                        : 'text-gray-400 hover:text-green-400'
                                }`}
                                onClick={() => setActiveTab('fiveRs')}
                            >
                                {t.tabs.fiveRs}
                            </button>
                        </div>
                    </div>

                    <div>{renderContent()}</div>
                </div>
            </div>
        </section>
    );
};

export default Pillars;
