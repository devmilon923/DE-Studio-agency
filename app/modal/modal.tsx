"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Loader2, X } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function ContactModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [formState, setFormState] = useState<"idle" | "loading" | "success">(
    "idle"
  );

  useEffect(() => {
    if (isOpen) setFormState("idle");
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");

    // Simulate API call
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="w-full max-w-lg bg-[#FDFDFD] border border-zinc-200 rounded-[2.5rem] shadow-2xl overflow-hidden pointer-events-auto relative text-black"
            >
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-zinc-100 text-zinc-400 hover:text-zinc-900 transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 md:p-10">
                <AnimatePresence mode="wait">
                  {formState === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center text-center py-10"
                    >
                      <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-6 text-rose-600">
                        <Check className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">
                        Message Received
                      </h3>
                      <p className="text-zinc-500 max-w-xs mx-auto mb-8">
                        We've received your inquiry. One of our specialists will
                        email you within 24 hours.
                      </p>
                      <button
                        onClick={onClose}
                        className="bg-zinc-900 text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-rose-600 hover:text-white transition-all cursor-pointer"
                      >
                        Back to Site
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-5"
                    >
                      <div>
                        <h3 className="text-2xl font-bold mb-1 tracking-tight">
                          Start your project
                        </h3>
                        <p className="text-zinc-400 text-sm">
                          Tell us about your brand, design, or dev needs.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="flex-1 space-y-1.5">
                            <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 ml-1">
                              Name
                            </label>
                            <input
                              required
                              type="text"
                              placeholder="John Doe"
                              className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/50 focus:border-rose-600 transition-all placeholder:text-zinc-300"
                            />
                          </div>
                          <div className="flex-1 space-y-1.5">
                            <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 ml-1">
                              Email
                            </label>
                            <input
                              required
                              type="email"
                              placeholder="john@company.com"
                              className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/50 focus:border-rose-600 transition-all placeholder:text-zinc-300"
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 ml-1">
                            Project Details
                          </label>
                          <textarea
                            required
                            rows={3}
                            placeholder="I need a complete brand overhaul and a React application..."
                            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/50 focus:border-rose-600 transition-all resize-none placeholder:text-zinc-300"
                          />
                        </div>
                      </div>

                      <button
                        disabled={formState === "loading"}
                        className="mt-2 cursor-pointer bg-zinc-900 text-white w-full py-4 rounded-xl font-bold text-sm hover:bg-rose-600 hover:text-white transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {formState === "loading" ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <>
                            Send Request <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
