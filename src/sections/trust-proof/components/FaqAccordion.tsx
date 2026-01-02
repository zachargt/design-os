'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import type { FAQ } from '@/../product/sections/trust-proof/types'

interface FaqAccordionProps {
  faqs: FAQ[]
  onFaqToggle?: (faqId: string) => void
}

export function FaqAccordion({ faqs, onFaqToggle }: FaqAccordionProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
    onFaqToggle?.(String(index))
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openFaqIndex === index

        return (
          <div
            key={index}
            className="border-2 border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-sky-500 dark:hover:border-sky-400"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full px-6 py-5 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-between gap-4 text-left transition-colors duration-200"
            >
              <span
                className="text-lg font-bold text-slate-900 dark:text-white"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {faq.question}
              </span>
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-100 dark:bg-sky-950 flex items-center justify-center transition-transform duration-300">
                {isOpen ? (
                  <Minus className="w-5 h-5 text-sky-600 dark:text-sky-400" strokeWidth={3} />
                ) : (
                  <Plus className="w-5 h-5 text-sky-600 dark:text-sky-400" strokeWidth={3} />
                )}
              </div>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-48' : 'max-h-0'
              }`}
            >
              <div className="px-6 pb-6 bg-slate-50 dark:bg-slate-800/50">
                <p
                  className="text-slate-700 dark:text-slate-300 leading-relaxed"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
