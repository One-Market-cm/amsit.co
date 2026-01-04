'use client';

import { useState } from 'react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Bonjour! Comment puis-je vous aider aujourd\'hui?', isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickReplies = [
    'Demander un devis',
    'Suivre mon colis',
    'Nos services',
    'Contacter un expert'
  ];

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, isBot: false }]);
      setInputValue('');
      
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: 'Merci pour votre message. Un de nos experts vous contactera bientôt. Pour une réponse immédiate, appelez-nous au +241 01 23 45 67.',
          isBot: true 
        }]);
      }, 1000);
    }
  };

  const handleQuickReply = (reply: string) => {
    setMessages([...messages, { text: reply, isBot: false }]);
    
    setTimeout(() => {
      let response = '';
      if (reply === 'Demander un devis') {
        response = 'Excellent! Je vais vous rediriger vers notre formulaire de devis.';
      } else if (reply === 'Suivre mon colis') {
        response = 'Veuillez entrer votre numéro de suivi pour localiser votre colis.';
      } else if (reply === 'Nos services') {
        response = 'Nous offrons: Sourcing Chine, Transit Express & Standard, Dédouanement, et Centrale d\'achat.';
      } else {
        response = 'Je vous mets en relation avec un expert. Vous pouvez aussi nous appeler au +241 01 23 45 67.';
      }
      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-secondary hover:bg-secondary-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50 hover:scale-110"
        aria-label="Open chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-lg shadow-2xl z-50 flex flex-col" style={{ height: '500px' }}>
          {/* Header */}
          <div className="bg-primary text-white p-4 rounded-t-lg">
            <h3 className="font-heading font-semibold text-lg">Assistance AMUNIR Trading</h3>
            <p className="text-sm text-gray-300">Nous sommes là pour vous aider</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-secondary text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {/* Quick Replies */}
            {messages.length <= 2 && (
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Réponses rapides:</p>
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="block w-full text-left p-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Tapez votre message..."
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button
                onClick={handleSendMessage}
                className="bg-secondary hover:bg-secondary-600 text-white p-2 rounded-lg transition-colors"
                aria-label="Send message"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
