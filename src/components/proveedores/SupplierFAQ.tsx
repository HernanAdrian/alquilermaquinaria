'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SUPPLIER_FAQ } from '@/lib/data/content';

export default function SupplierFAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-3xl font-bold text-neutral-900 text-center">
          Preguntas frecuentes para proveedores
        </h2>

        {/* Accordion */}
        <div className="mt-12">
          {SUPPLIER_FAQ.map((item, idx) => (
            <div key={idx} className="border-b border-neutral-100 py-4">
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
