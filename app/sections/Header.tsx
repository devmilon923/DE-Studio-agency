"use client";
import { useState } from "react";
import ContactModal from "../modal/modal";
import Link from "next/link";
export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <>
      <header className="fixed top-0 w-full z-100 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <Link href={"/"}>
            <div className="text-xl font-black tracking-tighter">
              DE<span className="text-rose-600">STUDIO.</span>
            </div>
          </Link>
          <nav className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.2em] font-bold text-gray-400">
            <a href="/#work" className="hover:text-white transition-colors">
              Work
            </a>
            <Link
              href="/#services"
              className="hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link
              href="/#reviews"
              className="hover:text-white transition-colors"
            >
              Reviews
            </Link>
            <Link href="/#team" className="hover:text-white transition-colors">
              Team
            </Link>
            <Link
              href="/#contact"
              className="hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>
          <button
            onClick={toggleModal}
            className="hidden cursor-pointer md:block border border-white/20 px-6 py-2 rounded-full text-[10px] font-bold hover:bg-white hover:text-black transition-all"
          >
            START A PROJECT
          </button>
        </div>
      </header>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
