'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { FAQItem } from '@/lib/data/content';

interface FAQAccordionProps {
  equipmentName: string;
  cityName: string;
  items: FAQItem[];
}

export default function FAQAccordion({ equipmentName, cityName, items }: FAQAccordionProps) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div className="mt-20">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center text-white">
          <HelpCircle size={20} />
        </div>
        <h2 className="text-[28px] font-bold text-neutral-900 leading-tight">
          Preguntas frecuentes
        </h2>
      </div>

      <div className="space-y-3">
        {items.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div 
              key={idx} 
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen ? 'border-primary bg-white shadow-md' : 'border-neutral-200 bg-white hover:border-neutral-300'
              }`}
            >
              <button
                onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                className="flex justify-between items-center w-full px-6 py-5 text-left cursor-pointer group"
              >
                <span className={`text-[17px] font-bold transition-colors ${isOpen ? 'text-primary' : 'text-neutral-900 group-hover:text-primary'}`}>
                  {item.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-primary text-white rotate-180' : 'bg-neutral-100 text-neutral-400 group-hover:bg-neutral-200'}`}>
                  <ChevronDown size={18} />
                </div>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-1 border-t border-neutral-100">
                      <p className="text-neutral-600 text-base leading-relaxed">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
