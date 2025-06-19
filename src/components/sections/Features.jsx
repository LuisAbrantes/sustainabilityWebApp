import React, { useState } from 'react';
import { useLanguage } from '../../context/useLanguage';

const FeatureCard = ({ number, title, children, isOpen, onClick }) => {
    return (
        <div
            className={`p-6 rounded-lg bg-gray-800/50 border border-gray-700 transition-all duration-300 
                      ${
                          isOpen
                              ? 'border-green-500 shadow-lg shadow-green-900/20'
                              : 'hover:border-green-500/50 hover:bg-gray-800'
                      }`}
            onClick={onClick}
        >
            <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-500/20 border-2 border-green-500 mr-3">
                    <span className="text-green-400 font-bold">{number}</span>
                </div>
                <h3 className="text-xl font-semibold text-green-400">
                    {title}
                </h3>
            </div>
            {isOpen && (
                <div className="mt-4 pl-13 text-gray-300">{children}</div>
            )}
            {!isOpen && (
                <p className="text-sm text-gray-500 italic pl-13">
                    Clique para expandir
                </p>
            )}
        </div>
    );
};

const SubTopic = ({ letter, title, description }) => {
    return (
        <div className="mb-4">
            <div className="flex items-start">
                <div className="text-green-400 font-semibold mr-2">
                    {letter}.
                </div>
                <div>
                    <h4 className="font-semibold text-white mb-1">{title}</h4>
                    <p className="text-sm text-gray-400">{description}</p>
                </div>
            </div>
        </div>
    );
};

const Features = () => {
    const { language } = useLanguage();
    const [openCard, setOpenCard] = useState(null);

    const handleCardClick = index => {
        setOpenCard(openCard === index ? null : index);
    };

    const features = [
        {
            number: '1',
            title: 'Conceitos',
            subtopics: [
                {
                    letter: 'a',
                    title: 'Educação Ambiental',
                    description:
                        'Base legal e fundamentos da educação ambiental no Brasil, incluindo a Lei nº 9.795/1999.'
                },
                {
                    letter: 'b',
                    title: 'Sustentabilidade',
                    description:
                        'Princípios e dimensões da sustentabilidade nos contextos ambiental, social e econômico.'
                },
                {
                    letter: 'c',
                    title: 'Os 5 "R"s',
                    description:
                        'Hierarquia de ações para redução de impacto: Repensar, Recusar, Reduzir, Reutilizar e Reciclar.'
                }
            ]
        },
        {
            number: '2',
            title: 'Agenda 2030 + ODS + COP30',
            subtopics: [
                {
                    letter: 'a',
                    title: 'Agenda 2030',
                    description:
                        'O que é, como foi elaborada, pactos firmados, onde e quando ocorreram os acordos principais.'
                },
                {
                    letter: 'b',
                    title: 'ODS',
                    description:
                        'Quais são os Objetivos de Desenvolvimento Sustentável e uma análise do progresso do Brasil nas metas estabelecidas.'
                },
                {
                    letter: 'c',
                    title: 'COP30',
                    description:
                        'O que é, onde e quando será realizada, e quais serão as principais questões em discussão na conferência.'
                }
            ]
        }
    ];

    return (
        <section id="features" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        {language === 'pt-BR'
                            ? 'Etapas da Atividade'
                            : 'Activity Steps'}
                    </h2>
                    <p className="text-lg text-gray-400 mt-4">
                        {language === 'pt-BR'
                            ? 'Um resumo das principais etapas desenvolvidas neste projeto.'
                            : 'A summary of the main steps developed in this project.'}
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            number={feature.number}
                            title={feature.title}
                            isOpen={openCard === index}
                            onClick={() => handleCardClick(index)}
                        >
                            {feature.subtopics.map((subtopic, subIndex) => (
                                <SubTopic
                                    key={subIndex}
                                    letter={subtopic.letter}
                                    title={subtopic.title}
                                    description={subtopic.description}
                                />
                            ))}
                        </FeatureCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
