// import { useState, useEffect } from 'react';
// import Navigation from './components/Navigation';
// import Hero from './components/Hero';
// import About from './components/About';
// import Products from './components/Products';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Explore from './components/Explore';


// function App() {
//   const [activeSection, setActiveSection] = useState('home');

//   const handleNavigate = (section: string) => {
//     setActiveSection(section);
//     const element = document.getElementById(section);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     } else if (section === 'home') {
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['home', 'about', 'products', 'contact'];
//       const scrollPosition = window.scrollY + 100;

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const { offsetTop, offsetHeight } = element;
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(section);
//             break;
//           }
//         } else if (section === 'home' && scrollPosition < 100) {
//           setActiveSection('home');
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen">
//       <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
//       <main>
//         <div id="home">
//           <Hero onNavigate={handleNavigate} />
//         </div>
//         <div id="about">
//           <About />
//         </div>
//         <div id="products">
//           <Products onNavigate={handleNavigate} />
//         </div>
//         <div id="contact">
//           <Contact />
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;
import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Explore from './components/Explore';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigate = (section: string) => {
    setActiveSection(section);

    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // 🔴 Added "explore"
      const sections = ['home', 'about', 'products', 'explore', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        if (section === 'home' && scrollPosition < 150) {
          setActiveSection('home');
          break;
        }

        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      <main>
        <div id="home">
          <Hero onNavigate={handleNavigate} />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="products">
          <Products onNavigate={handleNavigate} />
        </div>

        {/* ✅ EXPLORE SECTION ADDED */}
        <Explore />

        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
