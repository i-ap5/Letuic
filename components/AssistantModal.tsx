
import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { chatWithAssistant, generateLessonPlan } from '../services/geminiService';

interface AssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AssistantModal: React.FC<AssistantModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([
    { role: 'model', text: "Welcome to LetBot. I'm your high-fidelity educational assistant. How can I help you optimize your institution today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    const response = await chatWithAssistant(userMsg, messages);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsTyping(false);
  };

  const handleMagicCommand = (cmd: string) => {
    setInput(cmd);
    // Subtle focus on input after clicking
    const inputEl = document.getElementById('assistant-input');
    inputEl?.focus();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-end justify-center sm:justify-end sm:items-start sm:p-6 pointer-events-none">
      <div className="absolute inset-0 bg-navy-custom/20 backdrop-blur-sm animate-fade-in pointer-events-auto" onClick={onClose}></div>

      <div className="relative pointer-events-auto bg-white w-full sm:w-[440px] h-[85vh] sm:h-[92vh] sm:mr-4 sm:my-auto rounded-t-[32px] sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-slide-up sm:animate-drawer-in border border-white/20">
        {/* Header */}
        <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-white relative z-10">
          <div className="flex items-center gap-4">
            <div className="size-11 bg-navy-custom rounded-2xl flex items-center justify-center shadow-xl rotate-[-2deg]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dbe890" strokeWidth="2.5"><path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" /></svg>
            </div>
            <div>
              <h3 className="font-black text-navy-custom text-lg tracking-tight">LetBot</h3>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]"></span>
                <p className="text-[9px] font-black uppercase tracking-widest text-navy-custom/30 leading-none">Letuic's Assistant</p>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="relative z-50 p-3 hover:bg-navy-custom/5 rounded-full transition-all group active:scale-95 cursor-pointer"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:rotate-90 transition-transform"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-10 space-y-8 bg-apple-grey/20 no-scrollbar">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-up`}>
              <div className={`max-w-[85%] px-6 py-4 rounded-[32px] text-base font-medium text-sm leading-relaxed shadow-sm ${msg.role === 'user'
                ? 'bg-navy-custom text-white rounded-tr-none'
                : 'bg-white text-navy-custom rounded-tl-none border border-gray-100 prose prose-slate prose-sm max-w-none'
                }`}>
                {msg.role === 'user' ? (
                  <div className="whitespace-pre-wrap">{msg.text}</div>
                ) : (
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                )}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white px-6 py-4 rounded-[32px] rounded-tl-none border border-gray-100 shadow-sm">
                <div className="flex gap-2">
                  <div className="size-2 bg-navy-custom/20 rounded-full animate-bounce"></div>
                  <div className="size-2 bg-navy-custom/20 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="size-2 bg-navy-custom/20 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Tray */}
        <div className="px-10 py-4 flex gap-3 overflow-x-auto no-scrollbar border-t border-gray-50 font-normal">
          {['What is Letuic?', 'How do I get started?', 'Is there a mobile app?', 'How do I contact support?'].map(cmd => (
            <button
              key={cmd}
              onClick={() => handleMagicCommand(cmd)}
              className="flex-shrink-0 px-5 py-2.5 bg-white/5 hover:bg-primary/20 text-navy-custom text-xs font-medium tracking-normal rounded-full transition-colors border border-navy-custom/5"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="px-8 py-4 bg-white border-t border-gray-100">
          <div className="relative group">
            <input
              id="assistant-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about Letuic"
              className="w-full bg-apple-grey/60 border-none rounded-2xl py-4 px-4 pr-20 text-md font-medium focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              className="absolute right-1 top-1/2 -translate-y-1/2 size-12 bg-navy-custom text-primary rounded-xl flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
            </button>
          </div>
        </div>

        {/* Footer Disclaimer */}
        <div className="bg-white px-10 pb-4 text-center border-t border-gray-50">
          <p className="text-[10px] pt-0 text-gray-400 font-medium">LetBot can make mistakes. Verify with Letuic records.</p>
        </div>
      </div>
    </div>
  );
};

export default AssistantModal;
