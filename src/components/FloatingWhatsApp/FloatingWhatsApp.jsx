import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import './FloatingWhatsApp.css';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const handleConfirm = () => {
    window.open('https://wa.me/918050366281', '_blank');
    setIsOpen(false);
  };

  return (
    <div className="floating-wa">
      {isOpen && (
        <div className="floating-wa__modal animate-fadeInUp">
          <div className="floating-wa__modal-header">
            <h4>Start a Conversation</h4>
            <button onClick={() => setIsOpen(false)} aria-label="Close">
              <X size={18} />
            </button>
          </div>
          <div className="floating-wa__modal-body">
            <p>Hi there! 👋<br/>How can we help you today?</p>
            <button className="btn floating-wa__confirm-btn" onClick={handleConfirm}>
              Open WhatsApp
            </button>
          </div>
        </div>
      )}
      
      <button 
        className="floating-wa__btn" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="WhatsApp Chat"
      >
        <MessageCircle size={32} />
      </button>
    </div>
  );
}
