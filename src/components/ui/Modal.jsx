import React from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div
            id="modal"
            className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4"
            onClick={onClose} // Close modal on overlay click
        >
            <div
                className="bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl max-h-[80vh] overflow-y-auto transform scale-100 transition-transform duration-300"
                id="modal-content"
                onClick={e => e.stopPropagation()} // Prevent closing when clicking inside content
            >
                <div className="sticky top-0 bg-gray-800 p-4 border-b border-gray-700 flex justify-between items-center">
                    <h3
                        id="modal-title"
                        className="text-2xl font-bold text-white"
                    >
                        {title}
                    </h3>
                    <button
                        id="modal-close"
                        className="text-3xl font-light leading-none text-white"
                        onClick={onClose}
                    >
                        &times;
                    </button>
                </div>
                <div
                    id="modal-body"
                    className="p-6 leading-relaxed text-gray-300"
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
