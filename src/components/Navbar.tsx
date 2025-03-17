import { MenuIcon, XIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };
  return <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Portfolio
          </h1>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['hero', 'companies', 'services', 'experience', 'skills', 'projects', 'contact', 'future-plans'].map(item => <button key={item} onClick={() => scrollToSection(item)} className="text-gray-700 hover:text-purple-600 transition-colors capitalize">
              {item.replace('-', ' ')}
            </button>)}
        </nav>
        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-gray-700 hover:text-purple-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="flex flex-col px-4 py-4 space-y-3">
            {['hero', 'companies', 'services', 'experience', 'skills', 'projects', 'contact', 'future-plans'].map(item => <button key={item} onClick={() => scrollToSection(item)} className="text-gray-700 hover:text-purple-600 transition-colors text-left py-2 capitalize">
                {item.replace('-', ' ')}
              </button>)}
          </div>
        </div>}
    </header>;
};
export default Navbar;