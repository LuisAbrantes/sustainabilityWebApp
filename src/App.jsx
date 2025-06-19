import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Pillars from './components/sections/Pillars';
import Diagnosis from './components/sections/Diagnosis';
import ContentSection from './components/sections/ContentSection';

// Componente que contém o conteúdo principal
const MainContent = () => (
    <>
        <Hero />
        <Features />
        <Pillars />
        <Diagnosis />
        <ContentSection />
    </>
);

function App() {
    return (
        <LanguageProvider>
            <Routes>
                {/* Redirecionar / para /pt (idioma padrão) */}
                <Route path="/" element={<Navigate to="/pt" replace />} />

                {/* Rotas com idioma português */}
                <Route
                    path="/pt/*"
                    element={
                        <Layout>
                            <Routes>
                                <Route path="/" element={<MainContent />} />
                                {/* Adicione outras rotas em português aqui */}
                            </Routes>
                        </Layout>
                    }
                />

                {/* Rotas com idioma inglês */}
                <Route
                    path="/en/*"
                    element={
                        <Layout>
                            <Routes>
                                <Route path="/" element={<MainContent />} />
                                {/* Adicione outras rotas em inglês aqui */}
                            </Routes>
                        </Layout>
                    }
                />

                {/* Redirecionar qualquer rota não encontrada para a página principal com idioma padrão */}
                <Route path="*" element={<Navigate to="/pt" replace />} />
            </Routes>
        </LanguageProvider>
    );
}

export default App;
