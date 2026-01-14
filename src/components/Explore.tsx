import { MapPin, ExternalLink, FileText, Download } from 'lucide-react';

const MAP_URL =
  'https://www.google.com/maps/search/?api=1&query=Santosh+engineering+works+Faridabad';

export default function Explore() {
  return (
    <section
      id="explore"
      className="py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Our Locations, Gallery & Catalogue
          </h2>
          <p className="text-lg text-gray-700">
           Discover our plants, browse our gallery, and download our catalogue effortlessly.
          </p>
        </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-start">

          {/* ================= LEFT SIDE ================= */}
          <div className="lg:col-span-2 space-y-12">

            {/* IndiaMART Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Reach Us on IndiaMART
              </h3>
              <p className="text-gray-600 mb-6">
                Explore our products, machines, and business profile on IndiaMART.
              </p>
              <a
                href="https://www.indiamart.com/santoshengineeringworks/stone-crushing-plants.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-all"
              >
                Visit IndiaMART
                <ExternalLink size={18} />
              </a>
            </div>

            {/* Machine Gallery */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Machine Gallery
              </h3>
              <p className="text-gray-600 mb-6">
                A glimpse of our manufacturing units, heavy-duty machines,
                and workshop infrastructure.
              </p>

              <div className="overflow-hidden rounded-xl shadow-md">
                <img
                  src="/Gallery.png"
                  alt="Santosh Engineering Works Machine Gallery"
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="space-y-10">

            {/* Location Card */}
            <div className="bg-gradient-to-br from-slate-700 to-slate-900 text-white rounded-2xl p-8 shadow-2xl text-center mt-6">
              <h2 className="text-3xl font-extrabold mb-6">
                Location Map
              </h2>

              <a
                href="https://www.google.com/maps/place/Santosh+engineering+works/@28.47807,77.3023251,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-white text-slate-900 rounded-xl font-semibold hover:bg-orange-500 hover:text-white transition-all"
              >
                <MapPin size={20} />
                Open in Google Maps
                <ExternalLink size={16} />
              </a>

              <div className="bg-white p-4 rounded-xl inline-block mb-6">
                <img
                  src="/LocationMap.png"
                  alt="Santosh Engineering Works Location QR"
                  className="w-44 h-44 object-contain"
                />
              </div>

              <p className="text-gray-300 mb-6">
                Scan this QR code to instantly open our factory location
                on Google Maps.
              </p>

              <a
                href={"https://www.google.com/maps/place/Santosh+engineering+works/@28.47807,77.3023251,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce73905d369ff:0xcdf3d2319ac6ea2a!8m2!3d28.47807!4d77.3049!16s%2Fg%2F11gfgvmbqg?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 rounded-xl font-semibold hover:bg-orange-600 transition-all"
              >
                Get Directions
                <ExternalLink size={18} />
              </a>
            </div>

            {/* Catalogue Card (SEPARATE) */}
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
              <h3 className="text-3xl font-bold text-slate-1000 mb-2">
               Catalogue
              </h3>
              <p className="text-gray-600 mb-6">
                View or download our complete product catalogue.
              </p>

              <div className="flex flex-col gap-4">
                <a
                  href="/Catalogue.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition"
                >
                  <FileText size={18} />
                  View Catalogue
                </a>

                <a
                  href="/Catalogue.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 border-2 border-orange-500 text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-orange-50 transition"
                >
                  <Download size={18} />
                  Download PDF
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
