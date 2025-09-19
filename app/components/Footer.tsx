'use client';

const Footer = () => {
  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black">
      <div className="container mx-auto px-4 @container pb-12 relative z-20">
        <div className="flex flex-col items-center justify-center text-center">
          
          <div className="mb-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <button 
              className="text-gray-300 transition-colors hover:text-white cursor-pointer" 
              onClick={() => handleNavClick('ana-sayfa')}
            >
              Ana Sayfa
            </button>
            <button 
              className="text-gray-300 transition-colors hover:text-white cursor-pointer" 
              onClick={() => handleNavClick('hikayem')}
            >
              Hikayem
            </button>
            <button 
              className="text-gray-300 transition-colors hover:text-white cursor-pointer" 
              onClick={() => handleNavClick('hedefler')}
            >
              Hedefler
            </button>
            <button 
              className="text-gray-300 transition-colors hover:text-white cursor-pointer" 
              onClick={() => handleNavClick('medya')}
            >
              Medya
            </button>
            <button 
              className="text-gray-300 transition-colors hover:text-white cursor-pointer" 
              onClick={() => handleNavClick('galeri')}
            >
              Galeri
            </button>
            <button 
              className="text-gray-300 transition-colors hover:text-white cursor-pointer" 
              onClick={() => handleNavClick('hedefler')}
            >
              Destek Ol
            </button>
          </div>
          
          <p className="text-sm text-gray-500">© 2024 Yener Aras. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
