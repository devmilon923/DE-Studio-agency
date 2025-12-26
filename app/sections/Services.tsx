import { motion } from "framer-motion";
export default function Services() {
  return (
    <section id="services" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[10px] uppercase tracking-[0.4em] text-gray-500 mb-16">
          Our Expertise
        </h2>
        <div className="space-y-0">
          {["Brand Identity", "Web Design", "Development", "Subscription"].map(
            (service, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 20 }}
                className="group border-b border-white/10 py-12 flex flex-col md:flex-row md:justify-between md:items-center gap-4 transition-colors hover:border-rose-600/50 cursor-pointer"
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
                  <span className="text-3xl text-gray-800 group-hover:text-rose-600 transition-colors">
                    ✦
                  </span>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
