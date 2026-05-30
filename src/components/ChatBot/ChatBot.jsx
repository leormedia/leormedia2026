import React, { useState, useEffect, useRef } from 'react';
import { FaTimes, FaPaperPlane } from 'react-icons/fa';
import { CONTACTUS_API } from "../../hooks/Apis";
import chatbotIcon from "../../assets/Icons/chatbot_Floating Robot.png";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [step, setStep] = useState(0);
  const [userData, setUserData] = useState({
    service: '',
    name: '',
    email: '',
    phone: '',
  });
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Show greeting popup after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGreeting(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const addBotMessage = (text, options = []) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { text, sender: 'bot', options }]);
      setIsTyping(false);
    }, 1000); // 1s delay for realistic typing
  };

  const addUserMessage = (text) => {
    setMessages(prev => [...prev, { text, sender: 'user' }]);
  };

  // Initialization
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage("Hi there! 👋 Welcome to Leor Media. Could you please provide your full name?");
      setStep(1);
    }
  }, [isOpen]);

  const checkLead = async (identifier) => {
    try {
      const response = await fetch('/api/check-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier }),
      });
      const data = await response.json();
      return data.user || null;
    } catch (e) {
      return null;
    }
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;
    
    const text = inputValue.trim();
    addUserMessage(text);
    setInputValue('');

    if (step === 1) { // Provided Name
      setUserData(prev => ({ ...prev, name: text }));
      addBotMessage(`Thanks, ${text}! What is the best phone number to reach you at?`);
      setStep(2);
    } else if (step === 2) { // Provided Phone
      setUserData(prev => ({ ...prev, phone: text }));
      
      setIsTyping(true);
      const user = await checkLead(text); // Check DB using phone
      setIsTyping(false);

      if (user) {
        // Returning user
        setUserData(prev => ({ ...prev, email: user.email }));
        addBotMessage(`Welcome back! We found your details on file. How can we help you today?`, [
            "Event Management",
            "Digital Marketing",
            "Branding",
            "Advertisement"
        ]);
        setStep(4);
      } else {
        // New user
        addBotMessage("Got it! And what is your email address?");
        setStep(3);
      }
    } else if (step === 3) { // Provided Email (New User)
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) {
          addBotMessage("That doesn't look like a valid email. Could you please try again?");
          return;
      }
      setUserData(prev => ({ ...prev, email: text }));
      
      addBotMessage("Perfect! Now, how can we help you today?", [
          "Event Management",
          "Digital Marketing",
          "Branding",
          "Advertisement"
      ]);
      setStep(4);
    }
  };

  const handleOptionClick = (option) => {
    addUserMessage(option);
    const finalData = { ...userData, service: option };
    setUserData(finalData);
    
    // Clear options from previous message visually
    setMessages(prev => {
        const newMessages = [...prev];
        const lastMsg = newMessages[newMessages.length - 1];
        if (lastMsg && lastMsg.sender === 'bot') {
            lastMsg.options = [];
        }
        return newMessages;
    });

    setTimeout(() => {
      addBotMessage("Perfect! Give me just a second to send this over to our team...");
      submitLead(finalData);
    }, 500);
  };

  const submitLead = async (data) => {
    try {
      const response = await fetch(CONTACTUS_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          subject: data.service,
          message: "Lead generated automatically via the AI Chatbot flow.",
        }),
      });
      
      const result = await response.json();
      
      if (result.success || response.ok) {
        addBotMessage("All set! 🎉 Our team will get back to you shortly. Feel free to browse our website in the meantime.");
        setStep(5);
      } else {
        addBotMessage("Oops, something went wrong while submitting your details. Please try our contact form instead.");
        setStep(5);
      }
    } catch (error) {
      addBotMessage("Oops, we had a connection error. Please try our contact form instead.");
      setStep(5);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-[9999] flex flex-col items-end font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-[350px] sm:w-[380px] h-[500px] max-h-[80vh] shadow-2xl rounded-2xl mb-4 flex flex-col overflow-hidden border border-gray-200 transition-all duration-300 transform origin-bottom-right scale-100">
          {/* Header */}
          <div className="bg-black text-white p-4 flex justify-between items-center shadow-md z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={chatbotIcon} alt="Leor Assistant" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-[28px] md:text-[45px] font-bold m-0 leading-tight">Leor Assistant</h3>
                <p className="text-[14px] md:text-[18px] text-gray-300 m-0">Typically replies instantly</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors p-1"
            >
              <FaTimes size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                <div 
                  className={`max-w-[85%] px-4 py-2.5 text-[14px] leading-relaxed ${
                    msg.sender === 'user' 
                      ? 'bg-primary text-white rounded-2xl rounded-tr-sm shadow-sm' 
                      : 'bg-white text-gray-800 border border-gray-200 rounded-2xl rounded-tl-sm shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
                {/* Options (if any) */}
                {msg.options && msg.options.length > 0 && (
                  <div className="mt-3 flex flex-col gap-2 w-full max-w-[90%]">
                    {msg.options.map((opt, oIdx) => (
                      <button
                        key={oIdx}
                        onClick={() => handleOptionClick(opt)}
                        disabled={step !== 4}
                        className="text-left text-[13px] font-medium bg-white border border-primary text-primary hover:bg-primary hover:text-white py-2 px-4 rounded-xl transition-all duration-200 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex items-start">
                <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex gap-1.5 items-center h-10">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-gray-200 z-10">
            <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2 border border-gray-300 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
              <input
                type="text"
                placeholder={step === 4 ? "Please select an option above" : step >= 5 ? "Chat ended." : "Type your message..."}
                className="flex-1 bg-transparent border-none outline-none text-[14px] text-gray-800 placeholder-gray-400"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={step === 4 || step >= 5 || isTyping}
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim() || step === 4 || step >= 5 || isTyping}
                className="text-primary hover:text-[#0b4b3b] disabled:text-gray-300 transition-colors flex items-center justify-center p-1.5 rounded-full hover:bg-gray-100 disabled:hover:bg-transparent"
              >
                <FaPaperPlane size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FAB Button and Greeting */}
      {!isOpen && (
        <div className="relative flex flex-col items-end">
          {/* Greeting Popup */}
          {showGreeting && (
            <div 
                className="absolute bottom-full right-0 mb-4 mr-1 bg-white text-gray-800 px-4 py-3 rounded-2xl shadow-xl border border-gray-200 flex items-center gap-3 transition-all duration-300 transform scale-100 origin-bottom-right cursor-pointer hover:shadow-2xl hover:-translate-y-1 z-10"
                onClick={() => { setIsOpen(true); setShowGreeting(false); }}
            >
              <p className="text-[14px] md:text-[18px] font-medium m-0 whitespace-nowrap">Hi! Can I help you? 👋</p>
              <button 
                onClick={(e) => { e.stopPropagation(); setShowGreeting(false); }}
                className="text-gray-400 hover:text-gray-700 p-1 transition-colors"
                aria-label="Close greeting"
              >
                <FaTimes size={12} />
              </button>
              
              {/* Triangle Pointer */}
              <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-b border-r border-gray-200 transform rotate-45 rounded-sm" />
            </div>
          )}

          <button
            onClick={() => { setIsOpen(true); setShowGreeting(false); }}
            className="relative flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300"
            aria-label="Open Chatbot"
          >
            <img src={chatbotIcon} alt="Chatbot" className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-2xl" />
            
            {/* Notification Badge */}
            {messages.length === 0 && (
              <span className="absolute top-0 right-0 w-5 h-5 flex items-center justify-center bg-red-500 text-white text-[10px] font-bold rounded-full border-2 border-white animate-bounce shadow-sm">
                1
              </span>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
