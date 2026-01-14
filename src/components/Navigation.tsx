// import { useState, useEffect } from 'react';
// import { Menu, X, Phone, Mail, MoveLeft } from 'lucide-react';

// interface NavigationProps {
//   activeSection: string;
//   onNavigate: (section: string) => void;
// }

// export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { id: 'home', label: 'Home' },
//     { id: 'about', label: 'About Us' },
//     { id: 'products', label: 'Products' },
//     { id: 'contact', label: 'Contact Us' },
//   ];

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-slate-900 shadow-lg' : 'bg-gradient-to-b from-slate-900/95 to-transparent'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center py-4">
//           <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('home')}>
//          {/* <div className="bg-gradient-to-br border-0 p-2">
//   <img
//     src="logoSEW.png"
//     className="border-0 img-fluid "
//     style={{ width: "80px", height: "auto" }}
//     alt="SEW Logo"
//   />
// </div>  */}
// <div
//   style={{
//     width: "130px",        // match inner oval width
//     height: "80px",        // match inner oval height
//     // borderRadius: "50%",   // OVAL shape
//     overflow: "hidden",
//     backgroundColor: "transparent",
//     display: "flex",
//     alignItems: "flex-start",
//     justifyContent: "flex-start",
//      marginBottom: "-25px",
//   }}
// >
//   <img
//     src="logoSEW.png"
//     alt="SEW Logo"
//     style={{
//       width: "160px",      // slightly larger to cut white edges
//       height: "auto",
//       objectFit: "cover",
//     }}
//   />
// </div>



//             <div>
//               <h1 className="text-white font-bold text-lg leading-tight">Santosh Engineering Works</h1>
//               <p className="text-orange-400 text-xs">Trusted Since 1993</p>
//             </div>
//           </div>

//           <div className="hidden md:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => onNavigate(item.id)}
//                 className={`text-sm font-medium transition-colors duration-200 ${
//                   activeSection === item.id
//                     ? 'text-orange-500'
//                     : 'text-gray-300 hover:text-orange-400'
//                 }`}
//               >
//                 {item.label}
//               </button>
//             ))}
//             <a
//               href="tel:9810213744"
//               className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-full hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
//             >
//               <Phone size={16} />
//               <span>Call Now</span>
//             </a>
//           </div>

//           <button
//             className="md:hidden text-white"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-slate-900 border-t border-slate-800">
//           <div className="px-4 py-4 space-y-3">
//             {navItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => {
//                   onNavigate(item.id);
//                   setIsMobileMenuOpen(false);
//                 }}
//                 className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
//                   activeSection === item.id
//                     ? 'bg-orange-500 text-white'
//                     : 'text-gray-300 hover:bg-slate-800'
//                 }`}
//               >
//                 {item.label}
//               </button>
//             ))}
//             <div className="flex flex-col space-y-2 pt-2">
//               <a
//                 href="tel:9810213744"
//                 className="flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-lg"
//               >
//                 <Phone size={16} />
//                 <span>9810213744</span>
//               </a>
//               <a
//                 href="mailto:santoshenggworks2011@yahoo.com"
//                 className="flex items-center justify-center space-x-2 bg-slate-800 text-white px-4 py-2 rounded-lg"
//               >
//                 <Mail size={16} />
//                 <span>Email Us</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Navigation({
  activeSection,
  onNavigate,
}: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 🔹 Added "Explore"
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'explore', label: 'Explore' }, // ✅ NEW
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900 shadow-lg'
          : 'bg-gradient-to-b from-slate-900/95 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* LOGO */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div
              style={{
                width: '130px',
                height: '80px',
                overflow: 'hidden',
                backgroundColor: 'transparent',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginBottom: '-25px',
              }}
            >
              <img
                src="logoSEW.png"
                alt="SEW Logo"
                style={{
                  width: '160px',
                  height: 'auto',
                  objectFit: 'cover',
                }}
              />
            </div>

            <div>
              <h1 className="text-white font-bold text-lg leading-tight">
                Santosh Engineering Works
              </h1>
              <p className="text-orange-400 text-xs">
                Trusted Since 1993
              </p>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-orange-500'
                    : 'text-gray-300 hover:text-orange-400'
                }`}
              >
                {item.label}
              </button>
            ))}

            <a
              href="tel:9810213744"
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-full hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-300 hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="flex flex-col space-y-2 pt-2">
              <a
                href="tel:9810213744"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-lg"
              >
                <Phone size={16} />
                <span>9810213744</span>
              </a>

              <a
                href="mailto:santoshenggworks2011@yahoo.com"
                className="flex items-center justify-center space-x-2 bg-slate-800 text-white px-4 py-2 rounded-lg"
              >
                <Mail size={16} />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
