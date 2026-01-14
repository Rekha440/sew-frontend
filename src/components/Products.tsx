import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  chartImage?: string;
  description: string;
  features: string[];
}

interface ProductsProps {
  onNavigate: (section: string) => void;
}

const products: Product[] = [
  {
    id: 'jaw-crusher',
    name: 'Jaw Crusher',
    category: 'Primary Crushing',
    image: 'https://crushpower.net/images/primary-jaw-crusher-1.jpg',
    chartImage: '/PrimaryJawMachineChart.png',
    description:
      'Jaw Crusher is a heavy-duty primary crushing machine designed to reduce large rocks and ore into smaller sizes using compressive force between fixed and moving manganese steel jaw plates. Widely used in mining, quarrying, construction waste recycling, and stone crushing plants.',
    features: [
      'Available in Double Toggle and Single Toggle types',
      'Jaw plates made from Manganese Steel (12–14% Mn) as per IS: 276 Grade II',
      'Strong MS plate fabricated body with vertical and horizontal reinforcements',
      'Self-aligning double spherical roller bearings with grease lubrication',
      'Two balanced flywheels for smooth and vibration-free operation',
      'Adjustable jaw setting for desired output size',
      'Designed for long service life under heavy-duty conditions'
    ]
  },
  {
    id: 'granulator',
    name: 'Granulator',
    category: 'Secondary Crushing',
    image: 'https://cpimg.tistatic.com/07701714/b/4/Mild-Steel-Granulator-Machine.jpg',
    chartImage: '/SecondaryJawMachineChart.png',
    description:
      'Granulator is a secondary jaw crushing machine manufactured for fine crushing applications. It is used after primary jaw crushers to achieve uniform output size and higher reduction ratios.',
    features: [
      'Used as secondary jaw crusher in crushing plants',
      'Available in single toggle and double toggle configurations',
      'Heavy-duty design for continuous operation',
      'High efficiency and consistent performance',
      'Low maintenance with durable construction',
      'Manufactured in various sizes as per customer requirements'
    ]
  },
  {
    id: 'vibrating-screen',
    name: 'Vibrating Screen',
    category: 'Screening',
    image: 'https://www.dynemix.com/admin/uploads/products/vibrating-screen2.jpg',
    description:
      'Vibrating Screens are designed for accurate material separation using circular motion. They are widely used in stone crushing and screening plants for grading materials into different sizes.',
    features: [
      'Available in Single, Double, Triple, and Four Deck configurations',
      'Circular motion principle for effective screening',
      'Robust welded MS body suitable for harsh working conditions',
      'Maintenance-free and long operational life',
      'Efficient screen plates for precise material separation',
      'Heavy-duty vibrator assembly with grease-lubricated bearings'
    ]
  },
  {
    id: 'roll-crusher',
    name: 'Roll Crusher',
    category: 'Fine Crushing',
    image: 'https://tiimg.tistatic.com/fp/0/143/double-roll-crusher-095.jpg',
    chartImage: '/RollCrusherDustMachineBearingChart.png',
    description:
      'Roll Crusher (Bearing Type Dust Machine) is used for fine crushing by compressing material between two cylindrical rollers rotating in opposite directions.',
    features: [
      'Two parallel cylindrical rollers rotating in opposite directions',
      'Rollers made from chilled iron / high carbon steel / manganese steel',
      'Spring-loaded movable roller for safety against uncrushable material',
      'Strong box-type MS fabricated frame with reinforced ribs',
      'Top and side bolted plates for easy maintenance',
      'Adjustable output size for controlled crushing'
    ]
  },
  {
    id: 'rotopactor',
    name: 'Rotopactor',
    category: 'Tertiary Crushing',
    image: 'https://5.imimg.com/data5/TN/EH/MY-8518573/800-mm-rotopactor-machine-500x500.jpg',
    chartImage: '/RotopactorChart.png',
    description:
      'Rotopactor is a high-speed Horizontal Shaft Impactor used in secondary or tertiary crushing stages to produce cubical and non-flaky aggregates.',
    features: [
      'High-speed rotor operating at 1000–1200 RPM',
      'Produces cubical-shaped aggregates with minimal fines',
      'Stone-to-metal impact crushing mechanism',
      'Adjustable product size settings',
      'Ideal for NHAI road and dam construction projects',
      'High throughput capacity with consistent output'
    ]
  },
  {
    id: 'vibrating-grizzly',
    name: 'Vibrating Grizzly Feeder',
    category: 'Feeding',
    image: '/vibrating-grizzly-feeder-500x500.webp',
    chartImage: '/VibratingGrizzlyFeederChart.png',
    description:
      'Vibrating Grizzly Feeder is installed between the hopper and primary jaw crusher to regulate material flow and remove natural fines before crushing.',
    features: [
      'Dual function: feeding and pre-screening',
      'Reduces load on primary jaw crusher',
      'Designed to handle impact from large boulders',
      'Maintains consistent vibration under heavy load',
      'Heavy-duty construction for quarry and mining applications',
      'Ensures smooth and controlled material flow'
    ]
  },
  {
    id: 'belt-conveyor',
    name: 'Belt Conveyor',
    category: 'Material Handling',
    image: 'https://5.imimg.com/data5/NL/PO/MY-2590286/belt-conveyors-500x500.jpg',
    description:
      'Belt Conveyors are used for material transfer at different stages of crushing plants such as feeding, return, and delivery.',
    features: [
      'Available in 24", 30", 36", 42", 48", and 52" widths',
      'Heavy-duty MS fabricated conveyor frame',
      'Drum pulleys, rollers, bearings, gearbox and motor included',
      'Smooth material flow with high durability',
      'All components manufactured in-house',
      'Custom designs based on plant layout'
    ]
  },
  {
    id: 'steel-hopper',
    name: 'Steel Hopper',
    category: 'Material Handling',
    image: 'https://5.imimg.com/data5/JP/CO/MY-2590286/stainless-steel-hoppers-500x500.jpg',
    description:
      'Steel Hopper is used for unloading raw materials from trucks and feeding material into the vibrating feeder or primary crusher.',
    features: [
      'Manufactured using high-strength steel plates',
      'Available in 30, 50, 60, and 100-ton capacities',
      'Reinforced fabricated structure for durability',
      'Ensures continuous material flow till last stone',
      'Ready-to-fit design for easy installation'
    ]
  },
  {
    id: 'sand-classifier',
    name: 'Sand Classifier',
    category: 'Separation',
    image:
      'https://image.made-in-china.com/365f3j00PRZapJkGndbC/Spiral-Type-Screw-Sand-Washing-Machine-Called-Sand-Washer.webp',
    description:
      'Sand Classifier (Spiral Separator) is used for wet classification and separation of solid-liquid mixtures based on particle size and density.',
    features: [
      'Operates in a fluid pool for effective separation',
      'Upgrades material quality by 2–3%',
      'Coarse particles settle at the bottom for discharge',
      'Fine particles overflow for removal',
      'Improves final sand product quality'
    ]
  },
  {
    id: 'hydro-cyclone',
    name: 'Hydro Cyclone',
    category: 'Separation',
    image:
      'https://5.imimg.com/data5/SELLER/Default/2023/12/368999034/FG/SH/TQ/4758425/water-cyclone-separator-500x500.jpg',
    description:
      'Hydro Cyclone separates particles from slurry using centrifugal force and is widely used in sand washing and mineral processing plants.',
    features: [
      'No moving parts resulting in low maintenance',
      '80–95% separation efficiency',
      'Compact and space-saving design',
      'Effective solid-liquid separation',
      'Used in sand washing, mineral processing and wastewater treatment'
    ]
  }
];

export default function Products({ onNavigate }: ProductsProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       {/* Heading for All Products */}
        <div className="mb-12 text-center">
          <h2 className="text-5xl font-bold mb-4">
            Our Products
          </h2>
          <p className="text-lg text-gray-700">
            Premium stone crushing plants and equipment manufactured with precision and quality
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-sm text-orange-600 mb-2">{product.category}</p>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>
                <button className="flex items-center text-orange-600 font-semibold">
                  Learn More
                  <ChevronRight className="ml-1" size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative p-6">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full max-h-[350px] object-contain mx-auto"
              />
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 bg-white w-10 h-10 rounded-full"
              >
                ✕
              </button>
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold">{selectedProduct.name}</h3>
              <p className="text-orange-600 font-medium mb-4">
                {selectedProduct.category}
              </p>

              <p className="mb-6">{selectedProduct.description}</p>

              {selectedProduct.chartImage && (
                <img
                  src={selectedProduct.chartImage}
                  alt={`${selectedProduct.name} chart`}
                  className={`mx-auto object-contain ${
                    selectedProduct.id === 'roll-crusher'
                      ? 'w-full max-h-[500px]'
                      : 'w-full max-h-[300px]'
                  }`}
                />
              )}

              <h4 className="text-xl font-semibold mt-6 mb-3">
                Features
              </h4>

              <ul className="space-y-3">
                {selectedProduct.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
