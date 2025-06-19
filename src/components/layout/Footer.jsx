import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-400 border-t border-gray-800">
            <div className="container mx-auto px-4 py-6 text-center">
                <p className="text-sm">
                    &copy; {currentYear} Trabalho de Biologia. Todos os direitos
                    reservados.
                </p>
                <p className="text-xs mt-2">
                    Desenvolvido como parte de uma atividade acadêmica.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
