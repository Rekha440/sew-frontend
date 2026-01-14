import { CheckCircle, Target, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Santosh Engineering Works</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/Machines.png"
                alt="Stone Crushing Plant"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-orange-500 to-red-600 text-white p-8 rounded-2xl shadow-2xl">
              <div className="text-4xl font-bold">30+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Delivering Trusted Crushing & Screening Solutions Since 1993</h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              Founded by <strong>Late Shri Santosh Kumar</strong> in 1993, Santosh Engineering Works (SEW) is based in Faridabad, Haryana, India. With extensive industry experience and broad exposure, the company has built a reputation for excellence in stone crushing and screening equipment manufacturing.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              SEW proudly serves clients across India by manufacturing premium stone crushing plants, equipment, and their spares to ensure complete customer satisfaction. Our production capacity ranges from <strong>20 TPH to 200 TPH</strong>, customized to meet specific customer requirements.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">Premium Quality Manufacturing</h4>
                  <p className="text-gray-600">100% in-house production ensures consistent quality control and superior durability</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">Custom Solutions</h4>
                  <p className="text-gray-600">Tailored designs to meet specific site requirements and production needs</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">Pan-India Service</h4>
                  <p className="text-gray-600">Strong service network with 90% repeat client rate and on-time delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-orange-500">
            <Target className="text-orange-500 mb-4" size={48} />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To deliver premium quality stone crushing equipment that exceeds customer expectations and stands the test of time.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-red-500">
            <TrendingUp className="text-red-500 mb-4" size={48} />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be India's most trusted name in stone crushing technology through innovation and customer-centric solutions.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-yellow-500">
            <CheckCircle className="text-yellow-500 mb-4" size={48} />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Our Values</h3>
            <p className="text-gray-600 leading-relaxed">
              Quality means doing it right when no one is looking. We prioritize integrity, excellence, and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
