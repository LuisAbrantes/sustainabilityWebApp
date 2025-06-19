import React, { useState } from 'react';
import { useLanguage } from '../../context/useLanguage';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Diagnosis = () => {
    const { language, translations } = useLanguage();
    const t = translations[language].sections.diagnosis;
    const [currentView, setCurrentView] = useState('relatorioLuz');

    const chartData = {
        labels: [
            'Retrocesso',
            'Ameaçadas',
            'Estagnadas',
            'Progresso Insuficiente',
            'Progresso Satisfatório'
        ],
        datasets: [
            {
                label: '% das Metas',
                data: [60.35, 8.28, 9.46, 17.1, 1.77],
                backgroundColor: [
                    '#BC4749',
                    '#F2E8CF',
                    '#A7C957',
                    '#6A994E',
                    '#386641'
                ],
                borderColor: '#111827', // Dark background for border
                borderWidth: 4,
                hoverOffset: 10
            }
        ]
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    padding: 15,
                    color: '#9CA3AF', // Gray color for labels
                    font: {
                        size: 12,
                        family: "'Lato', sans-serif"
                    }
                }
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let label = context.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed !== null) {
                            label += context.parsed + '%';
                        }
                        return label;
                    }
                }
            }
        },
        cutout: '60%'
    };

    const renderTable = () => (
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <div className="flex justify-center mb-6">
                <div className="inline-flex rounded-md shadow-sm" role="group">
                    <button
                        type="button"
                        onClick={() => setCurrentView('relatorioLuz')}
                        className={`py-2 px-6 text-sm font-medium rounded-l-lg border border-gray-600 ${
                            currentView === 'relatorioLuz'
                                ? 'bg-green-500 text-white'
                                : 'bg-gray-700 text-gray-300'
                        }`}
                    >
                        {t.table.views.luz}
                    </button>
                    <button
                        type="button"
                        onClick={() => setCurrentView('rnv2024')}
                        className={`py-2 px-6 text-sm font-medium rounded-r-md border border-gray-600 ${
                            currentView === 'rnv2024'
                                ? 'bg-green-500 text-white'
                                : 'bg-gray-700 text-gray-300'
                        }`}
                    >
                        {t.table.views.rnv}
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-300">
                    <thead className="text-xs uppercase bg-gray-700">
                        <tr>
                            <th scope="col" className="px-6 py-4 w-1/3">
                                {t.table.columns.ods}
                            </th>
                            <th scope="col" className="px-6 py-4 w-2/3">
                                {t.table.columns.status}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {t.table.data.map(item => (
                            <tr
                                key={item.ods}
                                className="bg-gray-800 border-b border-gray-700 hover:bg-gray-750"
                            >
                                <th
                                    scope="row"
                                    className="px-6 py-5 font-bold text-white whitespace-nowrap"
                                >
                                    {item.ods}: {item.title}
                                </th>
                                <td className="px-6 py-5">
                                    {currentView === 'relatorioLuz' ? (
                                        <div className="flex flex-col space-y-2">
                                            <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-red-600 rounded-md w-fit">
                                                {item.relatorioLuz.status}
                                            </span>
                                            <p className="mt-2 text-gray-300">
                                                {item.relatorioLuz.analysis}
                                            </p>
                                        </div>
                                    ) : (
                                        <p className="text-gray-300">
                                            {item.rnv2024.narrative}
                                        </p>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    return (
        <section
            id="diagnostico"
            className="py-16 md:py-24 bg-gray-900 text-white"
        >
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {t.title}
                    </h2>
                    <p className="text-lg text-gray-400">{t.subtitle}</p>
                </div>

                <div className="grid lg:grid-cols-5 gap-8 items-start">
                    <div className="lg:col-span-2">
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-center">
                                {t.chart.title}
                            </h3>
                            <p className="text-gray-400 text-center mb-6">
                                {t.chart.subtitle}
                            </p>
                            <div className="relative h-96">
                                <Doughnut
                                    data={chartData}
                                    options={chartOptions}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-3">
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
                            <h3 className="text-2xl font-bold mb-4 text-center">
                                {t.table.title}
                            </h3>
                            <p className="text-gray-400 text-center mb-6">
                                {t.table.subtitle}
                            </p>
                        </div>
                        {renderTable()}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Diagnosis;
