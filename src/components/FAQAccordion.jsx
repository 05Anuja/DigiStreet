import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion({ items = [], title = "Frequently Asked Questions", subtitle }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-block px-3.5 py-1.5 rounded-md bg-[#EBF3FB] text-[#00529B] border border-blue-200 text-xs font-semibold uppercase tracking-wider mb-3">
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="space-y-4">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-sm transition-all duration-200 hover:border-[#00529B]/40"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-base sm:text-lg text-slate-900 hover:text-[#00529B] gap-4 focus:outline-none transition-colors"
                >
                  <span>{item.q || item.question}</span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-slate-100 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#00529B] text-white' : 'text-slate-600'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    {item.a || item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
