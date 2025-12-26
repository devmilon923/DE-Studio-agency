"use client";
import CustomCursor from "./components/CustomCursor";
import FAQSection from "./sections/FAQ";
import Teams from "./sections/Teams";
import Services from "./sections/Services";
import Reviews from "./sections/Reviews";
import HeroSection from "./sections/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-rose-600 selection:text-white">
      <CustomCursor />
      <HeroSection />
      <Services />
      <Reviews />
      <Teams />

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
            <span className="text-rose-600">DEVELOPMENT</span>.
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

          <FAQSection />
        </div>
      </section>
    </div>
  );
}
