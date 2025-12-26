import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
export default function Teams() {
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
  return (
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
              className="group relative bg-white/5 border border-white/5 p-8 rounded-4xl flex flex-col sm:flex-row gap-8 transition-colors duration-500"
            >
              {/* Profile Image */}
              <div className="shrink-0">
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
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-rose-600 mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>
                </div>

                {/* Footer Meta */}
                <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-rose-600/50 animate-pulse"></span>
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
  );
}
