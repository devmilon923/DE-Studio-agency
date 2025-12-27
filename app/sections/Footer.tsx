"use client";
import { useState } from "react";
import ContactModal from "../modal/modal";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <>
      <footer id="contact" className="py-32 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-20">
          <div className="max-w-lg">
            <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-none mb-10">
              LET'S
              <br />
              BUILD.
            </h2>
            <p className="text-rose-600 text-xl font-medium mb-8">
              hello@destudio.design
            </p>
            <button
              onClick={toggleModal}
              className="bg-rose-600 cursor-pointer text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-rose-700 transition-all"
            >
              Start Project
            </button>
          </div>
          <div className="grid grid-cols-2 gap-20 text-[11px] font-bold uppercase tracking-[0.3em] text-gray-500">
            <div className="space-y-6">
              <span className="block text-white">Get in touch</span>
              <a
                href="#"
                className="block hover:text-rose-600 transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="block hover:text-rose-600 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="block hover:text-rose-600 transition-colors"
              >
                Dribbble
              </a>
            </div>
            <div className="space-y-6">
              <span className="block text-white">Services</span>
              <a
                href="#"
                className="block hover:text-rose-600 transition-colors"
              >
                Brand Identity
              </a>
              <a
                href="#"
                className="block hover:text-rose-600 transition-colors"
              >
                Web Design
              </a>
              <a
                href="#"
                className="block hover:text-rose-600 transition-colors"
              >
                Development
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-40 pt-10 border-t border-white/5 flex justify-between text-[10px] text-gray-600 font-bold tracking-widest uppercase">
          <span>© 2025 DE STUDIO</span>
          <span>Worldwide • Remote</span>
        </div>
      </footer>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
