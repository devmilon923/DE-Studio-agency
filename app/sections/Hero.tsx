import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ContactModal from "../modal/modal";
import Link from "next/link";
export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

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
  return (
    <section className=" overflow-hidden mb-10">
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
          <ContactModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
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
                className="bg-rose-600 cursor-pointer flex items-center justify-center gap-3 text-white px-8 py-4 rounded-full font-bold text-sm shadow-lg shadow-rose-900/20"
              >
                Start a Project <ArrowUpRight size={19} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* --- WORK GRID SECTION --- */}
        <div id="work" className="scroll-mt-32">
          <div className="flex justify-between items-end mb-10">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-rose-600">
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
                <div className="aspect-4/3 rounded-4xl overflow-hidden mb-6 border border-white/10 bg-zinc-900">
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
            <Link href={"/works"} className="">
              <button className="border cursor-pointer border-white/20 bg-transparent hover:bg-white hover:text-black text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300">
                View More Work
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
