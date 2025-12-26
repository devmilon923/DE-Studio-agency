"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    q: "What is included in Brand Identity?",
    a: "Our branding package includes logo design, typography systems, color palettes, and a comprehensive brand guideline book.",
  },
  {
    q: "How does the Subscription work?",
    a: "Pay a flat monthly fee for unlimited design and development requests. We work through them one by one, acting as your internal team.",
  },
  {
    q: "Development Tech Stack?",
    a: "We build marketing sites in Webflow for speed and apps in Next.js/React for scalability and performance.",
  },
];

export default function FAQSection() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <div className="max-w-5xl mx-auto">
      <h3 className="text-8xl md:text-9xl font-black mb-16 tracking-tighter text-gray-200 select-none">
        FAQ
      </h3>
      <div className="space-y-4">
        {faqs.map((faq, i) => {
          const isOpen = openFaq === i;
          return (
            <motion.div
              key={i}
              onClick={() => setOpenFaq(isOpen ? null : i)}
              initial={false}
              animate={{
                backgroundColor: isOpen ? "rgba(0,0,0,0.03)" : "rgba(0,0,0,0)",
              }}
              className="border-t border-black cursor-pointer group rounded-2xl transition-all"
            >
              <div className="py-10 px-4 md:px-8 flex gap-6 md:gap-12 items-start">
                <span
                  className={`font-mono text-sm pt-2 transition-colors duration-300 ${
                    isOpen ? "text-rose-600" : "text-gray-400"
                  }`}
                >
                  0{i + 1}
                </span>

                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h4
                      className={`text-2xl md:text-4xl font-bold tracking-tight transition-colors duration-300 ${
                        isOpen ? "text-rose-600" : "text-black"
                      }`}
                    >
                      {faq.q}
                    </h4>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center border transition-colors duration-300 ${
                        isOpen
                          ? "bg-rose-600 border-rose-600 text-white"
                          : "border-black/20 text-black"
                      }`}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 1V11M1 6H11"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                        className="overflow-hidden"
                      >
                        <p className="pt-8 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="w-full border-t border-black mt-4"></div>
    </div>
  );
}
