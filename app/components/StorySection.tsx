'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const StorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section id="hikayem" className="py-20 px-4 bg-black relative">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/900 via-black/30 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
        <motion.div 
          ref={ref}
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hikayem
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Kars'tan Kocaeli'ye, atletizmden paralimpik spora uzanan ilham verici yolculuğum.
            </p>
          </motion.div>
          
          <div className="relative">
            
            {/* Doğum ve Çocukluk */}
            <motion.div 
              className="relative mb-12 sm:mb-16"
              variants={itemVariants}
            >
              <div className="story-card rounded-2xl p-6 sm:p-8 relative">
                <div className="absolute top-4 right-4">
                  <span className="text-gray-300 text-sm font-medium bg-gradient-to-r from-gray-800/70 to-gray-600/50 px-3 py-1 rounded-full">1999</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 pr-20">Kars'ta Başlangıç</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Kars'ın Kağızman ilçesinde beş çocuklu çiftçi bir ailenin evladı olarak dünyaya geldim. 
                  2008 yılında ailemle birlikte Kocaeli'nin Darıca ilçesine taşındık.
                </p>
              </div>
            </motion.div>

            {/* Atletizm Kariyeri */}
            <motion.div 
              className="relative mb-12 sm:mb-16"
              variants={itemVariants}
            >
              <div className="story-card rounded-2xl p-6 sm:p-8 relative">
                <div className="absolute top-4 right-4">
                  <span className="text-gray-300 text-sm font-medium bg-gradient-to-r from-gray-800/70 to-gray-600/50 px-3 py-1 rounded-full">2010+</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 pr-20">Atletizm Başarıları</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                  Ortaokul yıllarında atletizmle tanıştım. İlk katıldığım Türkiye Şampiyonası'nda 
                  Türkiye dördüncülüğü elde ettim. Ardından gelen başarılarla:
                </p>
                <ul className="text-gray-300 text-sm sm:text-base space-y-2">
                  <li>• 9 Türkiye Şampiyonluğu</li>
                  <li>• 2 Balkan İkinciliği</li>
                  <li>• 1 Avrupa 9.luğu</li>
                  <li>• Milli takım seviyesine yükseldim</li>
                </ul>
              </div>
            </motion.div>

            {/* Eğitim ve Antrenörlük */}
            <motion.div 
              className="relative mb-12 sm:mb-16"
              variants={itemVariants}
            >
              <div className="story-card rounded-2xl p-6 sm:p-8 relative">
                <div className="absolute top-4 right-4">
                  <span className="text-gray-300 text-sm font-medium bg-gradient-to-r from-gray-800/70 to-gray-600/50 px-3 py-1 rounded-full">2015+</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 pr-20">Eğitim ve Antrenörlük</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                  Marmara Üniversitesi Spor Bilimleri Fakültesi'nden mezun oldum. 
                  Sporculuk kariyerimde yaşadığım sakatlık sonrası antrenörlüğe yöneldim:
                </p>
                <ul className="text-gray-300 text-sm sm:text-base space-y-2">
                  <li>• 6 yıl Galatasaray Futbol Okulu'nda baş antrenörlük</li>
                  <li>• Darıca Eğitim Spor Kulübü'nde yüzme eğitmenliği</li>
                  <li>• Atletik performans koçluğu</li>
                </ul>
              </div>
            </motion.div>

            {/* İş Hayatı ve Nişan */}
            <motion.div 
              className="relative mb-12 sm:mb-16"
              variants={itemVariants}
            >
              <div className="story-card rounded-2xl p-6 sm:p-8 relative">
                <div className="absolute top-4 right-4">
                  <span className="text-gray-300 text-sm font-medium bg-gradient-to-r from-gray-800/70 to-gray-600/50 px-3 py-1 rounded-full">2024</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 pr-20">Yeni Dönem</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  1 Mart 2024'te Golden Body Spor Salonunu devralarak işletmeye başladım. 
                  9 gün sonra nişanlandım. Ancak 2 Eylül 2024'te geçirdiğim trafik kazası sonrası 
                  omurilik felci (parapleji) tanısı konuldu.
                </p>
              </div>
            </motion.div>

            {/* Paralimpik Yolculuk */}
            <motion.div 
              className="relative"
              variants={itemVariants}
            >
              <div className="story-card rounded-2xl p-6 sm:p-8 relative">
                <div className="absolute top-4 right-4">
                  <span className="text-gray-300 text-sm font-medium bg-gradient-to-r from-gray-800/70 to-gray-600/50 px-3 py-1 rounded-full">2024+</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 pr-20">Paralimpik Yolculuk</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Yaşadığım bu büyük dönüm noktasına rağmen spora ve hayata sıkı sıkıya tutunuyorum. 
                  Şimdi paralimpik sporcu olarak yeni bir yolculuğa başladım. En büyük hedefim, 
                  hayalini kurduğum olimpiyat sahnesine çıkmak ve 2028 Los Angeles Paralimpiyatları'nda 
                  ülkemi temsil etmek.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Alt gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 via-black/30 to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

export default StorySection;