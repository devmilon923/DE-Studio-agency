"use client";

import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { X, Check, Loader2, ArrowRight, ArrowUpRight } from "lucide-react";

// --- CONTACT MODAL COMPONENT ---
const ContactModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
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
            className="fixed inset-0 z-[10000] bg-black/60 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[10001] flex items-center justify-center pointer-events-none p-4">
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
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
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
                        className="bg-zinc-900 text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-blue-600 hover:text-white transition-all cursor-pointer"
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
                              className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-600 transition-all placeholder:text-zinc-300"
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
                              className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-600 transition-all placeholder:text-zinc-300"
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
                            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-600 transition-all resize-none placeholder:text-zinc-300"
                          />
                        </div>
                      </div>

                      <button
                        disabled={formState === "loading"}
                        className="mt-2 cursor-pointer bg-zinc-900 text-white w-full py-4 rounded-xl font-bold text-sm hover:bg-blue-600 hover:text-white transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
};

// --- CUSTOM CURSOR ---
const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-blue-600 z-[9999] pointer-events-none hidden md:block mix-blend-difference"
      style={{ x: cursorXSpring, y: cursorYSpring }}
    />
  );
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // --- DATA: PROJECTS (New Grid Data) ---
  const projects = [
    {
      title: "Nova Fintech",
      category: "Development / SaaS",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Maison Rogue",
      category: "Brand Identity / E-comm",
      image:
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Apex Architecture",
      category: "Web Design",
      image:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Cipher AI",
      category: "App Interface",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const testimonials = [
    {
      text: "We needed a complete Brand Identity and a Webflow site. DE STUDIO delivered a cohesive system that doubled our conversion.",
      author: "Marcus Aurelius",
      company: "Stoic Tech",
      img: "https://i.pravatar.cc/100?img=11",
    },
    {
      text: "Their Subscription model is a game changer. We have a dedicated Development team on standby without the overhead.",
      author: "Elena Rossi",
      company: "Vogue Global",
      img: "https://i.pravatar.cc/100?img=26",
    },
    {
      text: "From UI/UX to final implementation, the process was seamless. They are true partners in modern Web Design.",
      author: "Julian Thorne",
      company: "Apex Labs",
      img: "https://i.pravatar.cc/100?img=12",
    },
  ];

  const team = [
    {
      name: "Alex Rivera",
      role: "Head of Engineering",
      bio: "Mastermind behind our scalable React & Node.js architectures. Ensures your product is robust.",
      location: "San Fran, CA",
      image: "https://i.pravatar.cc/400?img=11",
      links: { twitter: "#", linkedin: "#" },
    },
    {
      name: "Sarah Chen",
      role: "Design Director",
      bio: "Specializes in Brand Identity and Design Systems. She gives your business a soul.",
      location: "New York, NY",
      image: "https://i.pravatar.cc/400?img=5",
      links: { twitter: "#", linkedin: "#" },
    },
    {
      name: "Jordan Smit",
      role: "Visual Lead",
      bio: "Creating high-impact Web Design visuals that stand out in crowded global markets.",
      location: "Berlin, DE",
      image: "https://i.pravatar.cc/400?img=12",
      links: { twitter: "#", linkedin: "#" },
    },
    {
      name: "Farhan Ali",
      role: "Growth Strategist",
      bio: "Aligns Development and Design with business KPIs for maximum ROI.",
      location: "London, UK",
      image: "https://i.pravatar.cc/400?img=3",
      links: { twitter: "#", linkedin: "#" },
    },
  ];

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

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-600 selection:text-white">
      <CustomCursor />

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* --- NAVIGATION --- */}
      <header className="fixed top-0 w-full z-[100] bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="text-xl font-black tracking-tighter">
            DE<span className="text-blue-600">STUDIO.</span>
          </div>
          <nav className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.2em] font-bold text-gray-400">
            <a href="#work" className="hover:text-white transition-colors">
              Work
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#reviews" className="hover:text-white transition-colors">
              Reviews
            </a>
            <a href="#team" className="hover:text-white transition-colors">
              Team
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>
          <button
            onClick={toggleModal}
            className="hidden md:block border border-white/20 px-6 py-2 rounded-full text-[10px] font-bold hover:bg-white hover:text-black transition-all"
          >
            START A PROJECT
          </button>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="pt-44 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-[clamp(2.5rem,8vw,6.5rem)] font-bold tracking-tighter leading-[0.85] mb-10">
              WE CRAFT <span className="text-gray-500 italic">DIGITAL</span>
              <br />
              BRANDS & PRODUCTS.
            </h1>

            <div className="flex flex-col md:flex-row md:items-center gap-8 mb-24">
              <p className="max-w-md text-gray-400 text-lg leading-relaxed">
                A full-service studio merging strategic{" "}
                <strong>Brand Identity</strong>, immersive{" "}
                <strong>Web Design</strong>, and scalable{" "}
                <strong>Development</strong>.
              </p>
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleModal}
                  className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-sm shadow-lg shadow-blue-900/20"
                >
                  Start a Project ↗
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* --- WORK GRID SECTION --- */}
          <div id="work" className="scroll-mt-32">
            <div className="flex justify-between items-end mb-10">
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
                Selected Work
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {projects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative"
                >
                  <div className="aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 border border-white/10 bg-zinc-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center px-2">
                    <h4 className="text-2xl font-bold tracking-tight">
                      {project.title}
                    </h4>
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center mt-16">
              <button className="border border-white/20 bg-transparent hover:bg-white hover:text-black text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300">
                View More Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-gray-500 mb-16">
            Our Expertise
          </h2>
          <div className="space-y-0">
            {[
              "Brand Identity",
              "Web Design",
              "Development",
              "Subscription",
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 20 }}
                className="group border-b border-white/10 py-12 flex flex-col md:flex-row md:justify-between md:items-center gap-4 transition-colors hover:border-blue-600/50 cursor-pointer"
              >
                <div className="flex items-center gap-8">
                  <span className="text-gray-700 font-mono text-sm">
                    0{i + 1}
                  </span>
                  <h3 className="text-3xl md:text-6xl font-bold tracking-tighter">
                    {service}
                  </h3>
                </div>
                <div className="flex items-center gap-4">
                  <p className="hidden md:block text-gray-500 text-sm max-w-xs text-right opacity-0 group-hover:opacity-100 transition-opacity">
                    {i === 0 && "Logos, Guidelines, & Visual Systems"}
                    {i === 1 && "UI/UX, Interactive & Mobile First"}
                    {i === 2 && "React, Next.js & Full-Stack Solutions"}
                    {i === 3 && "Ongoing Design & Dev as a service"}
                  </p>
                  <span className="text-3xl text-gray-800 group-hover:text-blue-600 transition-colors">
                    ✦
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- REVIEWS SECTION --- */}
      <section id="reviews" className="py-32 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
                Client <span className="text-gray-500 italic">Success</span>
              </h2>
              <p className="text-gray-500 mt-4 text-lg uppercase tracking-widest text-[10px] font-bold">
                Driven by results
              </p>
            </div>
            <div className="text-blue-600 text-5xl font-black">“</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/5 p-10 rounded-[2.5rem] flex flex-col justify-between hover:bg-white/[0.08] transition-colors duration-500"
              >
                <p className="text-xl text-gray-300 leading-relaxed italic mb-10">
                  "{item.text}"
                </p>
                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <img
                    src={item.img}
                    className="w-12 h-12 rounded-full grayscale"
                    alt={item.author}
                  />
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider">
                      {item.author}
                    </h4>
                    <p className="text-[10px] text-blue-600 font-black uppercase tracking-widest">
                      {item.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TEAM SECTION --- */}
      <section id="team" className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              The Specialists.
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              A curated team of experts across Brand Identity, Design, and
              Engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{
                  scale: 1.01,
                  backgroundColor: "rgba(255,255,255,0.08)",
                }}
                className="group relative bg-white/5 border border-white/5 p-8 rounded-[2rem] flex flex-col sm:flex-row gap-8 transition-colors duration-500"
              >
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden bg-zinc-800">
                    <img
                      src={member.image}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      alt={member.name}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-1">
                      {member.name}
                    </h4>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {member.bio}
                    </p>
                  </div>

                  {/* Footer Meta */}
                  <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-blue-600/50 animate-pulse"></span>
                      {member.location}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="text-gray-500 hover:text-white transition-colors"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GRID BANNER --- */}
      <section className="py-32 bg-[#080808] relative border-y border-white/5 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-9xl font-black uppercase leading-[0.8] tracking-tighter italic">
            IDENTITY <br />
            DESIGN <br />
            <span className="text-blue-600">DEVELOPMENT</span>.
          </h2>
        </div>
      </section>

      {/* --- PROCESS & FAQ --- */}
      <section className="bg-white text-black py-32 px-6 rounded-t-[3rem] md:rounded-t-[5rem]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-20 tracking-tight">
            How We Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-40">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-4">
                Step 01
              </span>
              <h4 className="text-2xl font-bold mb-4">Brand Discovery</h4>
              <p className="text-gray-600 leading-relaxed">
                We audit your current identity and define the strategic
                direction before drawing a single line.
              </p>
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-4">
                Step 02
              </span>
              <h4 className="text-2xl font-bold mb-4">Design & Build</h4>
              <p className="text-gray-600 leading-relaxed">
                High-fidelity Web Design followed by pixel-perfect Development
                in React or Webflow.
              </p>
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-4">
                Step 03
              </span>
              <h4 className="text-2xl font-bold mb-4">Launch & Scale</h4>
              <p className="text-gray-600 leading-relaxed">
                We handle the deployment and offer Subscription plans for
                ongoing growth and updates.
              </p>
            </div>
          </div>

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
                      backgroundColor: isOpen
                        ? "rgba(0,0,0,0.03)"
                        : "rgba(0,0,0,0)",
                    }}
                    className="border-t border-black cursor-pointer group rounded-2xl transition-all"
                  >
                    <div className="py-10 px-4 md:px-8 flex gap-6 md:gap-12 items-start">
                      <span
                        className={`font-mono text-sm pt-2 transition-colors duration-300 ${
                          isOpen ? "text-blue-600" : "text-gray-400"
                        }`}
                      >
                        0{i + 1}
                      </span>

                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4
                            className={`text-2xl md:text-4xl font-bold tracking-tight transition-colors duration-300 ${
                              isOpen ? "text-blue-600" : "text-black"
                            }`}
                          >
                            {faq.q}
                          </h4>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            className={`w-8 h-8 rounded-full flex items-center justify-center border transition-colors duration-300 ${
                              isOpen
                                ? "bg-blue-600 border-blue-600 text-white"
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
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contact" className="py-32 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-20">
          <div className="max-w-lg">
            <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-none mb-10">
              LET'S
              <br />
              BUILD.
            </h2>
            <p className="text-blue-600 text-xl font-medium mb-8">
              hello@destudio.design
            </p>
            <button
              onClick={toggleModal}
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-blue-700 transition-all"
            >
              Start Project
            </button>
          </div>
          <div className="grid grid-cols-2 gap-20 text-[11px] font-bold uppercase tracking-[0.3em] text-gray-500">
            <div className="space-y-6">
              <a
                href="#"
                className="block hover:text-blue-600 transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="block hover:text-blue-600 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="block hover:text-blue-600 transition-colors"
              >
                Dribbble
              </a>
            </div>
            <div className="space-y-6">
              <span className="block text-white">Services</span>
              <a
                href="#"
                className="block hover:text-blue-600 transition-colors"
              >
                Brand Identity
              </a>
              <a
                href="#"
                className="block hover:text-blue-600 transition-colors"
              >
                Web Design
              </a>
              <a
                href="#"
                className="block hover:text-blue-600 transition-colors"
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
    </div>
  );
}
