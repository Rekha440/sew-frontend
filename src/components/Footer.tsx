import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
             <div className="bg-gradient-to-br border-0 p-2">
                         <img
                            src="logoSEW.png"
                           className="border-0 img-fluid"
                       style={{ width: "150px", height: "auto" }}
                           alt="SEW Logo"
                                      />
                         </div>

              <div>
                <h3 className="text-xl font-bold">Santosh Engineering Works</h3>
                <p className="text-orange-400 text-sm">Trusted Since 1993</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Manufacturing premium stone crushing plants and equipment with a commitment to quality, reliability, and customer satisfaction for over 30+ years.
            </p>
            { <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-orange-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div> }
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-orange-400 transition-colors">Products</a></li>
              <li><a href="#explore" className='text-gray-400 hover:text-orange-400 transition-colors'>Explore</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-orange-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2 text-gray-400">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span className="text-sm">11, Gali No. 1, Gurukul Indraprasth, Sarai, Faridabad-121003</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone size={18} className="flex-shrink-0" />
                <span className="text-sm">+91 9810213744</span>
              </div>
              <div className="flex items-start space-x-2 text-gray-400">
                <Mail size={18} className="flex-shrink-0 mt-1" />
                <a href="mailto:santoshenggworks2011@yahoo.com" className="text-sm hover:text-orange-400 transition-colors break-all">
                  santoshenggworks2011@yahoo.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy;  1993 Santosh Engineering Works. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Delivering Trusted Crushing & Screening Solutions Since 1993
          </p>
        </div>
      </div>
    </footer>
  );
}
