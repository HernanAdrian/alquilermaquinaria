'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { FAQItem } from '@/lib/data/content';

interface CityFAQProps {
  cityName: string;
  items: FAQItem[];
}

export default function CityFAQ({ cityName, items }: CityFAQProps) {
  const [openIdx, setOpenIdx] = useState(0);

  if (items.length === 0) return null;

  return (
    <section className="bg-neutral-50 py-10 md:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-neutral-900 text-center">
          Preguntas frecuentes sobre el alquiler de maquinaria en {cityName}
        </h2>

        <div className="mt-10">
          {items.map((item, idx) => (
            <div key={idx} className="border-b border-neutral-200 py-4 md:py-5">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="flex justify-between items-center w-full text-left cursor-pointer"
              >
                <span className="text-sm font-semibold text-neutral-900 pr-4">{item.question}</span>
                <ChevronDown
                  className={`w-[18px] h-[18px] text-neutral-400 flex-shrink-0 transition-transform duration-200 ${openIdx === idx ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-neutral-600 leading-relaxed mt-3">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
