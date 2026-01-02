import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './style.css'
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    // { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Roadmap', id: 'roadmap' },
    { label: 'Community', id: 'community' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${
        isScrolled ? 'bg-black/90 backdrop-blur-lg' : 'bg-transparent'
      }`}
      // style={{ marginTop: '48px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 den">
        <div className="flex items-center justify-between h-16 sm:h-20 ">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className=" font-black text-xl sm:text-2xl text-white hover:text-[#7FFF00] transition-colors"
            >
              BABYBUFF
            </button>
          </div>

       {/* Desktop Navigation */}
<div className="hidden md:flex items-between justify-between space-x-8 dane">
  {/* Navigation Links */}
  <div className="flex items-center space-x-8 ">
    {navItems.map((item) => (
      <button
        key={item.id}
        onClick={() => scrollToSection(item.id)}
        className="text-white hover:text-[#7FFF00] transition-colors font-medium text-lg"
      >
        {item.label}
      </button>
    ))}
  </div>
  
  {/* Separate CTA Button */}
  <div >
  <button
    onClick={() => scrollToSection('community')}
    className="bg-[#7FFF00] text-black px-6 py-2 rounded-lg font-bold hover:bg-[#6FEF00] transition-all transform hover:scale-105"
  >
    Join Us
  </button>
  </div>
</div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-gray-800 ">
          <div className="px-4 py-4 space-y-3 ">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className=" block w-full text-left text-white hover:text-[#7FFF00] transition-colors font-medium text-lg py-2"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('community')}
              className="w-full bg-[#7FFF00] text-black px-6 py-3 rounded-lg font-bold hover:bg-[#6FEF00] transition-all mt-2"
            >
              Join Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}