'use client';

import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section 
      id="ana-sayfa"
      className="relative flex h-screen min-h-[1200px] flex-col items-center justify-center bg-center bg-auto bg-no-repeat p-4 lg:p-24
      bg-[url('/images/header-image.jpg')] "
    >
      <motion.div 
        className="flex max-w-3xl flex-col items-center gap-6 text-center mt-[200px]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-5xl font-black leading-tight tracking-tighter text-white md:text-7xl text-shadow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        >
          Engeller Sadece Zihindedir. <br/> 
          <motion.span 
            className="text-orange-400"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            İnan. Başar. İlham Ol.
          </motion.span>
        </motion.h1>
        <motion.p 
          className="max-w-xl text-base font-light text-gray-100 md:text-xl text-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
        >
          Milli sporcu Yener Aras. Benim hikayem, azmin ve inancın engelleri nasıl aştığını gösteriyor. Başarıya giden yolculuğumda herkese ilham vermek ve potansiyellerini keşfetmelerine yardımcı olmak için buradayım.
        </motion.p>
      </motion.div>
      
      {/* Mobile social media buttons */}
      <motion.div 
        className="md:hidden flex items-center gap-4 mt-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
      >
        <a 
          aria-label="Instagram" 
          className="group" 
          href="https://instagram.com/arasyenerx" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-400 bg-black/20 transition-colors group-hover:bg-white/20">
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
          <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-400 bg-black/20 transition-colors group-hover:bg-white/20">
            <svg className="h-6 w-6 text-gray-200 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
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
          <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-400 bg-black/20 transition-colors group-hover:bg-white/20">
            <svg className="h-6 w-6 text-gray-200 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59,6.69a4.83,4.83,0,0,1-3.77-4.25V2h-3.45v13.67a2.89,2.89,0,0,1-5.2,1.74,2.89,2.89,0,0,1,2.31-4.64,2.93,2.93,0,0,1,.88.13V9.4a6.84,6.84,0,0,0-1-.05A6.33,6.33,0,0,0,5,20.1a6.34,6.34,0,0,0,10.86-4.43v-7a8.16,8.16,0,0,0,4.77,1.52v-3.4A4.85,4.85,0,0,1,19.59,6.69Z"></path>
            </svg>
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
