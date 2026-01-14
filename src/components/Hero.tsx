import { ArrowRight, Award, Users, Factory } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* HERO IMAGE */}
      <div className="absolute inset-0 bg-[url('/belt-conveyors-500x500.png')] bg-cover bg-center" />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center
                      pt-24 sm:pt-28 md:pt-0">

        {/* TITLE */}
        <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl 
                       font-bold text-white mb-4 leading-tight">
          Santosh Engineering Works
          <span className="block text-orange-400 mt-1">
            Stone Crushing Solutions
          </span>
        </h1>

        {/* DESC */}
        <p className="text-sm sm:text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Trusted manufacturer of stone crushing & screening plants since 1993.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-12">
          <button
            onClick={() => onNavigate('products')}
            className="flex items-center justify-center gap-2 
                       bg-orange-500 hover:bg-orange-600 text-white 
                       px-6 py-3 sm:px-8 sm:py-4 
                       rounded-full text-base sm:text-lg 
                       font-semibold transition-all shadow-xl"
          >
            Explore Products
            <ArrowRight size={18} />
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-black hover:bg-gray-100 
                       px-6 py-3 sm:px-8 sm:py-4 
                       rounded-full text-base sm:text-lg 
                       font-semibold transition-all shadow-xl"
          >
            Get Quote
          </button>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
                        gap-6 max-w-4xl mx-auto">
          <StatCard icon={<Award size={36} />} title="30+ Years" desc="Manufacturing Excellence" />
          <StatCard icon={<Users size={36} />} title="1000+" desc="Satisfied Clients" />
          <StatCard icon={<Factory size={36} />} title="100%" desc="In-House Production" />
        </div>
      </div>
    </section>
  );
}

type StatCardProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

function StatCard({ icon, title, desc }: StatCardProps) {
  return (
    <div className="bg-black/60 backdrop-blur-md border border-white/10 
                    rounded-2xl p-5 sm:p-6 
                    hover:scale-105 transition">
      <div className="text-orange-400 mb-3 mx-auto">{icon}</div>
      <h3 className="text-lg sm:text-xl font-bold text-white">{title}</h3>
      <p className="text-gray-300 text-sm sm:text-base">{desc}</p>
    </div>
  );
}
