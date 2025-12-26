import { motion } from "framer-motion";
export default function Reviews() {
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
  return (
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
          <div className="text-rose-600 text-5xl font-black">“</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/5 p-10 rounded-[2.5rem] flex flex-col justify-between hover:bg-white/8 transition-colors duration-500"
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
                  <p className="text-[10px] text-rose-600 font-black uppercase tracking-widest">
                    {item.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
