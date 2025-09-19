'use client';

import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false); // Mobile menüyü kapat
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between whitespace-nowrap px-4 md:px-10 py-4 backdrop-blur-sm transition-all duration-300 ${
        isScrolled ? 'bg-black/80' : 'bg-black/30'
      }`}>
        <a 
          href="#" 
          className="text-xl font-bold tracking-wider text-gray-100 hover:text-white transition-colors"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          YENER ARAS
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button 
            className="nav-link text-sm font-medium text-gray-100 hover:text-white transition-colors relative cursor-pointer"
            onClick={() => handleNavClick('ana-sayfa')}
          >
            Ana Sayfa
          </button>
          <button 
            className="nav-link text-sm font-medium text-gray-100 hover:text-white transition-colors relative cursor-pointer"
            onClick={() => handleNavClick('hikayem')}
          >
            Hikayem
          </button>
          <button 
            className="nav-link text-sm font-medium text-gray-100 hover:text-white transition-colors relative cursor-pointer"
            onClick={() => handleNavClick('medya')}
          >
            Medya
          </button>
          <button 
            className="nav-link text-sm font-medium text-gray-100 hover:text-white transition-colors relative cursor-pointer"
            onClick={() => handleNavClick('galeri')}
          >
            Galeri
          </button>
          <button 
            className="nav-link text-sm font-medium text-gray-100 hover:text-white transition-colors relative cursor-pointer"
            onClick={() => handleNavClick('hedefler')}
          >
            Hedefler
          </button>
          <button 
            className="nav-link text-sm font-medium text-gray-100 hover:text-white transition-colors relative cursor-pointer"
            onClick={() => handleNavClick('hedefler')}
          >
            Destek Ol
          </button>
        </nav>
        
        <div className="hidden md:flex items-center gap-2">
          <a 
            aria-label="Instagram" 
            className="group" 
            href="https://instagram.com/arasyenerx" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-transparent transition-colors group-hover:bg-white/10">
                <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28" xmlns="http://www.w3.org/2000/svg">
                  <path d="M128,80a48,48,0,1,0,0,96,48,48,0,0,0,0-96Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                </svg>
            </div>
          </a>
          <a 
            aria-label="YouTube" 
            className="group" 
            href="https://youtube.com/@arasyenerx" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-transparent transition-colors group-hover:bg-white/10">
              <svg className="h-5 w-5 text-gray-100 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498,6.186a3.016,3.016,0,0,0-2.122-2.136C19.505,3.545,12,3.545,12,3.545s-7.505,0-9.377.505A3.017,3.017,0,0,0,.502,6.186C0,8.07,0,12,0,12s0,3.93.502,5.814a3.016,3.016,0,0,0,2.122,2.136c1.871.505,9.376.505,9.376.505s7.505,0,9.377-.505a3.015,3.015,0,0,0,2.122-2.136C24,15.93,24,12,24,12S24,8.07,23.498,6.186ZM9.545,15.568V8.432L15.818,12Z"></path>
              </svg>
            </div>
          </a>
          <a 
            aria-label="TikTok" 
            className="group" 
            href="https://tiktok.com/@arasyenerx" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-transparent transition-colors group-hover:bg-white/10">
              <svg className="h-5 w-5 text-gray-100 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59,6.69a4.83,4.83,0,0,1-3.77-4.25V2h-3.45v13.67a2.89,2.89,0,0,1-5.2,1.74,2.89,2.89,0,0,1,2.31-4.64,2.93,2.93,0,0,1,.88.13V9.4a6.84,6.84,0,0,0-1-.05A6.33,6.33,0,0,0,5,20.1a6.34,6.34,0,0,0,10.86-4.43v-7a8.16,8.16,0,0,0,4.77,1.52v-3.4A4.85,4.85,0,0,1,19.59,6.69Z"></path>
              </svg>
            </div>
          </a>
        </div>
        
        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1 cursor-pointer"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 backdrop-blur-xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`} style={{
        background: 'linear-gradient(135deg, rgba(15, 15, 15, 0.98) 0%, rgba(10, 10, 10, 0.95) 50%, rgba(5, 5, 5, 0.92) 100%)',
        borderLeft: '1px solid rgba(60, 60, 60, 0.8)',
        boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.5)'
      }}>
        <div className="flex flex-col h-full pt-20 px-8">
          {/* Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col space-y-6">
            <button 
              className="text-left text-xl font-medium text-white hover:text-gray-300 hover:translate-x-2 transition-all duration-300 cursor-pointer py-2"
              onClick={() => handleNavClick('ana-sayfa')}
            >
              Ana Sayfa
            </button>
            <button 
              className="text-left text-xl font-medium text-white hover:text-gray-300 hover:translate-x-2 transition-all duration-300 cursor-pointer py-2"
              onClick={() => handleNavClick('hikayem')}
            >
              Hikayem
            </button>
            <button 
              className="text-left text-xl font-medium text-white hover:text-gray-300 hover:translate-x-2 transition-all duration-300 cursor-pointer py-2"
              onClick={() => handleNavClick('medya')}
            >
              Medya
            </button>
            <button 
              className="text-left text-xl font-medium text-white hover:text-gray-300 hover:translate-x-2 transition-all duration-300 cursor-pointer py-2"
              onClick={() => handleNavClick('galeri')}
            >
              Galeri
            </button>
            <button 
              className="text-left text-xl font-medium text-white hover:text-gray-300 hover:translate-x-2 transition-all duration-300 cursor-pointer py-2"
              onClick={() => handleNavClick('hedefler')}
            >
              Hedefler
            </button>
            <button 
              className="text-left text-xl font-medium text-white hover:text-gray-300 hover:translate-x-2 transition-all duration-300 cursor-pointer py-2"
              onClick={() => handleNavClick('hedefler')}
            >
              Destek Ol
            </button>
          </nav>

          {/* Mobile Social Media Links */}
          <div className="mt-auto mb-8">
            <h3 className="text-sm font-medium text-gray-400 mb-6">Sosyal Medya</h3>
            <div className="flex space-x-6">
              <a 
                aria-label="Instagram" 
                className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300" 
                href="https://instagram.com/arasyenerx" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M128,80a48,48,0,1,0,0,96,48,48,0,0,0,0-96Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                </svg>
              </a>
              <a 
                aria-label="YouTube" 
                className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300" 
                href="https://youtube.com/@arasyenerx" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498,6.186a3.016,3.016,0,0,0-2.122-2.136C19.505,3.545,12,3.545,12,3.545s-7.505,0-9.377.505A3.017,3.017,0,0,0,.502,6.186C0,8.07,0,12,0,12s0,3.93.502,5.814a3.016,3.016,0,0,0,2.122,2.136c1.871.505,9.376.505,9.376.505s7.505,0,9.377-.505a3.015,3.015,0,0,0,2.122-2.136C24,15.93,24,12,24,12S24,8.07,23.498,6.186ZM9.545,15.568V8.432L15.818,12Z"></path>
                </svg>
              </a>
              <a 
                aria-label="TikTok" 
                className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300" 
                href="https://tiktok.com/@arasyenerx" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59,6.69a4.83,4.83,0,0,1-3.77-4.25V2h-3.45v13.67a2.89,2.89,0,0,1-5.2,1.74,2.89,2.89,0,0,1,2.31-4.64,2.93,2.93,0,0,1,.88.13V9.4a6.84,6.84,0,0,0-1-.05A6.33,6.33,0,0,0,5,20.1a6.34,6.34,0,0,0,10.86-4.43v-7a8.16,8.16,0,0,0,4.77,1.52v-3.4A4.85,4.85,0,0,1,19.59,6.69Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </>
  );
};

export default Header;