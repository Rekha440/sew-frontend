import { ArrowRight, Award, Users, Factory } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* HERO IMAGE */}
      <div
        className="absolute inset-0 bg-[url('/belt-conveyors-500x500.webp')] bg-30 bg-center top-0"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Santosh Engineering Works
          <span className="block text-orange-400">
            Stone Crushing Solutions
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
          Trusted manufacturer of stone crushing & screening plants since 1993.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
          <button
            onClick={() => onNavigate('products')}
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-xl"
          >
            Explore Products
            <ArrowRight size={20} />
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-xl"
          >
            Get Quote
          </button>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <StatCard icon={<Award size={48} />} title="30+ Years" desc="Manufacturing Excellence" />
          <StatCard icon={<Users size={48} />} title="1000+" desc="Satisfied Clients" />
          <StatCard icon={<Factory size={48} />} title="100%" desc="In-House Production" />
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon, title, desc }: any) {
  return (
    <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:scale-105 transition">
      <div className="text-orange-400 mb-4 mx-auto">{icon}</div>
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <p className="text-gray-300">{desc}</p>
    </div>
  );
}
