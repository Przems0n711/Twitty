import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>Close</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;