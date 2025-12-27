import { ArrowUpRight } from "lucide-react";
export default function page() {
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
    <div id="" className="max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-10 ">
        <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-rose-600">
          More Selected Work
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 ">
        {projects.map((project, i) => (
          <div key={i} className="group relative">
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
          </div>
        ))}
      </div>

  
    </div>
  );
}
